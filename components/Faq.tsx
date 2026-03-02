"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import Script from "next/script";

export default function FAQ() {
  const t = useTranslations("faq");
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    { q: t("q1-question"), a: t("q1-answer") },
    { q: t("q2-question"), a: t("q2-answer") },
    { q: t("q3-question"), a: t("q3-answer") },
    { q: t("q4-question"), a: t("q4-answer") },
    { q: t("q5-question"), a: t("q5-answer") },
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  return (
    <section id="faq" className="bg-white py-20 md:py-28 border-t border-slate-100">
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="container-lg">
        <div className="lg:grid lg:grid-cols-[1fr_1.5fr] lg:gap-20 lg:items-start">

          {/* Left — sticky heading */}
          <div className="mb-12 lg:mb-0 lg:sticky lg:top-24">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight leading-[1.1] mb-4">
              {t("title")}
            </h2>
            <p className="text-lg text-slate-500 leading-relaxed mb-8">
              {t("subtitle")}
            </p>
            <p className="text-[14px] text-slate-500">
              {t("more-questions")}{" "}
              <Link href="#contact" className="text-blue-600 hover:text-blue-700 font-semibold transition-colors">
                {t("contact-us")}
              </Link>
            </p>
          </div>

          {/* Right — accordion */}
          <div className="space-y-2">
            {faqs.map((faq, i) => {
              const isOpen = openIndex === i;
              return (
                <div
                  key={i}
                  className={`rounded-xl border transition-colors duration-150 overflow-hidden ${
                    isOpen
                      ? "border-blue-200 bg-blue-50"
                      : "border-slate-200 bg-white hover:border-slate-300"
                  }`}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="w-full flex items-start gap-4 px-6 py-5 text-left"
                    aria-expanded={isOpen}
                  >
                    {/* Question number */}
                    <span
                      className={`shrink-0 mt-0.5 text-[11px] font-bold tracking-widest transition-colors duration-150 ${
                        isOpen ? "text-blue-600" : "text-slate-300"
                      }`}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>

                    <span
                      className={`flex-1 text-[15px] font-bold leading-snug transition-colors duration-150 ${
                        isOpen ? "text-blue-900" : "text-slate-900"
                      }`}
                    >
                      {faq.q}
                    </span>

                    {/* Chevron */}
                    <svg
                      className={`shrink-0 w-4 h-4 mt-0.5 transition-all duration-200 ${
                        isOpen ? "rotate-180 text-blue-600" : "text-slate-400"
                      }`}
                      fill="none" stroke="currentColor" viewBox="0 0 24 24"
                      strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round"
                    >
                      <path d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  {/* Answer */}
                  <div
                    className={`grid transition-all duration-300 ease-in-out ${
                      isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="px-6 pb-5 ml-9 text-[14px] text-slate-600 leading-relaxed">
                        {faq.a}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
