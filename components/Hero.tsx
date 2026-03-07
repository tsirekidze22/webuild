"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import Image from "next/image";

type StatProps = {
  value: string;
  label: string;
};

export default function Hero() {
  const t = useTranslations("hero");
  const [previewHovered, setPreviewHovered] = useState(false);

  return (
    <section className="relative bg-white overflow-hidden pt-24 md:pt-28 pb-6">
      {/* SEO preload */}
      <Image
        src="/assets/images/og-image.jpg"
        alt="Webuild.ge - Web Development for Businesses"
        width={1200}
        height={630}
        className="hidden"
        priority
      />

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, #f8fafc 0%, #ffffff 55%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.032]"
        style={{
          backgroundImage:
            "linear-gradient(#0f172a 1px, transparent 1px), linear-gradient(90deg, #0f172a 1px, transparent 1px)",
          backgroundSize: "44px 44px",
        }}
      />

      <div className="container-lg relative">
        {/* ── Two-column split ── */}
        <div className="grid md:grid-cols-2 lg:grid-cols-[1fr_1.05fr] gap-10 lg:gap-16 items-center pb-4 md:pb-6">
          {/* ── Left: copy ── */}
          <div>
            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] xl:text-[4rem] font-bold leading-[1.08] tracking-tight text-slate-900 mb-5">
              {t("hero-title")}
              <br />
              <span className="relative inline-block text-blue-600">
                {t("hero-subtitle")}
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-x-0 bottom-[3px] h-[7px] rounded-full bg-blue-100 -z-10"
                />
              </span>
            </h1>

            {/* Description */}
            <p className="text-lg text-slate-500 leading-relaxed mb-8 max-w-lg">
              {t("hero-description")}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 mb-6">
              <Link
                href="#examples"
                className="btn-primary text-[15px] px-7 py-3.5"
              >
                {t("hero-cta-primary")}
              </Link>
              <Link
                href="#contact"
                className="btn-secondary text-[15px] px-7 py-3.5"
              >
                {t("hero-cta-secondary")}
              </Link>
            </div>
          </div>

          {/* ── Right: clickable live browser mockup ── */}
          <div className="relative hidden md:block">
            {/* Glow */}
            <div
              aria-hidden
              className="absolute -inset-6 rounded-3xl opacity-30 pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse at 60% 40%, #dbeafe 0%, transparent 65%)",
              }}
            />

            {/* The whole card is a link to the live site */}
            <a
              href="https://renovapro.webuild.ge"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block rounded-2xl border border-slate-200 shadow-2xl shadow-slate-200/60 overflow-hidden bg-white cursor-pointer"
              onMouseEnter={() => setPreviewHovered(true)}
              onMouseLeave={() => setPreviewHovered(false)}
              aria-label="Visit live renovation website"
            >
              {/* Browser chrome */}
              <div className="flex items-center gap-1.5 px-4 py-3 bg-slate-100 border-b border-slate-200">
                <span className="w-3 h-3 rounded-full bg-red-400" />
                <span className="w-3 h-3 rounded-full bg-amber-400" />
                <span className="w-3 h-3 rounded-full bg-green-400" />
                <div className="flex-1 mx-4 bg-white border border-slate-200 rounded-md px-3 py-1 text-[11px] text-slate-400 flex items-center gap-1.5">
                  <svg
                    className="w-3 h-3 text-slate-300 shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                  renovapro.webuild.ge
                </div>
              </div>

              {/* Screenshot - pans topbottom via inline style (guaranteed to work) */}
              <div className="relative h-[340px] lg:h-[400px] overflow-hidden bg-slate-50">
                <Image
                  src="/assets/images/renovation-desktop.png"
                  alt="Renovation website built by webuild.ge"
                  fill
                  className="object-cover"
                  style={{
                    objectPosition: previewHovered ? "50% 100%" : "50% 0%",
                    transition: "object-position 4500ms ease-in-out",
                  }}
                  sizes="(max-width: 768px) 0px, 50vw"
                  priority
                />

                {/* Visit overlay - appears on hover */}
                <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/20 transition-colors duration-300 flex items-end justify-center pb-5">
                  <div className="translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center gap-1.5 px-4 py-2 bg-white rounded-full shadow-lg text-[12px] font-semibold text-slate-800">
                    <svg
                      className="w-3.5 h-3.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth={2.5}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
                      <polyline points="15 3 21 3 21 9" />
                      <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                    Visit live site
                  </div>
                </div>
              </div>
            </a>

            {/* "Live" badge */}
            <div className="absolute -top-3 -right-3 z-10 flex items-center gap-1.5 px-3 py-1.5 bg-white border border-slate-200 rounded-full shadow-sm pointer-events-none">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
              <span className="text-[11px] font-semibold text-slate-700">
                Live site
              </span>
            </div>
          </div>
        </div>

        {/* ── Stats bar ── */}
        <div className="grid grid-cols-3 gap-px bg-slate-200 rounded-xl overflow-hidden border border-slate-200 mb-14 md:mb-20">
          <Stat
            value={t("hero-stat-price")}
            label={t("hero-stat-price-label")}
          />
          <Stat value={t("hero-stat-time")} label={t("hero-stat-time-label")} />
          <Stat
            value={t("hero-stat-contact")}
            label={t("hero-stat-contact-label")}
          />
        </div>
      </div>
    </section>
  );
}

function Stat({ value, label }: StatProps) {
  return (
    <div className="bg-white px-4 py-5 text-center">
      <div className="text-2xl md:text-3xl font-bold text-slate-900 mb-0.5 tracking-tight">
        {value}
      </div>
      <div className="text-xs md:text-sm text-slate-500 font-medium">
        {label}
      </div>
    </div>
  );
}
