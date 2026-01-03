"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import Link from "next/link";

export default function FAQ() {
  const t = useTranslations("faq");
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    { question: t("q1-question"), answer: t("q1-answer") },
    { question: t("q2-question"), answer: t("q2-answer") },
    { question: t("q3-question"), answer: t("q3-answer") },
    { question: t("q4-question"), answer: t("q4-answer") },
    { question: t("q5-question"), answer: t("q5-answer") },
  ];

  return (
    <section
      id="faq"
      className="bg-white py-20 md:py-32 border-t border-gray-100"
    >
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            {t("title")}
          </h2>
          <p className="text-lg text-gray-600">{t("subtitle")}</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-2xl transition-all duration-300"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full cursor-pointer  flex items-center justify-between p-6 text-left hover:bg-gray-50 rounded-2xl transition-colors"
              >
                <span className="text-lg font-bold text-gray-900 pr-4">
                  {faq.question}
                </span>
                <span
                  className={`flex-shrink-0 ml-2 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                >
                  <svg
                    className="w-5 h-5 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </span>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-6 pb-6 text-gray-600 leading-relaxed text-base">
                  {faq.answer}
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
              className="text-blue-600 hover:text-blue-700 underline underline-offset-4 decoration-2"
            >
              {t("contact-us")}
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
