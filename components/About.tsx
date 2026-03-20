"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";

export default function About() {
  const t = useTranslations("about");

  const stats = [
    { value: t("about-stat-1-value"), label: t("about-stat-1-label") },
    { value: t("about-stat-2-value"), label: t("about-stat-2-label") },
    { value: t("about-stat-3-value"), label: t("about-stat-3-label") },
  ];

  return (
    <section
      id="about"
      className="relative overflow-hidden py-24 md:py-32 scroll-mt-10"
      style={{ background: "#f8fafc" }}
    >
      {/* Subtle top accent line */}
      <div
        className="absolute top-0 inset-x-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, #2563eb, transparent)",
        }}
      />

      <div className="container-lg relative">
        <div className="lg:grid lg:grid-cols-[1fr_1fr] lg:gap-20 lg:items-center">
          {/* Left - text content */}
          <div className="mb-14 lg:mb-0">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="h-px w-6" style={{ background: "#2563eb" }} />
              <span
                className="text-[11.5px] font-bold uppercase tracking-[0.12em]"
                style={{ color: "#2563eb" }}
              >
                {t("about-badge")}
              </span>
            </div>

            <h2
              className="font-bold tracking-tight leading-[1.1] mb-6"
              style={{
                fontSize: "clamp(1.9rem, 4vw, 3rem)",
                letterSpacing: "-0.02em",
                color: "#0f172a",
              }}
            >
              {t("about-title-1")}
              <br />
              <span style={{ color: "#2563eb" }}>{t("about-title-2")}</span>
            </h2>

            <div className="space-y-4 mb-8">
              <p
                className="text-[1.0625rem] leading-relaxed"
                style={{ color: "#64748b" }}
              >
                {t("about-p1-text")}
                <span className="font-semibold" style={{ color: "#0f172a" }}>
                  {t("about-p1-location")}
                </span>
                {t("about-p1-rest")}
              </p>
              <p
                className="text-[1.0625rem] leading-relaxed"
                style={{ color: "#64748b" }}
              >
                {t("about-p2-text")}
                <span className="font-semibold" style={{ color: "#2563eb" }}>
                  {t("about-p2-highlight")}
                </span>
                {t("about-p2-rest")}
              </p>
              <p
                className="text-[1.0625rem] leading-relaxed"
                style={{ color: "#64748b" }}
              >
                {t("about-p3-text")}
                <span className="font-semibold" style={{ color: "#0f172a" }}>
                  {t("about-p3-highlight")}
                </span>
                .
              </p>
            </div>

            <Link
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 text-[14.5px] font-semibold rounded-lg text-white transition-all duration-200 hover:-translate-y-px hover:shadow-lg"
              style={{
                background:
                  "linear-gradient(135deg, #3b82f6, #2563eb, #1d4ed8)",
                boxShadow:
                  "0 1px 0 rgba(255,255,255,0.1) inset, 0 4px 14px rgba(37,99,235,0.3)",
              }}
            >
              {t("about-cta")}
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          {/* Right - stat cards */}
          <div className="grid grid-cols-1 gap-4">
            {stats.map((stat, i) => (
              <div
                key={i}
                className="flex items-center gap-6 p-6 rounded-2xl transition-all duration-200 hover:shadow-md"
                style={{
                  background: "#ffffff",
                  border: "1px solid #e2e8f0",
                }}
              >
                {/* Number accent */}
                <div
                  className="shrink-0 w-12 h-12 rounded-xl flex items-center justify-center text-[11px] font-bold"
                  style={{
                    background: "#eff6ff",
                    border: "1px solid #dbeafe",
                    color: "#2563eb",
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div>
                  <div
                    className="text-2xl font-bold tracking-tight mb-0.5"
                    style={{ color: "#0f172a", letterSpacing: "-0.02em" }}
                  >
                    {stat.value}
                  </div>
                  <div
                    className="text-[13.5px] font-medium"
                    style={{ color: "#64748b" }}
                  >
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
