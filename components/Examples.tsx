"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";

export default function Examples() {
  const t = useTranslations("examples");

  const examples = [
    {
      id: 3,
      title: t("examples-renovation-title"),
      description: t("examples-renovation-desc"),
      features: [
        t("examples-renovation-f1"),
        t("examples-renovation-f2"),
        t("examples-renovation-f3"),
      ],
      previewImage: "/assets/images/renovation-desktop.png",
    },
    {
      id: 1,
      title: t("examples-repair-title"),
      description: t("examples-repair-desc"),
      features: [
        t("examples-repair-f1"),
        t("examples-repair-f2"),
        t("examples-repair-f3"),
      ],
      previewImage: "/assets/images/fullservice-desktop.png",
    },
    {
      id: 2,
      title: t("examples-design-title"),
      description: t("examples-design-desc"),
      features: [
        t("examples-design-f1"),
        t("examples-design-f2"),
        t("examples-design-f3"),
      ],
      previewImage: "/assets/images/interior-design-desktop.jpg",
    },
  ];

  return (
    <section id="examples" className="bg-white py-20 md:py-16 scroll-mt-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="max-w-8xl mb-16 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-900">
            {t("examples-title")}
          </h2>
          <p className="text-lg max-w-3xl mx-auto md:text-xl text-gray-600 leading-relaxed">
            {t("examples-subtitle")}
          </p>
        </div>

        {/* Examples grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {examples.map((example) => (
            <div
              key={example.id}
              className="group bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              {/* Image preview */}
              <div className="relative h-64 overflow-hidden bg-gray-100">
                <Image
                  src={example.previewImage}
                  alt={example.title}
                  fill
                  className="object-cover transition-transform"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />

                {/* Optional overlay for better contrast */}
                <div className="absolute inset-0 bg-black/5" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {example.title}
                </h3>

                <p className="text-gray-600 mb-6 leading-relaxed text-sm">
                  {example.description}
                </p>

                {/* Features list */}
                <ul className="space-y-2 mb-6">
                  {example.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2 text-sm text-gray-700"
                    >
                      <svg
                        className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className="block text-center py-3 px-4 bg-gray-50 border border-gray-200 text-gray-900 rounded-lg hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-200 font-semibold text-sm"
                >
                  {t("examples-view-demo")}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-8 text-center">
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              {t("examples-custom-note")}
            </p>
            <a
              href="#contact"
              className="inline-block px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold"
            >
              {t("examples-get-yours")}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
