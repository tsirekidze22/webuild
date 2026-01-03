"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import { motion } from "framer-motion";

type StatProps = {
  value: string;
  label: string;
  full?: boolean;
};

export default function Hero() {
  const t = useTranslations("hero");

  return (
    <section className="relative bg-white pt-32 md:pt-40 pb-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-center items-center">
          <div className="max-w-4xl mx-auto text-center">
            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-gray-900"
            >
              {t("hero-title")}
              <br />
              <span className="text-blue-600">{t("hero-subtitle")}</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-base sm:text-lg md:text-xl text-gray-600 mb-8 leading-relaxed"
            >
              {t("hero-description")}
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
            >
              <Link
                href="#examples"
                className="px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold text-center transition-all duration-300 hover:bg-blue-700 hover:scale-105 active:scale-95"
              >
                {t("hero-cta-primary")}
              </Link>
              <Link
                href="#contact"
                className="px-8 py-4 border-2 border-gray-300 text-gray-900 rounded-lg font-semibold text-center transition-all duration-300 hover:border-blue-600 hover:text-blue-600 hover:scale-105 active:scale-95"
              >
                {t("hero-cta-secondary")}
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row justify-between gap-6 sm:gap-0 border-t pt-6 border-gray-200 text-center md:text-left"
            >
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
                full
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Helpers ---------- */

function Stat({ value, label, full = false }: StatProps) {
  return (
    <div className={full ? "col-span-2 sm:col-span-3" : ""}>
      <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">
        {value}
      </div>
      <div className="text-sm md:text-base text-gray-600">{label}</div>
    </div>
  );
}
