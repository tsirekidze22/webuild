import { useTranslations } from "next-intl";
import Link from "next/link";

const icons = [
  <svg key={1} fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-5 h-5" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
  </svg>,
  <svg key={2} fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-5 h-5" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
  </svg>,
  <svg key={3} fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-5 h-5" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
  </svg>,
  <svg key={4} fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-5 h-5" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>,
  <svg key={5} fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-5 h-5" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>,
  <svg key={6} fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-5 h-5" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
  </svg>,
];

export default function WhatsIncluded() {
  const t = useTranslations("whatsIncluded");

  const features = [
    { title: t("features-f1-title"), description: t("features-f1-desc") },
    { title: t("features-f2-title"), description: t("features-f2-desc") },
    { title: t("features-f3-title"), description: t("features-f3-desc") },
    { title: t("features-f4-title"), description: t("features-f4-desc") },
    { title: t("features-f5-title"), description: t("features-f5-desc") },
    { title: t("features-f6-title"), description: t("features-f6-desc") },
  ];

  return (
    <section className="py-24 md:py-32" style={{ background: "#f8fafc" }}>
      <div className="container-lg">

        {/* Header */}
        <div className="max-w-2xl mb-14 md:mb-16">
          <div className="flex items-center gap-2.5 mb-5">
            <div className="h-px w-6" style={{ background: "#2563eb" }} />
            <span className="text-[11.5px] font-bold uppercase tracking-[0.12em]" style={{ color: "#2563eb" }}>
              What&apos;s Included
            </span>
          </div>
          <h2
            className="font-bold tracking-tight leading-[1.1] mb-3"
            style={{ fontSize: "clamp(1.9rem, 4vw, 3rem)", letterSpacing: "-0.02em", color: "#0f172a" }}
          >
            {t("features-title")}
          </h2>
          <p className="text-[1.0625rem] leading-relaxed" style={{ color: "#64748b" }}>
            {t("features-subtitle")}
          </p>
        </div>

        {/* Feature grid */}
        <div
          className="grid md:grid-cols-2 lg:grid-cols-3 mb-5 rounded-2xl overflow-hidden"
          style={{ border: "1px solid #e2e8f0" }}
        >
          {features.map((f, i) => (
            <div
              key={i}
              className="group relative p-7 transition-colors duration-200"
              style={{
                background: "#ffffff",
                borderRight: i % 3 !== 2 ? "1px solid #e2e8f0" : "none",
                borderBottom: i < 3 ? "1px solid #e2e8f0" : "none",
              }}
            >
              {/* Hover tint */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none" style={{ background: "rgba(239,246,255,0.6)" }} />

              <div className="relative">
                {/* Number + icon */}
                <div className="flex items-center justify-between mb-5">
                  <span
                    className="text-[11px] font-bold tracking-[0.15em] uppercase"
                    style={{ color: "#cbd5e1" }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center transition-colors duration-200 group-hover:bg-blue-600"
                    style={{ background: "#f1f5f9", color: "#94a3b8" }}
                  >
                    <span className="group-hover:text-white transition-colors duration-200">
                      {icons[i]}
                    </span>
                  </div>
                </div>

                <h3
                  className="text-[14.5px] font-bold mb-2 leading-snug"
                  style={{ color: "#0f172a" }}
                >
                  {f.title}
                </h3>
                <p className="text-[13.5px] leading-relaxed" style={{ color: "#64748b" }}>
                  {f.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Callout */}
        <div
          className="rounded-2xl p-7 md:p-8 flex flex-col md:flex-row items-start gap-5"
          style={{
            background: "#0f172a",
            border: "1px solid #1e293b",
          }}
        >
          <div
            className="shrink-0 w-10 h-10 rounded-xl flex items-center justify-center"
            style={{ background: "rgba(37,99,235,0.2)", border: "1px solid rgba(37,99,235,0.3)" }}
          >
            <svg className="w-5 h-5" fill="none" stroke="#60a5fa" viewBox="0 0 24 24" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <path d="M12 8v4M12 16h.01" />
            </svg>
          </div>
          <div>
            <h4 className="font-bold mb-1.5 text-[15px]" style={{ color: "#f1f5f9" }}>
              {t("features-extra-title")}
            </h4>
            <p className="text-[13.5px] leading-relaxed" style={{ color: "#475569" }}>
              {t("features-extra-desc")}{" "}
              <Link href="#contact" className="font-semibold transition-colors hover:underline" style={{ color: "#60a5fa" }}>
                {t("features-extra-link")}
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
