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
    <section id="faq" className="bg-white py-24 md:py-32">
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="container-lg">
        <div className="lg:grid lg:grid-cols-[1fr_1.6fr] lg:gap-24 lg:items-start">
          {/* Left - sticky heading */}
          <div className="mb-12 lg:mb-0 lg:sticky lg:top-24">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="h-px w-6" style={{ background: "#2563eb" }} />
              <span
                className="text-[11.5px] font-bold uppercase tracking-[0.12em]"
                style={{ color: "#2563eb" }}
              >
                FAQ
              </span>
            </div>
            <h2
              className="font-bold tracking-tight leading-[1.1] mb-4"
              style={{
                fontSize: "clamp(1.9rem, 4vw, 3rem)",
                letterSpacing: "-0.02em",
                color: "#0f172a",
              }}
            >
              {t("title")}
            </h2>
            <p
              className="text-[1.0625rem] leading-relaxed mb-7"
              style={{ color: "#64748b" }}
            >
              {t("subtitle")}
            </p>
            <p className="text-[13.5px]" style={{ color: "#64748b" }}>
              {t("more-questions")}{" "}
              <Link
                href="#contact"
                className="font-semibold transition-colors hover:underline"
                style={{ color: "#2563eb" }}
              >
                {t("contact-us")}
              </Link>
            </p>
          </div>

          {/* Right - accordion */}
          <div className="space-y-2">
            {faqs.map((faq, i) => {
              const isOpen = openIndex === i;
              return (
                <div
                  key={i}
                  className="rounded-xl overflow-hidden transition-all duration-200"
                  style={{
                    border: isOpen ? "1px solid #bfdbfe" : "1px solid #e2e8f0",
                    background: isOpen ? "#eff6ff" : "#ffffff",
                  }}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="w-full flex items-start gap-4 px-6 py-5 text-left"
                    aria-expanded={isOpen}
                  >
                    <span
                      className="shrink-0 mt-0.5 text-[11px] font-bold tracking-widest transition-colors duration-150"
                      style={{ color: isOpen ? "#2563eb" : "#cbd5e1" }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span
                      className="flex-1 text-[14.5px] font-semibold leading-snug transition-colors duration-150"
                      style={{ color: isOpen ? "#1e3a8a" : "#0f172a" }}
                    >
                      {faq.q}
                    </span>
                    <svg
                      className="shrink-0 w-4 h-4 mt-0.5 transition-transform duration-200"
                      style={{
                        transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                        color: isOpen ? "#2563eb" : "#94a3b8",
                      }}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth={2.5}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  <div
                    className="grid transition-all duration-300 ease-in-out"
                    style={{
                      gridTemplateRows: isOpen ? "1fr" : "0fr",
                      opacity: isOpen ? 1 : 0,
                    }}
                  >
                    <div className="overflow-hidden">
                      <div
                        className="px-6 pb-5 ml-9 text-[13.5px] leading-relaxed"
                        style={{ color: "#475569" }}
                      >
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
