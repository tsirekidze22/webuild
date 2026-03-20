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
    <section id="examples" className="bg-white py-24 md:py-32 scroll-mt-16">
      <div className="container-lg">

        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14 md:mb-16">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="h-px w-6" style={{ background: "#2563eb" }} />
              <span
                className="text-[11.5px] font-bold uppercase tracking-[0.12em]"
                style={{ color: "#2563eb" }}
              >
                Portfolio
              </span>
            </div>
            <h2
              className="font-bold tracking-tight leading-[1.1] mb-3"
              style={{
                fontSize: "clamp(1.9rem, 4vw, 3rem)",
                letterSpacing: "-0.02em",
                color: "#0f172a",
              }}
            >
              {t("examples-title")}
            </h2>
            <p className="text-[1.0625rem] leading-relaxed" style={{ color: "#64748b" }}>
              {t("examples-subtitle")}
            </p>
          </div>
          <Link
            href="#contact"
            className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 text-[14px] font-semibold rounded-lg shrink-0 transition-all duration-200 hover:-translate-y-px"
            style={{
              background: "linear-gradient(135deg, #3b82f6, #2563eb, #1d4ed8)",
              color: "#ffffff",
              boxShadow: "0 1px 0 rgba(255,255,255,0.1) inset, 0 4px 14px rgba(37,99,235,0.3)",
            }}
          >
            {t("examples-get-yours")}
            <ArrowUpRight className="w-3.5 h-3.5" strokeWidth={2.5} />
          </Link>
        </div>

        {/* 2×2 grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-6">
          {examples.map((ex) => (
            <Link
              key={ex.id}
              href={ex.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex flex-col rounded-2xl overflow-hidden transition-all duration-300"
              style={{
                background: "#ffffff",
                border: "1px solid #e2e8f0",
                boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = "0 20px 40px rgba(0,0,0,0.10), 0 1px 3px rgba(0,0,0,0.04)";
                (e.currentTarget as HTMLElement).style.borderColor = "#cbd5e1";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = "0 1px 3px rgba(0,0,0,0.04)";
                (e.currentTarget as HTMLElement).style.borderColor = "#e2e8f0";
              }}
            >
              {/* Card header */}
              <div className="px-6 pt-6 pb-4 flex items-start justify-between gap-4">
                <div>
                  <span
                    className="inline-block text-[10.5px] font-bold uppercase tracking-[0.1em] px-2.5 py-1 rounded-md mb-3"
                    style={{
                      background: "#eff6ff",
                      color: "#2563eb",
                      border: "1px solid #dbeafe",
                    }}
                  >
                    {ex.tag}
                  </span>
                  <h3
                    className="text-[1.05rem] font-bold leading-snug mb-1.5"
                    style={{ color: "#0f172a" }}
                  >
                    {ex.title}
                  </h3>
                  <p
                    className="text-[13.5px] leading-relaxed line-clamp-2"
                    style={{ color: "#64748b" }}
                  >
                    {ex.description}
                  </p>
                </div>
                {/* Arrow icon */}
                <div
                  className="shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 group-hover:scale-110"
                  style={{
                    background: "#f1f5f9",
                    color: "#94a3b8",
                  }}
                >
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:text-blue-600 transition-colors" strokeWidth={2.5} />
                </div>
              </div>

              {/* Browser preview */}
              <div
                className="flex-1 mx-5 mb-5 rounded-xl overflow-hidden"
                style={{
                  border: "1px solid #e2e8f0",
                  minHeight: "340px",
                  maxHeight: "460px",
                }}
              >
                {/* Chrome */}
                <div
                  className="flex items-center gap-1.5 px-3 py-2.5"
                  style={{ background: "#f8fafc", borderBottom: "1px solid #e2e8f0" }}
                >
                  <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#fca5a5" }} />
                  <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#fcd34d" }} />
                  <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#86efac" }} />
                  <span
                    className="flex-1 mx-3 rounded px-2.5 py-1 text-[10px] truncate"
                    style={{
                      background: "#ffffff",
                      border: "1px solid #e2e8f0",
                      color: "#94a3b8",
                    }}
                  >
                    {ex.href.replace("https://", "")}
                  </span>
                </div>
                {/* Screenshot */}
                <div className="relative h-[320px] sm:h-[380px] lg:h-[400px] overflow-hidden">
                  <Image
                    src={ex.previewImage}
                    alt={ex.title}
                    fill
                    className="object-cover object-top group-hover:object-bottom transition-[object-position] duration-[4000ms] ease-in-out"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/10 transition-colors duration-300" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA strip */}
        <div
          className="rounded-2xl px-8 py-8 md:py-10 flex flex-col sm:flex-row items-center justify-between gap-6"
          style={{
            background: "#0f172a",
            border: "1px solid #1e293b",
          }}
        >
          <div>
            <p
              className="text-[1rem] font-semibold leading-snug mb-1"
              style={{ color: "#f1f5f9" }}
            >
              {t("examples-custom-note")}
            </p>
            <p className="text-[13.5px]" style={{ color: "#475569" }}>
              {t("examples-view-demo")} →
            </p>
          </div>
          <Link
            href="#contact"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 text-[14.5px] font-semibold rounded-lg text-white shrink-0 transition-all duration-200 hover:-translate-y-px hover:shadow-lg"
            style={{
              background: "linear-gradient(135deg, #3b82f6, #2563eb, #1d4ed8)",
              boxShadow: "0 1px 0 rgba(255,255,255,0.1) inset, 0 4px 14px rgba(37,99,235,0.35)",
            }}
          >
            {t("examples-get-yours")}
            <ArrowUpRight className="w-4 h-4" strokeWidth={2.5} />
          </Link>
        </div>
      </div>
    </section>
  );
}
