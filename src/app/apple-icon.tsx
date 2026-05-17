import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 180,
          height: 180,
          borderRadius: 40,
          background: "linear-gradient(135deg, #0F2A5C 0%, #2563EB 100%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <span
          style={{
            color: "#fff",
            fontSize: 110,
            fontWeight: 700,
            letterSpacing: -4,
            lineHeight: 1,
          }}
        >
          C
        </span>
      </div>
    ),
    { width: 180, height: 180 }
  );
}
