"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

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
      href: "https://renovapro.webuild.ge",
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
      href: "https://spacecraft.webuild.ge",
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
      href: "https://designstudio.webuild.ge",
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
            <Link
              key={example.id}
              href={example.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer"
            >
              {/* Image preview */}
              <div className="relative h-64 overflow-hidden bg-gray-100">
                <Image
                  src={example.previewImage}
                  alt={example.title}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />

                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300" />

                {/* "Visit Site" badge on hover */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-semibold text-gray-900">
                      {t("examples-visit-site")}
                    </span>
                    <svg
                      className="w-4 h-4 text-gray-900"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
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

                {/* CTA Button */}
                <div className="flex items-center justify-between py-3 px-4 bg-gray-50 border border-gray-200 text-gray-900 rounded-lg group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all duration-200 font-semibold text-sm">
                  <span>{t("examples-view-demo")}</span>
                  <svg
                    className="w-5 h-5 transform group-hover:translate-x-1 transition-transform"
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
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-8 text-center">
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              {t("examples-custom-note")}
            </p>
            <Link
              href="#contact"
              className="inline-block px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold"
            >
              {t("examples-get-yours")}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
