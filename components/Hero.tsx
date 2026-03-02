import { useTranslations } from "next-intl";
import Link from "next/link";
import Image from "next/image";

type StatProps = {
  value: string;
  label: string;
};

export default function Hero() {
  const t = useTranslations("hero");

  return (
    <section className="relative bg-white overflow-hidden pt-28 md:pt-36 pb-20 md:pb-28">
      {/* Preload OG image (hidden, SEO) */}
      <Image
        src="/assets/images/og-image.jpg"
        alt="Webuild.ge - Web Development for Businesses"
        width={1200}
        height={630}
        className="hidden"
        priority
      />

      {/* Subtle grid background */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, #f8fafc 0%, #ffffff 60%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(#0f172a 1px, transparent 1px), linear-gradient(90deg, #0f172a 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="container-lg relative">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 mb-8 bg-blue-50 border border-blue-100 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0" />
            <span className="text-xs font-semibold text-blue-700 uppercase tracking-widest">
              webuild.ge
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.1] tracking-tight text-slate-900 mb-5">
            {t("hero-title")}
            <br />
            <span className="relative inline-block text-blue-600">
              {t("hero-subtitle")}
            </span>
          </h1>

          {/* Sub-copy */}
          <p className="text-lg md:text-xl text-slate-500 leading-relaxed max-w-2xl mx-auto mb-10">
            {t("hero-description")}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-14">
            <Link
              href="#examples"
              className="btn-primary text-[15px] px-6 py-3"
            >
              {t("hero-cta-primary")}
            </Link>
            <Link
              href="#contact"
              className="btn-secondary text-[15px] px-6 py-3"
            >
              {t("hero-cta-secondary")}
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-px bg-slate-200 rounded-xl overflow-hidden border border-slate-200">
            <Stat
              value={t("hero-stat-price")}
              label={t("hero-stat-price-label")}
            />
            <Stat
              value={t("hero-stat-time")}
              label={t("hero-stat-time-label")}
            />
            <Stat
              value={t("hero-stat-contact")}
              label={t("hero-stat-contact-label")}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ value, label }: StatProps) {
  return (
    <div className="bg-white px-4 py-5 text-center">
      <div className="text-2xl md:text-3xl font-bold text-slate-900 mb-1 tracking-tight">
        {value}
      </div>
      <div className="text-xs md:text-sm text-slate-500 font-medium">
        {label}
      </div>
    </div>
  );
}
