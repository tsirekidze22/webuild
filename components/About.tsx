"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";

export default function About() {
  const t = useTranslations("about");

  return (
    <section
      id="about"
      className="relative py-16 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden scroll-mt-10"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-20 right-20 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-3xl"></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
            backgroundSize: "100px 100px",
          }}
        ></div>
      </div>

      <div className="relative max-w-5xl mx-auto px-3 lg:px-8">
        {/* Badge */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full">
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
            <span className="text-sm font-semibold text-blue-300">
              {t("about-badge")}
            </span>
          </div>
        </div>
        {/* Main content */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white leading-tight">
            {t("about-title-1")}
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              {t("about-title-2")}
            </span>
          </h2>

          <div className="max-w-3xl mx-auto space-y-6 text-lg lg:text-xl text-gray-300 leading-relaxed">
            <p>
              {t("about-p1-text")}
              <span className="text-white font-semibold">
                {t("about-p1-location")}
              </span>
              {t("about-p1-rest")}
            </p>

            <p>
              {t("about-p2-text")}
              <span className="text-blue-400 font-semibold">
                {t("about-p2-highlight")}
              </span>
              {t("about-p2-rest")}
            </p>

            <p>
              {t("about-p3-text")}
              <span className="text-white font-semibold">
                {t("about-p3-highlight")}
              </span>
              .
            </p>
          </div>
        </div>
        {/* Stats/highlights */}
        <div className="grid md:grid-cols-3 gap-8 mt-20">
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all"></div>
            <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 text-center group-hover:border-white/20 transition-all">
              <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-3">
                {t("about-stat-1-value")}
              </div>
              <div className="text-gray-400 font-medium">
                {t("about-stat-1-label")}
              </div>
            </div>
          </div>

          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all"></div>
            <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 text-center group-hover:border-white/20 transition-all">
              <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-3">
                {t("about-stat-2-value")}
              </div>
              <div className="text-gray-400 font-medium">
                {t("about-stat-2-label")}
              </div>
            </div>
          </div>

          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-br from-pink-600/20 to-blue-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all"></div>
            <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 text-center group-hover:border-white/20 transition-all">
              <div className="text-4xl font-bold bg-gradient-to-r from-pink-400 to-blue-400 bg-clip-text text-transparent mb-3">
                {t("about-stat-3-value")}
              </div>
              <div className="text-gray-400 font-medium">
                {t("about-stat-3-label")}
              </div>
            </div>
          </div>
        </div>
        {/* CTA */}
        <div className="mt-16 text-center">
          <Link
            href="#contact"
            className="group inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl font-bold text-lg hover:shadow-2xl hover:shadow-blue-600/50 transition-all duration-300 hover:scale-105"
          >
            {t("about-cta")}
            <svg
              className="w-5 h-5 group-hover:translate-x-1 transition-transform"
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
          </Link>
        </div>
      </div>

      <style jsx>{`
        @keyframes pulse {
          0%,
          100% {
            opacity: 0.3;
          }
          50% {
            opacity: 0.6;
          }
        }
        .animate-pulse {
          animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </section>
  );
}
