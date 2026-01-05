"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import Link from "next/link";

export default function WhyThisWorks() {
  const t = useTranslations("whyThisWorks");
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const benefits = [
    {
      id: 1,
      title: t("benefits-f1-title"),
      description: t("benefits-f1-desc"),
      icon: (
        <svg
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          className="w-7 h-7"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
      gradient: "from-yellow-400 to-orange-500",
    },
    {
      id: 2,
      title: t("benefits-f2-title"),
      description: t("benefits-f2-desc"),
      icon: (
        <svg
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          className="w-7 h-7"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      gradient: "from-green-400 to-emerald-500",
    },
    {
      id: 3,
      title: t("benefits-f3-title"),
      description: t("benefits-f3-desc"),
      icon: (
        <svg
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          className="w-7 h-7"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
      ),
      gradient: "from-blue-400 to-indigo-500",
    },
    {
      id: 4,
      title: t("benefits-f4-title"),
      description: t("benefits-f4-desc"),
      icon: (
        <svg
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          className="w-7 h-7"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      ),
      gradient: "from-purple-400 to-pink-500",
    },
    {
      id: 5,
      title: t("benefits-f5-title"),
      description: t("benefits-f5-desc"),
      icon: (
        <svg
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          className="w-7 h-7"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
          />
        </svg>
      ),
      gradient: "from-cyan-400 to-blue-500",
    },
    {
      id: 6,
      title: t("benefits-f6-title"),
      description: t("benefits-f6-desc"),
      icon: (
        <svg
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          className="w-7 h-7"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      gradient: "from-rose-400 to-red-500",
    },
  ];

  return (
    <section className="relative py-16 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-blue-100 to-purple-100 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-pink-100 to-blue-100 rounded-full blur-3xl opacity-20"></div>

      <div className="relative max-w-7xl mx-auto px-3 lg:px-8">
        <div className="md:text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              {t("benefits-title")}
            </span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t("benefits-subtitle")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.id}
              onMouseEnter={() => setHoveredId(benefit.id)}
              onMouseLeave={() => setHoveredId(null)}
              className={`group relative transition-all duration-500 ${
                hoveredId === benefit.id ? "scale-105 z-10" : ""
              }`}
            >
              <div className="relative h-full bg-white rounded-2xl p-8 border border-gray-200 transition-all duration-500 hover:shadow-2xl hover:border-transparent">
                <div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${benefit.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl`}
                ></div>

                <div
                  className={`relative w-16 h-16 rounded-2xl bg-gradient-to-br ${
                    benefit.gradient
                  } flex items-center justify-center mb-6 transform transition-all duration-500 ${
                    hoveredId === benefit.id ? "scale-110 rotate-3" : ""
                  }`}
                >
                  <div className="text-white">{benefit.icon}</div>
                  <div
                    className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${benefit.gradient} animate-ping opacity-0 group-hover:opacity-20`}
                  ></div>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:bg-gradient-to-r group-hover:from-gray-900 group-hover:to-gray-700 group-hover:bg-clip-text group-hover:text-transparent transition-all">
                  {benefit.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <div className="inline-block relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-2xl blur-lg opacity-25 group-hover:opacity-50 transition-opacity"></div>
            <Link
              href="#contact"
              className="relative px-10 py-5 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-2xl font-bold text-lg inline-flex items-center gap-3 hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              {t("benefits-cta")}
              <svg
                className="w-5 h-5"
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
      </div>

      <style jsx>{`
        @keyframes ping {
          75%,
          100% {
            transform: scale(1.5);
            opacity: 0;
          }
        }
        .animate-ping {
          animation: ping 2s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
      `}</style>
    </section>
  );
}
