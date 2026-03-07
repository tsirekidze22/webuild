import { useTranslations } from "next-intl";
import Link from "next/link";

/* Icons - kept identical SVG paths, just restyled containers */
const icons = [
  // 1 - document
  <svg
    key={1}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    className="w-5 h-5"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
    />
  </svg>,
  // 2 - mobile
  <svg
    key={2}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    className="w-5 h-5"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
    />
  </svg>,
  // 3 - layout
  <svg
    key={3}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    className="w-5 h-5"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
    />
  </svg>,
  // 4 - phone
  <svg
    key={4}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    className="w-5 h-5"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
    />
  </svg>,
  // 5 - search/SEO
  <svg
    key={5}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    className="w-5 h-5"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
    />
  </svg>,
  // 6 - server
  <svg
    key={6}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    className="w-5 h-5"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
    />
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
    <section className="bg-white py-20 md:py-28">
      <div className="container-lg">
        {/* Header */}
        <div className="max-w-2xl mb-14">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight leading-[1.1] mb-4">
            {t("features-title")}
          </h2>
          <p className="text-lg text-slate-500 leading-relaxed">
            {t("features-subtitle")}
          </p>
        </div>

        {/* 3-col feature grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-slate-100 border border-slate-100 rounded-2xl overflow-hidden mb-10">
          {features.map((f, i) => (
            <div
              key={i}
              className="group bg-white p-8 hover:bg-blue-50 transition-colors duration-200"
            >
              {/* Number + icon row */}
              <div className="flex items-center justify-between mb-5">
                <span className="text-[11px] font-bold text-slate-300 tracking-[0.15em] uppercase">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="w-9 h-9 rounded-lg bg-slate-100 group-hover:bg-blue-100 flex items-center justify-center text-slate-500 group-hover:text-blue-600 transition-colors duration-200">
                  {icons[i]}
                </div>
              </div>

              <h3 className="text-[15px] font-bold text-slate-900 mb-2 leading-snug">
                {f.title}
              </h3>
              <p className="text-[14px] text-slate-500 leading-relaxed">
                {f.description}
              </p>
            </div>
          ))}
        </div>

        {/* Info callout */}
        <div className="bg-slate-900 rounded-2xl p-8 flex flex-col md:flex-row items-start gap-5">
          <div className="shrink-0 w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center">
            <svg
              className="w-5 h-5 text-white"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div>
            <h4 className="text-white font-bold mb-1.5">
              {t("features-extra-title")}
            </h4>
            <p className="text-slate-400 text-[14px] leading-relaxed">
              {t("features-extra-desc")}{" "}
              <Link
                href="#contact"
                className="text-blue-400 hover:text-blue-300 font-semibold transition-colors"
              >
                {t("features-extra-link")}
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
