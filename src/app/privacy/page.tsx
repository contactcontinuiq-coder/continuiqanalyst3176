import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/header/Header";
import { Footer } from "@/components/footer/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy | Continuiq Consulting",
  description:
    "Privacy policy for Continuiq Consulting — how we collect, use, and protect your personal data under India's DPDP Act 2023 and GDPR.",
};

const LAST_UPDATED = "May 2026";
const CONTACT_EMAIL = "contactcontinuiq@gmail.com";
const COMPANY = "Continuiq Consulting";
const WEBSITE = "https://continuiqconsulting.com";

function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="space-y-4 scroll-mt-24">
      <h2
        className="text-xl font-semibold text-[var(--text-primary)] pt-2"
        style={{ fontFamily: "var(--font-outfit, sans-serif)" }}
      >
        {title}
      </h2>
      <div className="text-[var(--text-secondary)] space-y-3 leading-relaxed">{children}</div>
    </section>
  );
}

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="flex-1 pt-24 pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-10 pb-8 border-b border-[var(--border)]">
            <p className="text-xs font-semibold uppercase tracking-widest text-[var(--brand-accent)] mb-2">
              Legal
            </p>
            <h1
              className="text-4xl font-bold text-[var(--text-primary)] mb-3"
              style={{ fontFamily: "var(--font-outfit, sans-serif)" }}
            >
              Privacy Policy
            </h1>
            <p className="text-sm text-[var(--text-muted)]">
              Last updated: {LAST_UPDATED} · Effective immediately
            </p>
            <p className="mt-3 text-[var(--text-secondary)] text-sm leading-relaxed">
              This policy explains how {COMPANY} (&quot;we&quot;, &quot;our&quot;, &quot;us&quot;) collects, uses, stores,
              and protects your personal data when you visit{" "}
              <a href={WEBSITE} className="text-[var(--brand-accent)] hover:underline">
                {WEBSITE}
              </a>{" "}
              or submit an audit request. We comply with India&apos;s{" "}
              <strong className="text-[var(--text-primary)]">
                Digital Personal Data Protection (DPDP) Act, 2023
              </strong>{" "}
              and, where applicable, the{" "}
              <strong className="text-[var(--text-primary)]">
                EU General Data Protection Regulation (GDPR)
              </strong>
              .
            </p>
          </div>

          {/* Table of contents */}
          <nav
            aria-label="Privacy policy sections"
            className="mb-10 p-5 rounded-xl border border-[var(--border)] bg-[var(--surface)]"
          >
            <p className="text-xs font-semibold uppercase tracking-widest text-[var(--text-muted)] mb-3">
              Contents
            </p>
            <ol className="space-y-1.5 text-sm text-[var(--brand-accent)]">
              {[
                ["#who-we-are", "1. Who we are"],
                ["#data-we-collect", "2. Data we collect"],
                ["#how-we-use-data", "3. How we use your data"],
                ["#legal-basis", "4. Legal basis (DPDP & GDPR)"],
                ["#data-sharing", "5. Who we share data with"],
                ["#data-retention", "6. How long we keep data"],
                ["#your-rights", "7. Your rights as a Data Principal"],
                ["#cookies", "8. Cookies & analytics"],
                ["#security", "9. Security measures"],
                ["#children", "10. Children's data"],
                ["#changes", "11. Changes to this policy"],
                ["#contact", "12. Contact & grievance officer"],
              ].map(([href, label]) => (
                <li key={href}>
                  <a href={href} className="hover:underline">
                    {label}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          <div className="space-y-10">
            <Section id="who-we-are" title="1. Who we are">
              <p>
                <strong className="text-[var(--text-primary)]">{COMPANY}</strong> is a freelance data
                and business analytics agency based in Indore, Madhya Pradesh, India. We provide
                dashboard development, data audits, and analytics consulting to e-commerce and D2C
                brands.
              </p>
              <p>
                For the purposes of the DPDP Act 2023, we are the{" "}
                <strong className="text-[var(--text-primary)]">Data Fiduciary</strong> — the entity
                that determines the purpose and means of processing your personal data. For GDPR
                purposes, we are the <strong className="text-[var(--text-primary)]">Data Controller</strong>.
              </p>
              <p className="text-sm">
                <strong>Contact:</strong>{" "}
                <a href={`mailto:${CONTACT_EMAIL}`} className="text-[var(--brand-accent)] hover:underline">
                  {CONTACT_EMAIL}
                </a>
              </p>
            </Section>

            <Section id="data-we-collect" title="2. Data we collect">
              <p>We collect only what is necessary to respond to your audit request:</p>
              <div className="overflow-x-auto rounded-xl border border-[var(--border)]">
                <table className="w-full text-sm">
                  <thead className="bg-[var(--surface)] text-[var(--text-primary)]">
                    <tr>
                      <th className="text-left px-4 py-3 font-semibold w-1/3">Data</th>
                      <th className="text-left px-4 py-3 font-semibold w-1/3">Why we collect it</th>
                      <th className="text-left px-4 py-3 font-semibold w-1/3">Required?</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[var(--border)]">
                    {[
                      ["Full name", "To address you personally", "Yes"],
                      ["Business name", "To understand your context", "Yes"],
                      ["Email address", "To send audit report and replies", "Yes"],
                      ["WhatsApp / phone", "Faster communication (optional)", "No"],
                      ["Revenue range", "To qualify and prioritise your request", "Yes"],
                      ["Where you sell", "To tailor the audit scope", "Yes"],
                      ["Data pain points", "To focus the audit on your actual problems", "No"],
                    ].map(([data, reason, req]) => (
                      <tr key={data} className="hover:bg-[var(--surface)] transition-colors">
                        <td className="px-4 py-3 font-medium text-[var(--text-primary)]">{data}</td>
                        <td className="px-4 py-3">{reason}</td>
                        <td className="px-4 py-3">
                          <span
                            className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${
                              req === "Yes"
                                ? "bg-[var(--brand-accent)]/10 text-[var(--brand-accent)]"
                                : "bg-[var(--surface)] text-[var(--text-muted)] border border-[var(--border)]"
                            }`}
                          >
                            {req}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-sm">
                We also collect standard server logs (IP address, browser type, pages visited) via
                Vercel and Plausible Analytics. This data is anonymised and never linked to your
                identity.
              </p>
            </Section>

            <Section id="how-we-use-data" title="3. How we use your data">
              <p>We use your personal data only for the following purposes:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Responding to your free data audit request within 12 hours</li>
                <li>Delivering the audit report and any agreed consulting deliverables</li>
                <li>Sending the automated acknowledgement email on form submission</li>
                <li>Following up on proposals if you asked us to</li>
                <li>Improving our services based on aggregated, anonymised feedback</li>
              </ul>
              <p className="text-sm font-medium text-[var(--text-primary)]">
                We do not sell, rent, or trade your personal data to any third party for marketing
                purposes — ever.
              </p>
            </Section>

            <Section id="legal-basis" title="4. Legal basis for processing (DPDP & GDPR)">
              <p>
                Under the <strong className="text-[var(--text-primary)]">DPDP Act 2023</strong>, we
                process your data on the basis of your{" "}
                <strong className="text-[var(--text-primary)]">free, informed, specific, and
                unconditional consent</strong>, which you give by submitting the audit request form.
                You may withdraw consent at any time (see Section 7).
              </p>
              <p>
                For visitors from the EU/EEA, our{" "}
                <strong className="text-[var(--text-primary)]">GDPR legal basis</strong> is:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-sm">
                <li>
                  <strong className="text-[var(--text-primary)]">Consent</strong> (Art. 6(1)(a)) —
                  for audit form submissions and email communication
                </li>
                <li>
                  <strong className="text-[var(--text-primary)]">Legitimate interests</strong> (Art.
                  6(1)(f)) — for anonymised analytics to improve site performance
                </li>
                <li>
                  <strong className="text-[var(--text-primary)]">Contract performance</strong> (Art.
                  6(1)(b)) — where we have an active consulting engagement with you
                </li>
              </ul>
            </Section>

            <Section id="data-sharing" title="5. Who we share data with">
              <p>
                We share your data only with the following processors, solely to deliver the
                service you requested:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-sm">
                <li>
                  <strong className="text-[var(--text-primary)]">Resend</strong> (transactional
                  email) — your name and email address, to send the auto-reply and our response.
                  Resend is GDPR-compliant and SOC 2 Type II certified.
                </li>
                <li>
                  <strong className="text-[var(--text-primary)]">Google Sheets / Workspace</strong>{" "}
                  — form submissions are stored in a private Google Sheet accessible only to the
                  Continuiq founder. Governed by Google&apos;s DPA.
                </li>
                <li>
                  <strong className="text-[var(--text-primary)]">Vercel</strong> — our hosting
                  provider, which processes server logs. Vercel is GDPR-compliant.
                </li>
                <li>
                  <strong className="text-[var(--text-primary)]">Plausible Analytics</strong> —
                  privacy-first, cookieless analytics. No personal data is collected. Plausible is
                  GDPR/DPDP-compliant by design.
                </li>
              </ul>
              <p className="text-sm">
                No data is transferred to countries outside India or the EU without appropriate
                safeguards (Standard Contractual Clauses where applicable).
              </p>
            </Section>

            <Section id="data-retention" title="6. How long we keep your data">
              <p>We retain your data for the minimum period necessary:</p>
              <ul className="list-disc pl-5 space-y-2 text-sm">
                <li>
                  <strong className="text-[var(--text-primary)]">Audit request submissions</strong>{" "}
                  — 12 months from submission, unless you become a paying client (in which case, for
                  the duration of the engagement + 2 years for invoicing/tax purposes)
                </li>
                <li>
                  <strong className="text-[var(--text-primary)]">Email correspondence</strong> — 24
                  months from last contact
                </li>
                <li>
                  <strong className="text-[var(--text-primary)]">Server/analytics logs</strong>{" "}
                  — 90 days (Vercel default); Plausible data is aggregated and retained indefinitely
                  in anonymised form
                </li>
              </ul>
              <p className="text-sm">
                After the retention period, your data is permanently deleted from our systems and
                from our processors&apos; systems upon request.
              </p>
            </Section>

            <Section id="your-rights" title="7. Your rights as a Data Principal / Data Subject">
              <p>
                Under the <strong className="text-[var(--text-primary)]">DPDP Act 2023</strong>,
                you have the following rights:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-sm">
                <li>
                  <strong className="text-[var(--text-primary)]">Right to access</strong> — request
                  a summary of the personal data we hold about you
                </li>
                <li>
                  <strong className="text-[var(--text-primary)]">Right to correction</strong> —
                  request correction of inaccurate or incomplete data
                </li>
                <li>
                  <strong className="text-[var(--text-primary)]">Right to erasure</strong> — request
                  deletion of your data where there is no legal basis to retain it
                </li>
                <li>
                  <strong className="text-[var(--text-primary)]">Right to grievance redressal
                  </strong> — raise a complaint with our Grievance Officer (see Section 12)
                </li>
                <li>
                  <strong className="text-[var(--text-primary)]">Right to withdraw consent</strong>{" "}
                  — withdraw your consent at any time; this does not affect the lawfulness of
                  processing prior to withdrawal
                </li>
                <li>
                  <strong className="text-[var(--text-primary)]">Right to nominate</strong> — under
                  DPDP, you may nominate another individual to exercise your rights in case of
                  incapacity or death
                </li>
              </ul>
              <p className="text-sm">
                EU/EEA residents also hold GDPR rights including portability (Art. 20), restriction
                of processing (Art. 18), and the right to lodge a complaint with your supervisory
                authority.
              </p>
              <p className="text-sm">
                To exercise any right, email{" "}
                <a href={`mailto:${CONTACT_EMAIL}`} className="text-[var(--brand-accent)] hover:underline">
                  {CONTACT_EMAIL}
                </a>{" "}
                with subject line &quot;Privacy Request&quot;. We will respond within{" "}
                <strong className="text-[var(--text-primary)]">30 days</strong> (the DPDP Act
                mandated timeframe).
              </p>
            </Section>

            <Section id="cookies" title="8. Cookies & analytics">
              <p>
                We use <strong className="text-[var(--text-primary)]">Plausible Analytics</strong>,
                which is{" "}
                <strong className="text-[var(--text-primary)]">
                  cookieless and does not collect any personal data
                </strong>
                . No tracking cookies are set on your device. No cookie consent banner is required
                or shown.
              </p>
              <p className="text-sm">
                Vercel may set functional cookies for performance optimisation. These are strictly
                necessary and do not require consent under Indian or EU law.
              </p>
            </Section>

            <Section id="security" title="9. Security measures">
              <p>We take reasonable technical and organisational measures to protect your data:</p>
              <ul className="list-disc pl-5 space-y-2 text-sm">
                <li>All data in transit is encrypted via HTTPS (TLS 1.2+), enforced by Vercel</li>
                <li>Form data is transmitted directly to Resend and Google Sheets over encrypted connections</li>
                <li>Access to the Google Sheet is restricted to the Continuiq founder account with 2FA enabled</li>
                <li>No passwords or payment card details are ever collected through this website</li>
              </ul>
              <p className="text-sm">
                In the event of a data breach that poses a risk to your rights, we will notify you
                and, where required, the relevant authority within 72 hours of becoming aware of it.
              </p>
            </Section>

            <Section id="children" title="10. Children's data">
              <p>
                Our services are intended for business professionals aged 18 and above. We do not
                knowingly collect personal data from individuals under 18. If you believe we have
                inadvertently collected such data, please contact us immediately at{" "}
                <a href={`mailto:${CONTACT_EMAIL}`} className="text-[var(--brand-accent)] hover:underline">
                  {CONTACT_EMAIL}
                </a>{" "}
                and we will delete it promptly.
              </p>
            </Section>

            <Section id="changes" title="11. Changes to this policy">
              <p>
                We may update this policy from time to time to reflect changes in our practices or
                applicable law. Material changes will be highlighted at the top of this page with an
                updated &quot;Last updated&quot; date. We encourage you to review this page
                periodically.
              </p>
              <p className="text-sm">
                Continued use of{" "}
                <a href={WEBSITE} className="text-[var(--brand-accent)] hover:underline">
                  {WEBSITE}
                </a>{" "}
                after changes are posted constitutes acceptance of the updated policy.
              </p>
            </Section>

            <Section id="contact" title="12. Contact & grievance officer">
              <p>
                For any privacy-related queries, requests, or complaints, contact our{" "}
                <strong className="text-[var(--text-primary)]">Grievance Officer</strong> (as
                required under Section 13 of the DPDP Act 2023):
              </p>
              <div className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-5 text-sm space-y-1">
                <p>
                  <strong className="text-[var(--text-primary)]">Continuiq Consulting</strong>
                </p>
                <p>Indore, Madhya Pradesh, India</p>
                <p>
                  Email:{" "}
                  <a href={`mailto:${CONTACT_EMAIL}`} className="text-[var(--brand-accent)] hover:underline">
                    {CONTACT_EMAIL}
                  </a>
                  <span className="text-[var(--text-muted)] ml-2">(subject: &quot;Privacy Request&quot;)</span>
                </p>
                <p className="text-[var(--text-muted)] pt-2">
                  Response time: within 30 days as per DPDP Act 2023
                </p>
              </div>
              <p className="text-sm">
                If you are unsatisfied with our response, you may escalate your complaint to the{" "}
                <strong className="text-[var(--text-primary)]">
                  Data Protection Board of India
                </strong>{" "}
                (once constituted under the DPDP Act), or to your local data protection supervisory
                authority if you are in the EU/EEA.
              </p>
            </Section>
          </div>

          {/* Back link */}
          <div className="mt-14 pt-8 border-t border-[var(--border)]">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm text-[var(--brand-accent)] hover:underline font-medium"
            >
              ← Back to continuiqconsulting.com
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
