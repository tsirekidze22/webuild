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
      tag: "Renovation",
    },
    {
      id: 1,
      title: t("examples-repair-title"),
      description: t("examples-repair-desc"),
      previewImage: "/assets/images/fullservice-desktop.png",
      href: "https://spacecraft.webuild.ge",
      tag: "Repair",
    },
    {
      id: 4,
      title: t("examples-design-reno-title"),
      description: t("examples-design-reno-desc"),
      previewImage: "/assets/images/fullservice2.png",
      href: "https://designspace.webuild.ge",
      tag: "Design & Reno",
    },
    {
      id: 2,
      title: t("examples-design-title"),
      description: t("examples-design-desc"),
      previewImage: "/assets/images/interior-design-desktop.jpg",
      href: "https://designstudio.webuild.ge",
      tag: "Interior",
    },
  ];

  return (
    <section
      id="examples"
      className="bg-slate-50 py-20 md:py-28 scroll-mt-16"
    >
      <div className="max-w-[1400px] mx-auto px-5 lg:px-10">

        {/* Section header */}
        <div className="max-w-2xl mb-14 md:mb-18">
          <div className="section-label mb-5">{t("examples-title")}</div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight leading-[1.1] mb-4">
            {t("examples-title")}
          </h2>
          <p className="text-lg text-slate-500 leading-relaxed">
            {t("examples-subtitle")}
          </p>
        </div>

        {/* 2 × 2 grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-10">
          {examples.map((ex) => (
            <Link
              key={ex.id}
              href={ex.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-white rounded-2xl border border-slate-200 overflow-hidden hover:border-slate-300 hover:shadow-xl transition-all duration-300"
            >
              {/* Card body */}
              <div className="relative flex flex-col h-[480px] sm:h-[600px] lg:h-[640px]">

                {/* Top text area */}
                <div className="px-7 pt-7 pb-5 flex-shrink-0">
                  <span className="inline-block text-[11px] font-semibold uppercase tracking-widest text-blue-600 mb-3">
                    {ex.tag}
                  </span>
                  <h3 className="text-xl md:text-2xl font-bold text-slate-900 leading-snug mb-2">
                    {ex.title}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed line-clamp-2">
                    {ex.description}
                  </p>
                </div>

                {/* Browser preview */}
                <div className="flex-1 mx-5 mb-5 rounded-xl overflow-hidden border border-slate-200 shadow-md bg-slate-50">
                  {/* Browser chrome */}
                  <div className="flex items-center gap-1.5 px-3 py-2 bg-slate-100 border-b border-slate-200">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                    <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
                    <span className="flex-1 mx-3 bg-white rounded px-2.5 py-0.5 text-[10px] text-slate-400 truncate border border-slate-200">
                      {ex.href}
                    </span>
                  </div>
                  {/* Screenshot */}
                  <div className="relative h-[calc(100%-34px)]">
                    <Image
                      src={ex.previewImage}
                      alt={ex.title}
                      fill
                      className="object-cover object-top"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                </div>

                {/* Arrow badge */}
                <div className="absolute top-6 right-6 z-10 w-9 h-9 rounded-full bg-slate-900 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <ArrowUpRight className="w-4 h-4 text-white" strokeWidth={2.5} />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA strip */}
        <div className="bg-white rounded-2xl border border-slate-200 px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-lg font-semibold text-slate-900 text-center sm:text-left">
            {t("examples-custom-note")}
          </p>
          <Link
            href="#contact"
            className="btn-primary shrink-0 gap-2"
          >
            {t("examples-get-yours")}
            <ArrowUpRight className="w-4 h-4" strokeWidth={2.5} />
          </Link>
        </div>

      </div>
    </section>
  );
}
