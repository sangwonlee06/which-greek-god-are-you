import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Which Greek God Are You?";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#09090d",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* Background glow */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -60%)",
            width: 600,
            height: 600,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(251,191,36,0.12) 0%, transparent 70%)",
          }}
        />

        {/* Emoji */}
        <div style={{ fontSize: 120, marginBottom: 32, lineHeight: 1 }}>
          🏛️
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: 72,
            fontWeight: 900,
            letterSpacing: "-2px",
            lineHeight: 1.05,
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 4,
          }}
        >
          <span
            style={{
              background: "linear-gradient(90deg, #fde68a, #fbbf24, #fde68a)",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
          >
            Which Greek God
          </span>
          <span style={{ color: "rgba(255,255,255,0.9)" }}>Are You?</span>
        </div>

        {/* Subtitle */}
        <div
          style={{
            marginTop: 28,
            fontSize: 26,
            color: "rgba(255,255,255,0.35)",
            letterSpacing: "0.05em",
          }}
        >
          10 questions. One divine answer.
        </div>
      </div>
    ),
    { ...size },
  );
}
