import { useTranslations } from "next-intl";
import Link from "next/link";

const icons = [
  // 1 — lightning
  <svg key={1} fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-5 h-5" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <path d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>,
  // 2 — check circle
  <svg key={2} fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-5 h-5" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>,
  // 3 — document
  <svg key={3} fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-5 h-5" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
  </svg>,
  // 4 — location
  <svg key={4} fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-5 h-5" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>,
  // 5 — user
  <svg key={5} fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-5 h-5" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
  </svg>,
  // 6 — currency
  <svg key={6} fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-5 h-5" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>,
];

export default function WhyThisWorks() {
  const t = useTranslations("whyThisWorks");

  const benefits = [
    { title: t("benefits-f1-title"), description: t("benefits-f1-desc") },
    { title: t("benefits-f2-title"), description: t("benefits-f2-desc") },
    { title: t("benefits-f3-title"), description: t("benefits-f3-desc") },
    { title: t("benefits-f4-title"), description: t("benefits-f4-desc") },
    { title: t("benefits-f5-title"), description: t("benefits-f5-desc") },
    { title: t("benefits-f6-title"), description: t("benefits-f6-desc") },
  ];

  return (
    <section className="bg-slate-50 py-20 md:py-28">
      <div className="container-lg">

        {/* Two-col layout: sticky heading left, list right */}
        <div className="lg:grid lg:grid-cols-[1fr_1.4fr] lg:gap-20 lg:items-start">

          {/* Left — sticky header */}
          <div className="mb-12 lg:mb-0 lg:sticky lg:top-24">
            <div className="section-label mb-5">{t("benefits-title")}</div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight leading-[1.1] mb-5">
              {t("benefits-title")}
            </h2>
            <p className="text-lg text-slate-500 leading-relaxed mb-8">
              {t("benefits-subtitle")}
            </p>
            <Link href="#contact" className="btn-primary inline-flex">
              {t("benefits-cta")}
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          {/* Right — numbered list */}
          <div className="divide-y divide-slate-200">
            {benefits.map((b, i) => (
              <div
                key={i}
                className="group flex items-start gap-5 py-7 first:pt-0 last:pb-0 hover:bg-white rounded-xl px-5 -mx-5 transition-colors duration-150"
              >
                {/* Number */}
                <span className="shrink-0 mt-0.5 w-8 h-8 rounded-lg bg-slate-100 group-hover:bg-blue-600 flex items-center justify-center text-[11px] font-bold text-slate-400 group-hover:text-white transition-colors duration-150">
                  {String(i + 1).padStart(2, "0")}
                </span>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2.5 mb-1.5">
                    <span className="text-slate-400 group-hover:text-blue-600 transition-colors duration-150">
                      {icons[i]}
                    </span>
                    <h3 className="text-[15px] font-bold text-slate-900 leading-snug">
                      {b.title}
                    </h3>
                  </div>
                  <p className="text-[14px] text-slate-500 leading-relaxed">
                    {b.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
