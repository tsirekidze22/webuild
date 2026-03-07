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
    strokeWidth={1.8}
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
    strokeWidth={1.8}
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
    strokeWidth={1.8}
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
    strokeWidth={1.8}
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
    strokeWidth={1.8}
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
    strokeWidth={1.8}
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M12 6v6l4 2" />
  </svg>,
];

const techStack = ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"];

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

  const stepKeys = ["1", "2", "3"] as const;

  return (
    <section id="pricing" className="bg-slate-50 py-16 md:py-28 scroll-mt-16">
      <div className="container-lg">
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-10 md:mb-14">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight leading-[1.1] mb-3 md:mb-4">
            {t("pricing-title")}
          </h2>
          <p className="text-base md:text-lg text-slate-500 leading-relaxed">
            {t("pricing-subtitle")}
          </p>
        </div>

        {/* Split card */}
        <div className="rounded-2xl md:rounded-3xl overflow-hidden border border-slate-200 shadow-xl md:shadow-2xl shadow-slate-300/30 flex flex-col lg:flex-row">
          {/* ── Left: dark, price + process ── */}
          <div
            className="lg:w-[38%] px-6 md:px-10 py-8 md:py-10 flex flex-col"
            style={{
              background:
                "radial-gradient(ellipse at 20% 10%, #1e293b 0%, #0f172a 60%)",
            }}
          >
            {/* Top row: badge + package label side by side on mobile */}
            <div className="flex items-center justify-between mb-6 lg:block lg:mb-0">
              <span className="text-[11px] font-bold text-orange-400 bg-orange-400/10 border border-orange-400/20 rounded-full px-3 py-1 uppercase lg:mb-8 lg:self-start">
                {t("pricing-offer-label")}
              </span>
              <p className="text-slate-500 text-[11px] font-bold uppercase tracking-[0.16em] lg:hidden">
                {t("pricing-package-name")}
              </p>
            </div>

            {/* Package label - desktop only (shown above on mobile) */}
            <p className="hidden mt-4 lg:block text-slate-500 text-[11px] font-bold uppercase tracking-[0.2em] mb-4">
              {t("pricing-package-name")}
            </p>

            {/* Strikethrough */}
            <p className="text-slate-600 line-through text-lg md:text-xl font-medium mb-1">
              1 200 {t("pricing-currency")}
            </p>

            {/* Main price */}
            <div className="flex items-end gap-1.5 mb-3 md:mb-4">
              <span className="text-[72px] md:text-[88px] font-extrabold text-white leading-none tracking-tight">
                600
              </span>
              <span className="text-2xl md:text-3xl font-semibold text-slate-500 mb-2 md:mb-3">
                {t("pricing-currency")}
              </span>
            </div>

            {/* Savings + mini CTA row on mobile */}
            <div className="flex items-center gap-3 flex-wrap mb-2">
              <div className="inline-flex items-center gap-1.5 bg-green-500/10 text-green-400 border border-green-500/20 rounded-full px-3 py-1 text-[13px] font-semibold">
                <svg
                  className="w-3.5 h-3.5"
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
              </div>
            </div>

            {/* Payment term */}
            <p className="text-slate-500 text-[12.5px] leading-relaxed mb-0 lg:mb-0">
              {t("pricing-payment-term")}
            </p>

            {/* Process steps - desktop only (mobile version is in right panel) */}
            <div className="hidden lg:block">
              <div className="h-px bg-slate-700/50 my-8" />
              <p className="text-slate-500 text-[11px] font-bold uppercase tracking-[0.2em] mb-7">
                {t("pricing-steps-heading")}
              </p>
              <div className="flex flex-col">
                {stepKeys.map((key, i) => (
                  <div key={key} className="flex gap-4 relative">
                    {i < stepKeys.length - 1 && (
                      <div className="absolute left-[13px] top-7 h-[calc(100%-4px)] w-px bg-slate-700" />
                    )}
                    <div className="relative z-10 shrink-0 w-7 h-7 rounded-full bg-slate-800 border border-slate-600 flex items-center justify-center text-[11px] font-bold text-blue-400 mb-6">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <div className="pb-6">
                      <p className="text-white font-semibold text-[14px] leading-snug mb-1">
                        {t(`pricing-step${key}-title` as any)}
                      </p>
                      <p className="text-slate-400 text-[13px] leading-relaxed">
                        {t(`pricing-step${key}-desc` as any)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── Right: features + CTA ── */}
          <div className="lg:w-[62%] bg-white px-6 md:px-10 py-8 md:py-10 flex flex-col">
            {/* Mobile: compact 3-step strip */}
            <div className="grid grid-cols-3 gap-2 mb-6 lg:hidden">
              {stepKeys.map((key, i) => (
                <div
                  key={key}
                  className="text-center p-3 bg-slate-50 rounded-xl border border-slate-100"
                >
                  <div className="text-blue-600 text-[11px] font-bold mb-1">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div className="text-slate-700 text-[12px] font-semibold leading-tight">
                    {t(`pricing-step${key}-title` as any)}
                  </div>
                </div>
              ))}
            </div>

            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400 mb-4 md:mb-5">
              {t("pricing-included-heading")}
            </p>

            {/* Feature cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-6 md:mb-8 flex-1">
              {features.map((feat, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 p-3 md:p-4 rounded-xl border border-slate-100 bg-slate-50/60"
                >
                  <span className="shrink-0 w-8 h-8 rounded-lg bg-white border border-slate-200 text-blue-600 flex items-center justify-center shadow-sm">
                    {featureIcons[i]}
                  </span>
                  <span className="text-[13.5px] md:text-[14px] text-slate-700 leading-snug font-medium">
                    {feat}
                  </span>
                </div>
              ))}
            </div>

            {/* Risk-free callout */}
            <div className="bg-green-50 border border-green-100 rounded-xl p-3.5 md:p-4 mb-4 md:mb-5 flex gap-3">
              <svg
                className="w-5 h-5 text-green-500 shrink-0 mt-0.5"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <div>
                <p className="font-semibold text-green-900 text-sm mb-0.5">
                  {t("pricing-risk-title")}
                </p>
                <p className="text-green-800/70 text-[13px] leading-relaxed">
                  {t("pricing-risk-note")}
                </p>
              </div>
            </div>

            {/* CTA */}
            <Link
              href="#contact"
              className="flex items-center justify-center gap-2 w-full py-4 rounded-xl font-semibold text-[15px] text-white transition-all"
              style={{
                background: "linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)",
                boxShadow: "0 4px 14px 0 rgba(37,99,235,0.35)",
              }}
            >
              {t("pricing-cta")}
            </Link>

            {/* Guarantee */}
            <div className="mt-3 md:mt-4 flex items-center justify-center gap-1.5 text-[12.5px] text-slate-400">
              <svg
                className="w-3.5 h-3.5 text-green-500 shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span>{t("pricing-guarantee")}</span>
            </div>
          </div>
        </div>

        {/* Credibility strip */}
        <div className="mt-5 flex flex-col sm:flex-row items-center justify-center gap-2.5 sm:gap-6">
          <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-[0.15em]">
            Built on
          </span>
          <div className="flex items-center gap-2 flex-wrap justify-center">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="text-[12px] font-medium text-slate-500 bg-white border border-slate-200 rounded-full px-3 py-1 shadow-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Custom note */}
        <p className="mt-4 md:mt-5 text-center text-slate-500 text-[13.5px] md:text-[14px]">
          {t("pricing-custom-note")}{" "}
          <Link
            href="#contact"
            className="text-blue-600 hover:text-blue-700 font-semibold underline underline-offset-2 transition-colors"
          >
            {t("pricing-custom-link")}
          </Link>
        </p>
      </div>
    </section>
  );
}
