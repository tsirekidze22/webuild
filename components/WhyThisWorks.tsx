import { useTranslations } from "next-intl";
import Link from "next/link";

const icons = [
  <svg
    key={1}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    className="w-4.5 h-4.5"
    strokeWidth={1.75}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>,
  <svg
    key={2}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    className="w-4.5 h-4.5"
    strokeWidth={1.75}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>,
  <svg
    key={3}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    className="w-4.5 h-4.5"
    strokeWidth={1.75}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
  </svg>,
  <svg
    key={4}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    className="w-4.5 h-4.5"
    strokeWidth={1.75}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>,
  <svg
    key={5}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    className="w-4.5 h-4.5"
    strokeWidth={1.75}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
  </svg>,
  <svg
    key={6}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    className="w-4.5 h-4.5"
    strokeWidth={1.75}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
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
    <section className="bg-white py-24 md:py-32">
      <div className="container-lg">
        <div className="lg:grid lg:grid-cols-[1fr_1.5fr] lg:gap-24 lg:items-start">
          {/* Left - sticky heading */}
          <div className="mb-14 lg:mb-0 lg:sticky lg:top-24">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="h-px w-6" style={{ background: "#2563eb" }} />
              <span
                className="text-[11.5px] font-bold uppercase tracking-[0.12em]"
                style={{ color: "#2563eb" }}
              >
                Why Webuild
              </span>
            </div>
            <h2
              className="font-bold tracking-tight leading-[1.1] mb-5"
              style={{
                fontSize: "clamp(1.9rem, 4vw, 3rem)",
                letterSpacing: "-0.02em",
                color: "#0f172a",
              }}
            >
              {t("benefits-title")}
            </h2>
            <p
              className="text-[1.0625rem] leading-relaxed mb-8"
              style={{ color: "#64748b" }}
            >
              {t("benefits-subtitle")}
            </p>
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 text-[14.5px] font-semibold rounded-lg text-white transition-all duration-200 hover:-translate-y-px hover:shadow-lg"
              style={{
                background:
                  "linear-gradient(135deg, #3b82f6, #2563eb, #1d4ed8)",
                boxShadow:
                  "0 1px 0 rgba(255,255,255,0.1) inset, 0 4px 14px rgba(37,99,235,0.3)",
              }}
            >
              {t("benefits-cta")}
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          {/* Right - benefit list */}
          <div>
            {benefits.map((b, i) => (
              <div
                key={i}
                className="group flex items-start gap-5 py-6 transition-all duration-150"
                style={{
                  borderBottom:
                    i < benefits.length - 1 ? "1px solid #f1f5f9" : "none",
                }}
              >
                {/* Number badge */}
                <div
                  className="shrink-0 w-8 h-8 rounded-lg flex items-center justify-center text-[11px] font-bold transition-colors duration-200 group-hover:bg-blue-600"
                  style={{ background: "#f1f5f9", color: "#94a3b8" }}
                >
                  <span className="group-hover:text-white transition-colors duration-200">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2.5 mb-1.5">
                    <span
                      className="transition-colors duration-200 group-hover:text-blue-600"
                      style={{ color: "#94a3b8" }}
                    >
                      {icons[i]}
                    </span>
                    <h3
                      className="text-[15px] font-bold leading-snug"
                      style={{ color: "#0f172a" }}
                    >
                      {b.title}
                    </h3>
                  </div>
                  <p
                    className="text-[13.5px] leading-relaxed ml-7"
                    style={{ color: "#64748b" }}
                  >
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
