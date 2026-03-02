"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export default function Footer() {
  const t = useTranslations("footer");

  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-5 lg:px-8 py-14">

        {/* Top grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center shrink-0">
                <span className="text-white font-bold text-sm leading-none">W</span>
              </div>
              <span className="text-[15px] font-bold text-white tracking-tight">webuild.ge</span>
            </div>
            <p className="text-slate-400 text-[14px] leading-relaxed max-w-sm">
              {t("footer-description")}
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-[13px] font-semibold text-slate-400 uppercase tracking-wider mb-4">
              {t("footer-links-title")}
            </h3>
            <ul className="space-y-2.5">
              {[
                { href: "#examples", label: t("footer-links-examples") },
                { href: "#pricing",  label: t("footer-links-pricing")  },
                { href: "#about",    label: t("footer-links-about")    },
                { href: "#contact",  label: t("footer-links-contact")  },
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-[14px] text-slate-400 hover:text-white transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-[13px] font-semibold text-slate-400 uppercase tracking-wider mb-4">
              {t("footer-contact-title")}
            </h3>
            <ul className="space-y-3 text-[14px] text-slate-400">
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 mt-0.5 shrink-0 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>{t("footer-location")}</span>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 mt-0.5 shrink-0 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:hello@webuild.ge" className="hover:text-white transition-colors">
                  hello@webuild.ge
                </a>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 mt-0.5 shrink-0 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+995555799369" className="hover:text-white transition-colors">
                  +995 555 799 369
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-3 text-[13px] text-slate-500">
          <p>{t("footer-rights")}</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="hover:text-slate-300 transition-colors">
              {t("footer-privacy")}
            </Link>
            <Link href="/terms" className="hover:text-slate-300 transition-colors">
              {t("footer-terms")}
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
