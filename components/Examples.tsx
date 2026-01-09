"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function Examples() {
  const t = useTranslations("examples");

  const examples = [
    {
      id: 3,
      title: t("examples-renovation-title"),
      description: t("examples-renovation-desc"),
      previewImage: "/assets/images/renovation-desktop.png",
      href: "https://renovapro.webuild.ge",
      accentColor: "from-blue-600/10 to-blue-600/5",
      textColor: "text-blue-600",
    },
    {
      id: 1,
      title: t("examples-repair-title"),
      description: t("examples-repair-desc"),
      previewImage: "/assets/images/fullservice-desktop.png",
      href: "https://spacecraft.webuild.ge",
      accentColor: "from-purple-600/10 to-purple-600/5",
      textColor: "text-purple-600",
    },
    {
      id: 4,
      title: t("examples-design-reno-title"),
      description: t("examples-design-reno-desc"),
      previewImage: "/assets/images/fullservice2.png",
      href: "https://designspace.webuild.ge",
      accentColor: "from-orange-600/10 to-orange-600/5",
      textColor: "text-orange-600",
    },

    {
      id: 2,
      title: t("examples-design-title"),
      description: t("examples-design-desc"),
      previewImage: "/assets/images/interior-design-desktop.jpg",
      href: "https://designstudio.webuild.ge",
      accentColor: "from-emerald-600/10 to-emerald-600/5",
      textColor: "text-emerald-600",
    },
  ];

  return (
    <section
      id="examples"
      className="bg-stone-50 py-16 sm:py-20 lg:py-32 scroll-mt-10"
    >
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-20">
        {/* Section header */}
        <div className="max-w-4xl mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 text-stone-900 tracking-tight leading-tight">
            {t("examples-title")}
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl text-stone-600 leading-relaxed">
            {t("examples-subtitle")}
          </p>
        </div>

        {/* 2x2 Grid - Apple Style */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mb-12 sm:mb-16">
          {examples.map((example) => (
            <Link
              key={example.id}
              href={example.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-white rounded-3xl sm:rounded-[32px] overflow-hidden hover:scale-[1.02] transition-all duration-500 ease-out"
            >
              {/* Card Container */}
              <div className="relative h-[450px] sm:h-[650px] lg:h-[720px] flex flex-col">
                {/* Content Section - Top (Fixed Height) */}
                <div className="relative z-10 p-6 sm:p-8 lg:p-10 bg-white flex-shrink-0">
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-stone-900 mb-2 sm:mb-3 leading-tight tracking-tight">
                    {example.title}
                  </h3>

                  <p className="text-sm sm:text-base text-stone-600 leading-relaxed line-clamp-2">
                    {example.description}
                  </p>
                </div>

                {/* Image Section - Bottom (Flexible Height) */}
                <div className="relative flex-1 bg-stone-50 overflow-hidden">
                  {/* Browser Frame Container */}
                  <div className="absolute inset-0 sm:p-6 lg:p-6 flex items-center justify-center">
                    <div className="w-full md:h-full bg-white rounded-xl sm:rounded-2xl shadow-2xl overflow-hidden border border-stone-200/50 group-hover:shadow-3xl transition-shadow duration-500">
                      {/* Browser Chrome */}
                      <div className="bg-stone-100 px-3 sm:px-4 py-2 sm:py-2.5 flex items-center gap-1.5 sm:gap-2 border-b border-stone-200 flex-shrink-0">
                        <div className="flex gap-1.5">
                          <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-red-500" />
                          <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-yellow-500" />
                          <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-green-500" />
                        </div>
                        <div className="flex-1 mx-2 sm:mx-4 bg-white rounded px-2 sm:px-3 py-0.5 sm:py-1 text-[10px] sm:text-xs text-stone-400 truncate">
                          {example.href}
                        </div>
                      </div>

                      {/* Website Preview */}
                      <div className="relative h-[200px] sm:h-[calc(100%-44px)] bg-stone-50 overflow-hidden">
                        <Image
                          src={example.previewImage}
                          alt={example.title}
                          fill
                          className="object-cover object-top"
                          sizes="(max-width: 1024px) 100vw, 50vw"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Hover Indicator */}
                <div className="absolute top-6 sm:top-8 right-6 sm:right-8 z-20">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-stone-900/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110">
                    <ArrowUpRight
                      className="w-5 h-5 sm:w-6 sm:h-6 text-white"
                      strokeWidth={2}
                    />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl sm:rounded-[32px] p-3 sm:p-10 lg:p-12 text-center border border-stone-200 shadow-sm">
            <h3 className="text-1xl sm:text-3xl lg:text-4xl font-bold text-stone-900 mb-4 sm:mb-6 tracking-tight">
              {t("examples-custom-note")}
            </h3>
            <Link
              href="#contact"
              className="inline-flex items-center gap-3 px-8 sm:px-10 py-4 sm:py-5 bg-stone-900 text-white rounded-2xl hover:bg-stone-800 transition-all duration-300 font-semibold text-base sm:text-lg hover:scale-105 active:scale-95"
            >
              {t("examples-get-yours")}
              <ArrowUpRight className="w-5 h-5" strokeWidth={2} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
