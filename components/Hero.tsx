"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import Image from "next/image";

export default function Hero() {
  const t = useTranslations("hero");

  const trustItems = [
    t("hero-stat-price-label") + " - " + t("hero-stat-price"),
    t("hero-stat-time") + " " + t("hero-stat-time-label"),
    t("hero-stat-contact-label"),
  ];

  return (
    <section
      className="relative overflow-hidden min-h-[100dvh] flex flex-col"
      style={{
        background:
          "linear-gradient(180deg, #020817 0%, #060f1e 60%, #0a1628 100%)",
      }}
    >
      <style>{`
        @keyframes orb-1 {
          0%, 100% { transform: translateX(-50%) translateY(0px) scale(1); }
          33%       { transform: translateX(-50%) translateY(-40px) scale(1.06); }
          66%       { transform: translateX(-50%) translateY(18px) scale(0.96); }
        }
        @keyframes orb-2 {
          0%, 100% { transform: translateY(0px) scale(1); }
          50%       { transform: translateY(-28px) scale(1.1); }
        }
        @keyframes orb-3 {
          0%, 100% { transform: translateY(0px) scale(1); }
          50%       { transform: translateY(32px) scale(0.94); }
        }
        @keyframes fade-up {
          from { opacity: 0; transform: translateY(22px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes scroll-cue {
          0%, 100% { transform: translateY(0); opacity: 0.35; }
          50%       { transform: translateY(7px); opacity: 0.85; }
        }
        @keyframes badge-dot {
          0%, 100% { box-shadow: 0 0 0 0 rgba(34,197,94,0.5); }
          50%       { box-shadow: 0 0 0 5px rgba(34,197,94,0); }
        }
        .fu-0 { animation: fade-up 0.75s cubic-bezier(0.22,1,0.36,1) 0.05s both; }
        .fu-1 { animation: fade-up 0.75s cubic-bezier(0.22,1,0.36,1) 0.18s both; }
        .fu-2 { animation: fade-up 0.75s cubic-bezier(0.22,1,0.36,1) 0.30s both; }
        .fu-3 { animation: fade-up 0.75s cubic-bezier(0.22,1,0.36,1) 0.42s both; }
        .fu-4 { animation: fade-up 0.75s cubic-bezier(0.22,1,0.36,1) 0.52s both; }
      `}</style>

      {/* SEO preload */}
      <Image
        src="/assets/images/og-image.jpg"
        alt="Webuild.ge - Web Development for Businesses"
        width={1200}
        height={630}
        className="hidden"
        priority
      />

      {/* ── Animated orbs ── */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div
          className="absolute"
          style={{
            top: "-18%",
            left: "50%",
            width: "1000px",
            height: "750px",
            animation: "orb-1 16s ease-in-out infinite",
            background:
              "radial-gradient(ellipse at center top, rgba(37,99,235,0.22) 0%, rgba(37,99,235,0.06) 45%, transparent 70%)",
          }}
        />
        <div
          className="absolute"
          style={{
            top: "28%",
            left: "-10%",
            width: "580px",
            height: "580px",
            animation: "orb-2 20s ease-in-out infinite",
            background:
              "radial-gradient(ellipse at center, rgba(29,78,216,0.10) 0%, transparent 65%)",
          }}
        />
        <div
          className="absolute"
          style={{
            top: "12%",
            right: "-6%",
            width: "480px",
            height: "480px",
            animation: "orb-3 24s ease-in-out infinite",
            background:
              "radial-gradient(ellipse at center, rgba(139,92,246,0.09) 0%, transparent 65%)",
          }}
        />
      </div>

      {/* ── Dot grid ── */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* ── Content ── */}
      <div className="container-lg relative flex-1 flex flex-col items-center justify-center pt-24 pb-28">
        <div className="max-w-[900px] mx-auto text-center">
          {/* Headline */}
          <h1
            className="fu-1 font-bold tracking-tight mb-5"
            style={{
              fontSize: "clamp(2.4rem, 6vw, 4.25rem)",
              lineHeight: 1.08,
              color: "#f1f5f9",
              letterSpacing: "-0.025em",
            }}
          >
            {t("hero-title")}
            <br />
            <span
              style={{
                backgroundImage:
                  "linear-gradient(90deg, #60a5fa 0%, #818cf8 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              {t("hero-subtitle")}
            </span>
          </h1>

          {/* Description */}
          <p
            className="fu-2 leading-relaxed mb-9 max-w-[520px] mx-auto"
            style={{ fontSize: "1.0625rem", color: "#7a93ad" }}
          >
            {t("hero-description")}
          </p>

          {/* CTAs */}
          <div className="fu-3 flex flex-col sm:flex-row gap-3 justify-center items-center mb-8">
            <Link
              href="#examples"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-[15px] font-semibold rounded-xl text-white transition-all duration-200 hover:-translate-y-px hover:shadow-2xl"
              style={{
                background:
                  "linear-gradient(135deg, #3b82f6 0%, #2563eb 60%, #1d4ed8 100%)",
                boxShadow:
                  "0 1px 0 rgba(255,255,255,0.12) inset, 0 4px 20px rgba(37,99,235,0.42)",
              }}
            >
              {t("hero-cta-primary")}
              <svg
                className="w-3.5 h-3.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <Link
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-[15px] font-semibold rounded-xl transition-all duration-200 hover:bg-white/10"
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.11)",
                color: "#94a3b8",
              }}
            >
              {t("hero-cta-secondary")}
            </Link>
          </div>

          {/* Trust strip */}
          <div className="fu-4 flex flex-nowrap justify-center gap-x-7">
            {trustItems.map((item, i) => (
              <span
                key={i}
                className="flex items-center gap-2 text-[14px] font-medium whitespace-nowrap"
                style={{ color: "#5a7a9a" }}
              >
                <svg
                  className="w-3.5 h-3.5 shrink-0"
                  viewBox="0 0 12 12"
                  fill="none"
                >
                  <circle cx="6" cy="6" r="5.5" stroke="rgba(37,99,235,0.45)" />
                  <path
                    d="M3.5 6l1.8 1.8L8.5 4.5"
                    stroke="#3b82f6"
                    strokeWidth="1.3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ── Scroll indicator ── */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5">
        <span
          className="text-[11px] font-medium tracking-widest uppercase"
          style={{ color: "rgba(255,255,255,0.18)" }}
        >
          scroll
        </span>
        <svg
          className="w-4 h-4"
          style={{
            animation: "scroll-cue 1.8s ease-in-out infinite",
            color: "rgba(255,255,255,0.3)",
          }}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </div>
    </section>
  );
}
