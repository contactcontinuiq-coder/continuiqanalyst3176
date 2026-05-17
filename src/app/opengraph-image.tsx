import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Continuiq Consulting | Data & Business Analytics for D2C Brands";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          background: "#050B1A",
          position: "relative",
          overflow: "hidden",
          fontFamily: "system-ui, -apple-system, sans-serif",
        }}
      >
        {/* Grid overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        {/* Glowing orb top-right */}
        <div
          style={{
            position: "absolute",
            top: -80,
            right: -80,
            width: 400,
            height: 400,
            borderRadius: "50%",
            background: "radial-gradient(circle, #3B82F6 0%, #1E40AF 40%, transparent 70%)",
            filter: "blur(60px)",
            opacity: 0.35,
          }}
        />

        {/* Glowing orb bottom-left */}
        <div
          style={{
            position: "absolute",
            bottom: -60,
            left: -60,
            width: 300,
            height: 300,
            borderRadius: "50%",
            background: "radial-gradient(circle, #60A5FA 0%, transparent 70%)",
            filter: "blur(50px)",
            opacity: 0.2,
          }}
        />

        {/* Content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            height: "100%",
            padding: "60px 80px",
            position: "relative",
          }}
        >
          {/* Top — logo + location */}
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            {/* Logo mark */}
            <div
              style={{
                width: 52,
                height: 52,
                borderRadius: 12,
                background: "#2563EB",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 0 24px #2563EB80",
              }}
            >
              <span style={{ color: "#fff", fontSize: 28, fontWeight: 700 }}>C</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span style={{ color: "#F1F5F9", fontSize: 28, fontWeight: 700, letterSpacing: -0.5 }}>
                Continuiq
              </span>
              <span style={{ color: "#64748B", fontSize: 14, fontWeight: 500 }}>
                📍 Indore · Serving D2C brands globally
              </span>
            </div>
          </div>

          {/* Centre — main headline */}
          <div style={{ display: "flex", flexDirection: "column", gap: 20, maxWidth: 800 }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                padding: "8px 16px",
                borderRadius: 100,
                background: "rgba(37, 99, 235, 0.15)",
                border: "1px solid rgba(37, 99, 235, 0.3)",
                width: "fit-content",
              }}
            >
              <span style={{ color: "#93C5FD", fontSize: 14, fontWeight: 600 }}>
                Free Data Audit · Limited to 3 clients this month
              </span>
            </div>

            <div
              style={{
                color: "#F1F5F9",
                fontSize: 56,
                fontWeight: 700,
                lineHeight: 1.1,
                letterSpacing: -1,
              }}
            >
              Turn your messy{" "}
              <span style={{ color: "#60A5FA" }}>business data</span> into
              decisions that make money.
            </div>

            <div style={{ color: "#94A3B8", fontSize: 22, lineHeight: 1.5, maxWidth: 680 }}>
              Dashboards · Audits · Insights — built for Shopify & D2C brands
            </div>
          </div>

          {/* Bottom — services chips + CTA */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <div style={{ display: "flex", gap: 12 }}>
              {["Sales Dashboard", "Churn Report", "GA + Shopify Audit"].map((s) => (
                <div
                  key={s}
                  style={{
                    padding: "8px 16px",
                    borderRadius: 8,
                    background: "rgba(255,255,255,0.06)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    color: "#CBD5E1",
                    fontSize: 14,
                    fontWeight: 500,
                  }}
                >
                  {s}
                </div>
              ))}
            </div>
            <div
              style={{
                padding: "14px 28px",
                borderRadius: 12,
                background: "#2563EB",
                color: "#fff",
                fontSize: 16,
                fontWeight: 700,
                boxShadow: "0 0 20px #2563EB60",
              }}
            >
              continuiqconsulting.com
            </div>
          </div>
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
