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
    <section
      id="pricing"
      className="relative py-16 bg-white overflow-hidden scroll-mt-10"
    >
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="relative max-w-7xl mx-auto px-3 lg:px-8">
        {/* Section header */}
        <div className="md:text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              {t("pricing-title")}
            </span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t("pricing-subtitle")}
          </p>
        </div>

        {/* Pricing card */}
        <div className="max-w-4xl mx-auto">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 rounded-3xl blur-xl opacity-25 group-hover:opacity-40 transition-opacity duration-500"></div>

            <div className="relative bg-white rounded-3xl shadow-2xl border-2 border-blue-100 overflow-hidden">
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-3 md:px-8 py-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                  <span className="text-white font-bold text-lg">
                    {t("pricing-package-name")}
                  </span>
                </div>
                <div className="px-4 py-1 bg-white/20 backdrop-blur-sm rounded-full">
                  <span className="text-white text-sm font-semibold">
                    {t("pricing-popular")}
                  </span>
                </div>
              </div>

              <div className="p-3 lg:p-12">
                <div className="text-center mb-10">
                  <div className="flex items-end justify-center gap-2 mb-3">
                    <span className="text-6xl lg:text-7xl font-bold bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">
                      600
                    </span>
                    <span className="text-4xl font-bold text-gray-400 mb-2">
                      {t("pricing-currency")}
                    </span>
                  </div>
                  <p className="text-gray-600 text-lg">
                    {t("pricing-payment-term")}
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-4 mb-10">
                  {features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 group/item"
                    >
                      <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-green-400 to-green-600 rounded-lg flex items-center justify-center mt-0.5 group-hover/item:scale-110 transition-transform">
                        <svg
                          className="w-4 h-4 text-white"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <span className="text-gray-700 font-medium">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Risk-free callout */}
                <div className="mb-8 rounded-2xl border border-green-200 bg-green-50 px-6 py-5 flex gap-4 items-start">
                  <div className="flex-shrink-0 w-9 h-9 bg-green-100 border border-green-200 rounded-xl flex items-center justify-center mt-0.5">
                    <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold text-green-800 mb-1">{t("pricing-risk-title")}</p>
                    <p className="text-green-700 text-sm leading-relaxed">{t("pricing-risk-note")}</p>
                  </div>
                </div>

                <Link
                  href="#contact"
                  className="group/btn relative block w-full py-5 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-2xl font-bold text-lg text-center overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-blue-600/50 hover:scale-105"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    {t("pricing-cta")}
                    <svg
                      className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-800 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300"></div>
                </Link>

                <div className="mt-8 flex items-center justify-center gap-2 text-sm text-gray-600">
                  <svg
                    className="w-5 h-5 text-green-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="font-medium">{t("pricing-guarantee")}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 text-lg">
              {t("pricing-custom-note")}{" "}
              <Link
                href="#contact"
                className="text-blue-600 hover:text-blue-700 font-bold underline decoration-2 underline-offset-4 transition-colors"
              >
                {t("pricing-custom-link")}
              </Link>
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes pulse {
          0%,
          100% {
            opacity: 0.3;
          }
          50% {
            opacity: 0.5;
          }
        }
        .animate-pulse {
          animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        .delay-1000 {
          animation-delay: 1000ms;
        }
      `}</style>
    </section>
  );
}
