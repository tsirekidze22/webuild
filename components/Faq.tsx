"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import Script from "next/script";
import { ChevronDown } from "lucide-react";

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
              className="border border-gray-200 rounded-2xl overflow-hidden transition-all hover:border-gray-300 hover:shadow-sm"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
                aria-expanded={openIndex === index}
              >
                <span className="text-lg font-bold text-gray-900 pr-4">
                  {faq.q}
                </span>
                <ChevronDown
                  className={`flex-shrink-0 w-5 h-5 text-gray-500 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`grid transition-all duration-300 ease-in-out ${
                  openIndex === index
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                    {faq.a}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 p-8 bg-blue-50 rounded-3xl text-center">
          <p className="text-gray-700 font-medium">
            {t("more-questions")}{" "}
            <Link
              href="#contact"
              className="text-blue-600 underline underline-offset-4 hover:text-blue-700 transition-colors"
            >
              {t("contact-us")}
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
