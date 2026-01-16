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
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  return (
    <section
      id="faq"
      className="bg-white py-20 md:py-32 border-t border-gray-100"
    >
      {/* FAQ Schema */}
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="max-w-3xl mx-auto px-3 lg:px-8">
        <div className="md:text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            {t("title")}
          </h2>
          <p className="text-lg text-gray-600">{t("subtitle")}</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-2xl transition-all"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 rounded-2xl"
              >
                <span className="text-lg font-bold text-gray-900 pr-4">
                  {faq.q}
                </span>
                <span
                  className={`transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                >
                  ⌄
                </span>
              </button>

              {openIndex === index && (
                <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 p-8 bg-blue-50 rounded-3xl text-center">
          <p className="text-gray-700 font-medium">
            {t("more-questions")}{" "}
            <Link
              href="#contact"
              className="text-blue-600 underline underline-offset-4"
            >
              {t("contact-us")}
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
