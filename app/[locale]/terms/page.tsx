import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

import { Metadata } from "next";
import { buildAlternates } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  return {
    title: "Terms & Conditions | Webuild",
    description:
      "Terms and conditions governing the use of the Webuild website and services.",
    robots: {
      index: false,
      follow: true,
    },
    alternates: buildAlternates(locale, "terms"),
  };
}

export default function Terms() {
  const t = useTranslations("terms");
  const LAST_UPDATED = "January 3, 2026";

  return (
    <main className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-purple-50 py-24">
      <div className="max-w-4xl mx-auto px-3 lg:px-8">
        {/* Back Button */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold mb-8 transition-colors"
        >
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
              d="M15 19l-7-7 7-7"
            />
          </svg>
          {t("back-home")}
        </Link>

        {/* Content Card */}
        <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12 border border-gray-100">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            {t("title")}
          </h1>

          <div className="text-sm text-gray-500 mb-8">
            {t("last-updated")}: {LAST_UPDATED}
          </div>

          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {t("section1-title")}
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                {t("section1-content")}
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {t("section2-title")}
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                {t("section2-content")}
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {t("section3-title")}
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                {t("section3-content")}
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {t("section4-title")}
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                {t("section4-content")}
              </p>
            </section>
          </div>

          {/* Contact Section */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-gray-700">
              {t("questions")}{" "}
              <Link
                href="#contact"
                className="text-blue-600 hover:text-blue-700 font-semibold underline"
              >
                {t("contact-us")}
              </Link>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
