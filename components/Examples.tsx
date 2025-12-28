"use client";

import { useTranslations } from "next-intl";

export default function Examples() {
  const t = useTranslations("examples");

  const examples = [
    {
      id: 1,
      title: t("examples-repair-title"),
      description: t("examples-repair-desc"),
      features: [
        t("examples-repair-f1"),
        t("examples-repair-f2"),
        t("examples-repair-f3"),
      ],
      previewImage: "/demos/repair-preview.jpg",
    },
    {
      id: 2,
      title: t("examples-plumbing-title"),
      description: t("examples-plumbing-desc"),
      features: [
        t("examples-plumbing-f1"),
        t("examples-plumbing-f2"),
        t("examples-plumbing-f3"),
      ],
      previewImage: "/demos/plumbing-preview.jpg",
    },
    {
      id: 3,
      title: t("examples-cleaning-title"),
      description: t("examples-cleaning-desc"),
      features: [
        t("examples-cleaning-f1"),
        t("examples-cleaning-f2"),
        t("examples-cleaning-f3"),
      ],
      previewImage: "/demos/cleaning-preview.jpg",
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
              className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              {/* Demo preview with realistic mockup */}
              <div className="relative bg-gray-50 h-64 overflow-hidden">
                <div className="absolute top-3 left-3 right-3 bg-white rounded-t-lg shadow-sm">
                  <div className="flex items-center gap-1.5 px-3 py-2 border-b border-gray-200">
                    <div className="w-2 h-2 rounded-full bg-red-400"></div>
                    <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                    <div className="w-2 h-2 rounded-full bg-green-400"></div>
                    <div className="flex-1 ml-2 h-5 bg-gray-100 rounded text-xs flex items-center px-2 text-gray-400">
                      webuild.ge/demo
                    </div>
                  </div>

                  <div className="p-4 space-y-2">
                    <div className="h-3 bg-gray-900 rounded w-3/4"></div>
                    <div className="h-2 bg-gray-300 rounded w-full"></div>
                    <div className="h-2 bg-gray-300 rounded w-5/6"></div>
                    <div className="flex gap-2 mt-3">
                      <div className="h-6 bg-blue-600 rounded w-24"></div>
                      <div className="h-6 bg-gray-200 rounded w-20"></div>
                    </div>
                    <div className="grid grid-cols-3 gap-2 mt-4">
                      <div className="h-16 bg-gray-200 rounded"></div>
                      <div className="h-16 bg-gray-200 rounded"></div>
                      <div className="h-16 bg-gray-200 rounded"></div>
                    </div>
                  </div>
                </div>
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
