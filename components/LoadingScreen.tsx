"use client";

import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [phase, setPhase] = useState<"visible" | "fading" | "gone">("visible");

  useEffect(() => {
    const fadeTimer = setTimeout(() => setPhase("fading"), 1900);
    const goneTimer = setTimeout(() => setPhase("gone"), 2500);
    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(goneTimer);
    };
  }, []);

  if (phase === "gone") return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        background: "#020817",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "28px",
        opacity: phase === "fading" ? 0 : 1,
        transition: "opacity 600ms cubic-bezier(0.4, 0, 0.2, 1)",
        pointerEvents: phase === "fading" ? "none" : "all",
      }}
    >
      <style>{`
        @keyframes text-fill {
          0%   { clip-path: inset(0 100% 0 0); }
          100% { clip-path: inset(0 0% 0 0); }
        }
        @keyframes bar-fill {
          0%   { width: 0%; }
          100% { width: 100%; }
        }
        @keyframes loader-fade-in {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0px); }
        }
      `}</style>

      {/* WEBUILD text */}
      <div
        style={{
          position: "relative",
          display: "inline-block",
          animation: "loader-fade-in 0.4s ease both",
        }}
      >
        {/* Dark base layer */}
        <span
          style={{
            fontSize: "clamp(2.8rem, 11vw, 6.5rem)",
            fontWeight: 900,
            letterSpacing: "-0.04em",
            color: "rgba(255,255,255,0.07)",
            userSelect: "none",
            lineHeight: 1,
          }}
        >
          WEBUILD
        </span>

        {/* Blue gradient fill — sweeps left → right */}
        <span
          style={{
            position: "absolute",
            inset: 0,
            fontSize: "clamp(2.8rem, 11vw, 6.5rem)",
            fontWeight: 900,
            letterSpacing: "-0.04em",
            background: "linear-gradient(90deg, #60a5fa 0%, #818cf8 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            userSelect: "none",
            lineHeight: 1,
            animation: "text-fill 1.4s cubic-bezier(0.4, 0, 0.15, 1) 0.25s both",
          }}
        >
          WEBUILD
        </span>
      </div>

      {/* Progress bar */}
      <div
        style={{
          width: "clamp(140px, 28vw, 220px)",
          height: "2px",
          background: "rgba(255,255,255,0.06)",
          borderRadius: "9999px",
          overflow: "hidden",
          animation: "loader-fade-in 0.4s ease 0.1s both",
        }}
      >
        <div
          style={{
            height: "100%",
            background: "linear-gradient(90deg, #3b82f6, #818cf8)",
            borderRadius: "9999px",
            animation: "bar-fill 1.5s cubic-bezier(0.4, 0, 0.2, 1) 0.25s both",
          }}
        />
      </div>
    </div>
  );
}
