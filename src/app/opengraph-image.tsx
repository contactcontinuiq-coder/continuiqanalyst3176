import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Continuiq | Business Intelligence Partner for Growing Businesses";
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
          background: "#0A0F1E",
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
              "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />

        {/* Glowing orb top-right */}
        <div
          style={{
            position: "absolute",
            top: -80,
            right: -80,
            width: 420,
            height: 420,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, #3B82F6 0%, #1E40AF 40%, transparent 70%)",
            filter: "blur(60px)",
            opacity: 0.35,
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -60,
            left: -60,
            width: 320,
            height: 320,
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
          {/* Top — logo */}
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <div
              style={{
                width: 52,
                height: 52,
                borderRadius: 12,
                background: "#3B82F6",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 0 24px #3B82F680",
              }}
            >
              <span style={{ color: "#fff", fontSize: 28, fontWeight: 700 }}>C</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span
                style={{ color: "#F1F5F9", fontSize: 28, fontWeight: 700, letterSpacing: -0.5 }}
              >
                Continuiq
              </span>
              <span style={{ color: "#64748B", fontSize: 13, fontWeight: 600, letterSpacing: 1, textTransform: "uppercase" }}>
                Business Intelligence Partner
              </span>
            </div>
          </div>

          {/* Centre — headline */}
          <div style={{ display: "flex", flexDirection: "column", gap: 22, maxWidth: 880 }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                padding: "8px 16px",
                borderRadius: 100,
                background: "rgba(245, 158, 11, 0.15)",
                border: "1px solid rgba(245, 158, 11, 0.4)",
                width: "fit-content",
              }}
            >
              <span style={{ color: "#FBBF24", fontSize: 13, fontWeight: 700, letterSpacing: 1 }}>
                FREE DATA AUDIT · WORTH ₹20,000
              </span>
            </div>

            <div
              style={{
                color: "#F1F5F9",
                fontSize: 60,
                fontWeight: 700,
                lineHeight: 1.05,
                letterSpacing: -1.2,
              }}
            >
              Your data already knows where the{" "}
              <span style={{ color: "#60A5FA" }}>money is.</span>{" "}
              We help you find it.
            </div>

            <div style={{ color: "#94A3B8", fontSize: 22, lineHeight: 1.5, maxWidth: 760 }}>
              The outsourced BI team for D2C, retail, manufacturing, logistics & healthcare brands.
            </div>
          </div>

          {/* Bottom — service chips + URL */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <div style={{ display: "flex", gap: 10 }}>
              {[
                "Data Audit",
                "Dashboards",
                "Growth Intelligence",
                "Revenue Optimization",
              ].map((s) => (
                <div
                  key={s}
                  style={{
                    padding: "8px 14px",
                    borderRadius: 8,
                    background: "rgba(255,255,255,0.06)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    color: "#CBD5E1",
                    fontSize: 13,
                    fontWeight: 600,
                  }}
                >
                  {s}
                </div>
              ))}
            </div>
            <div
              style={{
                padding: "14px 24px",
                borderRadius: 12,
                background: "#3B82F6",
                color: "#fff",
                fontSize: 15,
                fontWeight: 700,
                boxShadow: "0 0 20px #3B82F660",
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
