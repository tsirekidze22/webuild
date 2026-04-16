"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";

const featureIcons = [
  <svg
    key="f1"
    className="w-4 h-4"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    strokeWidth={1.75}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>,
  <svg
    key="f2"
    className="w-4 h-4"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    strokeWidth={1.75}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="5" y="2" width="14" height="20" rx="2" />
    <path d="M12 18h.01" />
  </svg>,
  <svg
    key="f3"
    className="w-4 h-4"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    strokeWidth={1.75}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <path d="M3 9h18M9 21V9" />
  </svg>,
  <svg
    key="f4"
    className="w-4 h-4"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    strokeWidth={1.75}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="11" cy="11" r="8" />
    <path d="m21 21-4.35-4.35" />
  </svg>,
  <svg
    key="f5"
    className="w-4 h-4"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    strokeWidth={1.75}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="2" y="2" width="20" height="8" rx="2" />
    <rect x="2" y="14" width="20" height="8" rx="2" />
    <path d="M6 6h.01M6 18h.01" />
  </svg>,
  <svg
    key="f6"
    className="w-4 h-4"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    strokeWidth={1.75}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M12 6v6l4 2" />
  </svg>,
];

const techStack = ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"];

const stepKeys = ["1", "2", "3"] as const;

export default function Pricing() {
  const t = useTranslations("pricing");

  const features = [
    t("pricing-f1"),
    t("pricing-f2"),
    t("pricing-f3"),
    t("pricing-f4"),
    t("pricing-f5"),
    t("pricing-f6"),
  ];

  return (
    <section
      id="pricing"
      className="py-24 md:py-32 scroll-mt-16"
      style={{ background: "#f8fafc" }}
    >
      <div className="container-lg">
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-12 md:mb-16">
          <div className="flex items-center justify-center gap-2.5 mb-5">
            <div className="h-px w-6" style={{ background: "#2563eb" }} />
            <span
              className="text-[11.5px] font-bold uppercase tracking-[0.12em]"
              style={{ color: "#2563eb" }}
            >
              Pricing
            </span>
            <div className="h-px w-6" style={{ background: "#2563eb" }} />
          </div>
          <h2
            className="font-bold tracking-tight leading-[1.1] mb-4"
            style={{
              fontSize: "clamp(1.9rem, 4vw, 3rem)",
              letterSpacing: "-0.02em",
              color: "#0f172a",
            }}
          >
            {t("pricing-title")}
          </h2>
          <p
            className="text-[1.0625rem] leading-relaxed"
            style={{ color: "#64748b" }}
          >
            {t("pricing-subtitle")}
          </p>
        </div>

        {/* Split card */}
        <div
          className="rounded-2xl overflow-hidden flex flex-col lg:flex-row"
          style={{
            border: "1px solid #e2e8f0",
            boxShadow:
              "0 4px 24px rgba(0,0,0,0.06), 0 1px 3px rgba(0,0,0,0.04)",
          }}
        >
          {/* ── Left dark panel: price + process ── */}
          <div
            className="lg:w-[38%] px-8 md:px-10 py-9 md:py-10 flex flex-col"
            style={{
              background: "linear-gradient(160deg, #0f172a 0%, #0a1628 100%)",
            }}
          >
            {/* Offer badge + package label */}
            <div className="flex items-center justify-between mb-6 lg:block lg:mb-0">
              <span
                className="text-[11px] font-bold uppercase tracking-wide px-3 py-1 rounded-full lg:mb-8 lg:self-start inline-block"
                style={{
                  background: "rgba(251,146,60,0.12)",
                  border: "1px solid rgba(251,146,60,0.25)",
                  color: "#fb923c",
                }}
              >
                {t("pricing-offer-label")}
              </span>
              <span
                className="text-[11px] font-bold uppercase tracking-[0.15em] lg:hidden"
                style={{ color: "#334155" }}
              >
                {t("pricing-package-name")}
              </span>
            </div>

            <span
              className="hidden lg:block text-[11px] font-bold uppercase tracking-[0.18em] mb-5 mt-5"
              style={{ color: "#334155" }}
            >
              {t("pricing-package-name")}
            </span>

            {/* Strikethrough price */}
            <p
              className="text-lg font-medium line-through mb-1"
              style={{ color: "#334155" }}
            >
              999 {t("pricing-currency")}
            </p>

            {/* Main price */}
            <div className="flex items-end gap-1.5 mb-3">
              <span
                className="font-extrabold leading-none tracking-tight"
                style={{ fontSize: "clamp(4rem, 9vw, 6rem)", color: "#f1f5f9" }}
              >
                499
              </span>
              <span
                className="text-2xl font-semibold mb-2"
                style={{ color: "#475569" }}
              >
                {t("pricing-currency")}
              </span>
            </div>

            {/* Savings badge */}
            <div className="flex items-center gap-2 mb-3 flex-wrap">
              <span
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[12.5px] font-semibold"
                style={{
                  background: "rgba(34,197,94,0.1)",
                  border: "1px solid rgba(34,197,94,0.2)",
                  color: "#4ade80",
                }}
              >
                <svg
                  className="w-3 h-3"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                {t("pricing-savings")}
              </span>
            </div>

            {/* Payment term */}
            <p
              className="text-[12.5px] leading-relaxed mb-0 lg:mb-0"
              style={{ color: "#334155" }}
            >
              {t("pricing-payment-term")}
            </p>

            {/* Process steps - desktop */}
            <div className="hidden lg:block">
              <div
                className="my-8"
                style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}
              />
              <p
                className="text-[11px] font-bold uppercase tracking-[0.18em] mb-7"
                style={{ color: "#334155" }}
              >
                {t("pricing-steps-heading")}
              </p>
              <div className="flex flex-col">
                {stepKeys.map((key, i) => (
                  <div key={key} className="flex gap-4 relative">
                    {i < stepKeys.length - 1 && (
                      <div
                        className="absolute left-[13px] top-7 h-[calc(100%-4px)] w-px"
                        style={{ background: "rgba(255,255,255,0.07)" }}
                      />
                    )}
                    <div
                      className="relative z-10 shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-[11px] font-bold mb-6"
                      style={{
                        background: "#0f172a",
                        border: "1px solid rgba(255,255,255,0.1)",
                        color: "#60a5fa",
                      }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <div className="pb-6">
                      <p
                        className="font-semibold text-[14px] leading-snug mb-1"
                        style={{ color: "#e2e8f0" }}
                      >
                        {t(`pricing-step${key}-title` as any)}
                      </p>
                      <p
                        className="text-[13px] leading-relaxed"
                        style={{ color: "#475569" }}
                      >
                        {t(`pricing-step${key}-desc` as any)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── Right white panel: features + CTA ── */}
          <div className="lg:w-[62%] bg-white px-8 md:px-10 py-9 md:py-10 flex flex-col">
            {/* Mobile: 3-step strip */}
            <div className="grid grid-cols-3 gap-2 mb-7 lg:hidden">
              {stepKeys.map((key, i) => (
                <div
                  key={key}
                  className="text-center p-3 rounded-xl"
                  style={{ background: "#f8fafc", border: "1px solid #e2e8f0" }}
                >
                  <div
                    className="text-[11px] font-bold mb-1"
                    style={{ color: "#2563eb" }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div
                    className="text-[12px] font-semibold leading-tight"
                    style={{ color: "#334155" }}
                  >
                    {t(`pricing-step${key}-title` as any)}
                  </div>
                </div>
              ))}
            </div>

            <p
              className="text-[11px] font-bold uppercase tracking-[0.18em] mb-5"
              style={{ color: "#94a3b8" }}
            >
              {t("pricing-included-heading")}
            </p>

            {/* Feature chips */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-7 flex-1">
              {features.map((feat, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 p-3.5 rounded-xl transition-colors duration-150 hover:border-blue-200"
                  style={{
                    border: "1px solid #e2e8f0",
                    background: "#f8fafc",
                  }}
                >
                  <span
                    className="shrink-0 w-8 h-8 rounded-lg flex items-center justify-center"
                    style={{
                      background: "#ffffff",
                      border: "1px solid #e2e8f0",
                      color: "#2563eb",
                    }}
                  >
                    {featureIcons[i]}
                  </span>
                  <span
                    className="text-[13.5px] font-medium leading-snug"
                    style={{ color: "#334155" }}
                  >
                    {feat}
                  </span>
                </div>
              ))}
            </div>

            {/* Risk-free note */}
            <div
              className="rounded-xl p-4 mb-5 flex gap-3"
              style={{
                background: "rgba(34,197,94,0.05)",
                border: "1px solid rgba(34,197,94,0.15)",
              }}
            >
              <svg
                className="w-5 h-5 shrink-0 mt-0.5"
                fill="currentColor"
                viewBox="0 0 20 20"
                style={{ color: "#22c55e" }}
              >
                <path
                  fillRule="evenodd"
                  d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <div>
                <p
                  className="font-semibold text-sm mb-0.5"
                  style={{ color: "#166534" }}
                >
                  {t("pricing-risk-title")}
                </p>
                <p
                  className="text-[13px] leading-relaxed"
                  style={{ color: "#15803d" }}
                >
                  {t("pricing-risk-note")}
                </p>
              </div>
            </div>

            {/* CTA */}
            <Link
              href="#contact"
              className="flex items-center justify-center gap-2 w-full py-4 rounded-xl font-semibold text-[15px] text-white transition-all duration-200 hover:-translate-y-px hover:shadow-xl"
              style={{
                background:
                  "linear-gradient(135deg, #3b82f6, #2563eb, #1d4ed8)",
                boxShadow:
                  "0 1px 0 rgba(255,255,255,0.1) inset, 0 4px 18px rgba(37,99,235,0.35)",
              }}
            >
              {t("pricing-cta")}
            </Link>

            {/* Guarantee */}
            <div
              className="mt-4 flex items-center justify-center gap-1.5 text-[12.5px]"
              style={{ color: "#94a3b8" }}
            >
              <svg
                className="w-3.5 h-3.5 shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
                style={{ color: "#22c55e" }}
              >
                <path
                  fillRule="evenodd"
                  d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              {t("pricing-guarantee")}
            </div>
          </div>
        </div>

        {/* Tech stack strip */}
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-2.5 sm:gap-5">
          <span
            className="text-[11px] font-bold uppercase tracking-[0.15em]"
            style={{ color: "#94a3b8" }}
          >
            Built on
          </span>
          <div className="flex items-center gap-2 flex-wrap justify-center">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="text-[12px] font-medium px-3 py-1 rounded-full"
                style={{
                  background: "#ffffff",
                  border: "1px solid #e2e8f0",
                  color: "#64748b",
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Custom quote note */}
        <p
          className="mt-4 text-center text-[13.5px]"
          style={{ color: "#94a3b8" }}
        >
          {t("pricing-custom-note")}{" "}
          <Link
            href="#contact"
            className="font-semibold underline underline-offset-2 transition-colors hover:opacity-80"
            style={{ color: "#2563eb" }}
          >
            {t("pricing-custom-link")}
          </Link>
        </p>
      </div>
    </section>
  );
}
