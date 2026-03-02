"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";

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
    <section id="pricing" className="bg-slate-50 py-20 md:py-28 scroll-mt-16">
      <div className="container-lg">
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight leading-[1.1] mb-4">
            {t("pricing-title")}
          </h2>
          <p className="text-lg text-slate-500 leading-relaxed">
            {t("pricing-subtitle")}
          </p>
        </div>

        {/* Pricing card */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
            {/* Card header band */}
            <div className="bg-blue-600 px-8 py-5 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
                <span className="font-bold text-white">
                  {t("pricing-package-name")}
                </span>
              </div>
              <span className="text-xs font-semibold text-white/90 bg-white/20 px-3 py-1 rounded-full">
                {t("pricing-popular")}
              </span>
            </div>

            {/* Card body */}
            <div className="px-8 py-10">
              {/* Price */}
              <div className="text-center mb-10">
                <div className="flex items-end justify-center gap-1 mb-1">
                  <span className="text-6xl font-bold text-slate-900 tracking-tight">
                    600
                  </span>
                  <span className="text-2xl font-semibold text-slate-400 mb-2">
                    {t("pricing-currency")}
                  </span>
                </div>
                <p className="text-slate-500 text-[15px]">
                  {t("pricing-payment-term")}
                </p>
              </div>

              {/* Features */}
              <ul className="grid md:grid-cols-2 gap-3 mb-10">
                {features.map((feat, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <span className="mt-0.5 shrink-0 w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
                      <svg
                        className="w-3 h-3 text-green-600"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                    <span className="text-[14px] text-slate-700 font-medium leading-snug">
                      {feat}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Link
                href="#contact"
                className="flex items-center justify-center gap-2 w-full py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-colors text-[15px]"
              >
                {t("pricing-cta")}
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

              {/* Guarantee */}
              <div className="mt-6 flex items-center justify-center gap-2 text-[13px] text-slate-500">
                <svg
                  className="w-4 h-4 text-green-600 shrink-0"
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

          {/* Custom note */}
          <p className="mt-6 text-center text-slate-500 text-[14px]">
            {t("pricing-custom-note")}{" "}
            <Link
              href="#contact"
              className="text-blue-600 hover:text-blue-700 font-semibold underline underline-offset-2 transition-colors"
            >
              {t("pricing-custom-link")}
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
