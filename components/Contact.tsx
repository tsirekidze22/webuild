"use client";

import { useTranslations } from "next-intl";

export default function Contact() {
  const t = useTranslations("contact");

  const contactMethods = [
    {
      id: 2,
      type: t("contact-whatsapp-label"),
      value: t("contact-whatsapp-value"),
      href: "https://wa.me/995555799369",
      description: t("contact-whatsapp-desc"),
      external: true,
      accent: "#22c55e",
      icon: (
        <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </svg>
      ),
    },
    {
      id: 1,
      type: t("contact-phone-label"),
      value: "+995 555 799 369",
      href: "tel:+995555799369",
      description: t("contact-phone-desc"),
      external: false,
      accent: "#60a5fa",
      icon: (
        <svg
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          className="w-5 h-5"
          strokeWidth={1.75}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
    },
  ];

  return (
    <section
      id="contact"
      className="relative overflow-hidden py-24 md:py-32 scroll-mt-16"
      style={{
        background:
          "linear-gradient(160deg, #020817 0%, #060f1e 60%, #0a1628 100%)",
      }}
    >
      {/* Background glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div
          className="absolute"
          style={{
            top: "-10%",
            left: "60%",
            width: "700px",
            height: "700px",
            background:
              "radial-gradient(ellipse at center, rgba(37,99,235,0.12) 0%, transparent 65%)",
          }}
        />
        <div
          className="absolute"
          style={{
            bottom: "-10%",
            left: "-5%",
            width: "500px",
            height: "500px",
            background:
              "radial-gradient(ellipse at center, rgba(37,99,235,0.07) 0%, transparent 65%)",
          }}
        />
      </div>

      {/* Dot grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="container-lg relative">
        <div className="lg:grid lg:grid-cols-[1fr_1.1fr] lg:gap-20 lg:items-center">
          {/* Left - headline */}
          <div className="mb-12 lg:mb-0">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="h-px w-6" style={{ background: "#2563eb" }} />
              <span
                className="text-[11.5px] font-bold uppercase tracking-[0.12em]"
                style={{ color: "#60a5fa" }}
              >
                Contact
              </span>
            </div>

            <h2
              className="font-bold tracking-tight leading-[1.1] mb-5"
              style={{
                fontSize: "clamp(1.9rem, 4vw, 3rem)",
                letterSpacing: "-0.02em",
                color: "#f1f5f9",
              }}
            >
              {t("contact-title")}
            </h2>
            <p
              className="text-[1.0625rem] leading-relaxed mb-8"
              style={{ color: "#475569" }}
            >
              {t("contact-description")}
            </p>

            {/* Response badge */}
            <div
              className="inline-flex items-center gap-3 px-5 py-3.5 rounded-xl"
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.09)",
              }}
            >
              <span className="relative flex h-2 w-2 shrink-0">
                <span
                  className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
                  style={{ background: "#22c55e" }}
                />
                <span
                  className="relative inline-flex rounded-full h-2 w-2"
                  style={{ background: "#22c55e" }}
                />
              </span>
              <div>
                <div
                  className="text-[13px] font-semibold leading-none mb-0.5"
                  style={{ color: "#e2e8f0" }}
                >
                  {t("contact-response-title")}
                </div>
                <div className="text-[12px]" style={{ color: "#475569" }}>
                  {t("contact-response-desc")}
                </div>
              </div>
            </div>
          </div>

          {/* Right - contact cards */}
          <div className="flex flex-col gap-3">
            {contactMethods.map((m) => (
              <a
                key={m.id}
                href={m.href}
                target={m.external ? "_blank" : undefined}
                rel={m.external ? "noopener noreferrer" : undefined}
                className="group flex items-center gap-5 px-6 py-5 rounded-2xl transition-all duration-200 hover:-translate-y-px"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.background =
                    "rgba(255,255,255,0.07)";
                  (e.currentTarget as HTMLElement).style.borderColor =
                    "rgba(255,255,255,0.14)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background =
                    "rgba(255,255,255,0.04)";
                  (e.currentTarget as HTMLElement).style.borderColor =
                    "rgba(255,255,255,0.08)";
                }}
              >
                {/* Icon */}
                <div
                  className="shrink-0 w-11 h-11 rounded-xl flex items-center justify-center transition-colors duration-200"
                  style={{
                    background: "rgba(255,255,255,0.06)",
                    color: m.accent,
                  }}
                >
                  {m.icon}
                </div>

                {/* Text */}
                <div className="flex-1 min-w-0">
                  <div
                    className="text-[10.5px] font-bold uppercase tracking-widest mb-0.5"
                    style={{ color: "#334155" }}
                  >
                    {m.type}
                  </div>
                  <div
                    className="text-[15px] font-bold truncate"
                    style={{ color: "#e2e8f0" }}
                  >
                    {m.value}
                  </div>
                  <div
                    className="text-[12px] mt-0.5"
                    style={{ color: "#334155" }}
                  >
                    {m.description}
                  </div>
                </div>

                {/* Arrow */}
                <svg
                  className="shrink-0 w-4 h-4 transition-all duration-150 group-hover:translate-x-0.5"
                  style={{ color: "#1e3a5f" }}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={2.5}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            ))}

            {/* Footer links */}
            <div className="flex items-center justify-center gap-5 pt-2">
              <a
                href="#examples"
                className="text-[13px] font-medium transition-colors hover:underline"
                style={{ color: "#334155" }}
              >
                {t("contact-view-examples")}
              </a>
              <span style={{ color: "#1e293b" }}>·</span>
              <a
                href="#pricing"
                className="text-[13px] font-medium transition-colors hover:underline"
                style={{ color: "#334155" }}
              >
                {t("contact-see-pricing")}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
