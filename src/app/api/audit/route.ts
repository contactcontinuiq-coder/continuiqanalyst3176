import { NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

// Mirror of the client-side schema in AuditPageClient.tsx.
// We re-validate on the server to harden against direct API calls.
const auditSchema = z.object({
  name: z.string().min(2),
  company: z.string().min(2),
  website: z.string().min(2),
  industry: z.string().min(1),
  revenue: z.string().min(1),
  question: z.string().min(10).max(500),
  phone: z.string().min(6),
  email: z.string().email(),
});

type AuditData = z.infer<typeof auditSchema>;

const NOTIFICATION_TO = "contactcontinuiq@gmail.com";
// Resend lets you send from onboarding@resend.dev without domain verification.
// To send from continuiqconsulting.com, verify the domain in Resend dashboard
// and update FROM_ADDRESS to e.g. "Continuiq Audit <audit@continuiqconsulting.com>".
const FROM_ADDRESS = "Continuiq Audit <onboarding@resend.dev>";

function buildEmailHtml(d: AuditData): string {
  const row = (label: string, value: string) => `
    <tr>
      <td style="padding:8px 12px;background:#F4F6FB;color:#4B5563;font-size:13px;font-weight:600;width:140px;vertical-align:top;border-bottom:1px solid #E5E7EB;">${escapeHtml(label)}</td>
      <td style="padding:8px 12px;color:#0A0F1E;font-size:14px;line-height:1.5;border-bottom:1px solid #E5E7EB;">${escapeHtml(value)}</td>
    </tr>`;

  return `<!doctype html>
<html><body style="margin:0;padding:0;background:#F4F6FB;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
  <div style="max-width:600px;margin:24px auto;background:#fff;border-radius:12px;overflow:hidden;border:1px solid #E5E7EB;">
    <div style="background:#0A0F1E;padding:20px 24px;">
      <p style="margin:0;color:#60A5FA;font-size:11px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;font-family:'JetBrains Mono',monospace;">New audit request</p>
      <h1 style="margin:6px 0 0 0;color:#fff;font-size:22px;font-weight:700;letter-spacing:-0.3px;">${escapeHtml(d.company)}</h1>
      <p style="margin:6px 0 0 0;color:rgba(255,255,255,0.6);font-size:14px;">from ${escapeHtml(d.name)}</p>
    </div>
    <table cellpadding="0" cellspacing="0" style="width:100%;border-collapse:collapse;">
      ${row("Name", d.name)}
      ${row("Company", d.company)}
      ${row("Website", d.website)}
      ${row("Industry", d.industry)}
      ${row("Revenue", d.revenue)}
      ${row("Email", d.email)}
      ${row("Phone", d.phone)}
      <tr>
        <td style="padding:8px 12px;background:#F4F6FB;color:#4B5563;font-size:13px;font-weight:600;vertical-align:top;">#1 question</td>
        <td style="padding:8px 12px;color:#0A0F1E;font-size:14px;line-height:1.5;">${escapeHtml(d.question).replace(/\n/g, "<br>")}</td>
      </tr>
    </table>
    <div style="padding:20px 24px;background:#F4F6FB;border-top:1px solid #E5E7EB;">
      <p style="margin:0;color:#6B7280;font-size:12px;line-height:1.5;">
        Submitted via continuiqconsulting.com /audit at ${new Date().toISOString()}.<br>
        Reply directly to this email to respond to ${escapeHtml(d.email)}.
      </p>
    </div>
  </div>
</body></html>`;
}

function buildEmailText(d: AuditData): string {
  return [
    `New audit request from ${d.company}`,
    "",
    `Name:     ${d.name}`,
    `Company:  ${d.company}`,
    `Website:  ${d.website}`,
    `Industry: ${d.industry}`,
    `Revenue:  ${d.revenue}`,
    `Email:    ${d.email}`,
    `Phone:    ${d.phone}`,
    "",
    `#1 question:`,
    d.question,
    "",
    `Submitted at ${new Date().toISOString()}`,
  ].join("\n");
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

async function sendNotificationEmail(data: AuditData): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) throw new Error("RESEND_API_KEY not configured");

  const resend = new Resend(apiKey);
  const result = await resend.emails.send({
    from: FROM_ADDRESS,
    to: [NOTIFICATION_TO],
    replyTo: data.email,
    subject: `New audit request: ${data.company} (${data.industry})`,
    html: buildEmailHtml(data),
    text: buildEmailText(data),
  });

  if (result.error) {
    throw new Error(`Resend error: ${result.error.message}`);
  }
}

async function appendToSheet(data: AuditData): Promise<void> {
  const webhookUrl = process.env.SHEETS_WEBHOOK_URL;
  if (!webhookUrl) throw new Error("SHEETS_WEBHOOK_URL not configured");

  const sharedSecret = process.env.SHEETS_WEBHOOK_SECRET ?? "";
  const res = await fetch(webhookUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      secret: sharedSecret,
      submittedAt: new Date().toISOString(),
      ...data,
    }),
  });

  if (!res.ok) {
    throw new Error(`Sheets webhook returned ${res.status}`);
  }
}

export async function POST(req: Request) {
  let payload: unknown;
  try {
    payload = await req.json();
  } catch {
    return NextResponse.json(
      { success: false, message: "Invalid JSON" },
      { status: 400 }
    );
  }

  const parsed = auditSchema.safeParse(payload);
  if (!parsed.success) {
    return NextResponse.json(
      { success: false, message: "Validation failed", errors: parsed.error.flatten() },
      { status: 400 }
    );
  }

  // Run email + (optional) sheet in parallel. Sheet is intentionally optional
  // — if SHEETS_WEBHOOK_URL isn't configured, that channel is skipped silently.
  const sheetEnabled = !!process.env.SHEETS_WEBHOOK_URL;

  const tasks: Array<Promise<{ channel: string; ok: boolean; reason?: unknown }>> = [
    sendNotificationEmail(parsed.data)
      .then(() => ({ channel: "email", ok: true }))
      .catch((reason) => ({ channel: "email", ok: false, reason })),
  ];

  if (sheetEnabled) {
    tasks.push(
      appendToSheet(parsed.data)
        .then(() => ({ channel: "sheet", ok: true }))
        .catch((reason) => ({ channel: "sheet", ok: false, reason }))
    );
  }

  const outcomes = await Promise.all(tasks);

  for (const o of outcomes) {
    if (!o.ok) console.error(`[/api/audit] ${o.channel} failed:`, o.reason);
  }

  const anySucceeded = outcomes.some((o) => o.ok);
  if (!anySucceeded) {
    return NextResponse.json(
      {
        success: false,
        message:
          "We couldn't deliver your request automatically. Please email contactcontinuiq@gmail.com directly.",
      },
      { status: 502 }
    );
  }

  return NextResponse.json({
    success: true,
    delivered: Object.fromEntries(outcomes.map((o) => [o.channel, o.ok])),
  });
}
