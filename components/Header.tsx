"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import LanguageSwitcher from "./reusable/LanguageSwitcher";

export default function Header() {
  const t = useTranslations("header");
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isMobileMenuOpen]);

  const close = () => setIsMobileMenuOpen(false);

  const navLinks = [
    { href: "#examples", label: t("nav-examples") },
    { href: "#pricing",  label: t("nav-pricing")  },
    { href: "#about",    label: t("nav-about")    },
  ];

  return (
    <>
      {/* ── Top bar ─────────────────────────────────────── */}
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-xl border-b border-slate-200/70 shadow-sm shadow-slate-900/[0.04]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-[68px]">

            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 shrink-0">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                style={{
                  background: "linear-gradient(135deg, #3b82f6 0%, #2563eb 60%, #1d4ed8 100%)",
                  boxShadow: scrolled
                    ? "0 1px 3px rgba(37,99,235,0.3)"
                    : "0 0 0 1px rgba(255,255,255,0.15), 0 1px 3px rgba(0,0,0,0.3)",
                }}
              >
                <span className="text-white font-black text-sm leading-none tracking-tight">W</span>
              </div>
              <span
                className={`text-[15px] font-bold tracking-tight transition-colors duration-300 ${
                  scrolled ? "text-slate-900" : "text-white"
                }`}
              >
                webuild.ge
              </span>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-0.5">
              {navLinks.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className={`px-3.5 py-2 text-[14px] font-medium rounded-md transition-colors duration-200 ${
                    scrolled
                      ? "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                      : "text-white/75 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {label}
                </Link>
              ))}
            </nav>

            {/* Right cluster */}
            <div className="flex items-center gap-1.5">
              <LanguageSwitcher dark={!scrolled} />

              <Link
                href="#contact"
                className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 text-[14px] font-semibold rounded-lg text-white transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/30 hover:-translate-y-px"
                style={{
                  background: "linear-gradient(135deg, #3b82f6 0%, #2563eb 60%, #1d4ed8 100%)",
                  boxShadow: "0 1px 0 rgba(255,255,255,0.10) inset",
                }}
              >
                {t("nav-get-started")}
                <svg
                  className="w-3.5 h-3.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={2.5}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M9 5l7 7-7 7" />
                </svg>
              </Link>

              {/* Hamburger */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`md:hidden ml-0.5 p-2 rounded-md transition-colors ${
                  scrolled
                    ? "text-slate-700 hover:bg-slate-100"
                    : "text-white/80 hover:text-white hover:bg-white/10"
                }`}
                aria-label="Toggle menu"
                aria-expanded={isMobileMenuOpen}
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {isMobileMenuOpen ? (
                    <>
                      <line x1="18" y1="6" x2="6" y2="18" />
                      <line x1="6" y1="6" x2="18" y2="18" />
                    </>
                  ) : (
                    <>
                      <line x1="3" y1="7" x2="21" y2="7" />
                      <line x1="3" y1="12" x2="21" y2="12" />
                      <line x1="3" y1="17" x2="21" y2="17" />
                    </>
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* ── Mobile drawer ───────────────────────────────── */}
      <style>{`
        @keyframes drawer-item-in {
          from { opacity: 0; transform: translateX(16px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        .drawer-item {
          opacity: 0;
          animation: drawer-item-in 280ms cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
      `}</style>

      <div
        className={`fixed inset-0 z-[60] md:hidden transition-all duration-300 ${
          isMobileMenuOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          onClick={close}
          className={`absolute inset-0 transition-opacity duration-300 ${
            isMobileMenuOpen ? "opacity-100" : "opacity-0"
          }`}
          style={{ background: "rgba(2,8,23,0.82)", backdropFilter: "blur(6px)" }}
        />

        {/* Panel */}
        <div
          className={`absolute top-0 right-0 h-full w-80 flex flex-col transition-transform duration-[380ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
          style={{
            background: "linear-gradient(180deg, #070e1d 0%, #0b1729 55%, #070e1d 100%)",
            borderLeft: "1px solid rgba(255,255,255,0.07)",
            boxShadow: "-32px 0 80px rgba(0,0,0,0.75)",
          }}
        >
          {/* Top ambient glow */}
          <div
            aria-hidden
            className="absolute top-0 right-0 w-72 h-56 pointer-events-none"
            style={{
              background: "radial-gradient(ellipse at top right, rgba(37,99,235,0.18) 0%, transparent 65%)",
            }}
          />

          {/* Panel header */}
          <div
            className="relative flex items-center justify-between px-6 h-16 shrink-0"
            style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}
          >
            <div className="flex items-center gap-2.5">
              <div
                className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0"
                style={{
                  background: "linear-gradient(135deg, #3b82f6, #1d4ed8)",
                  boxShadow: "0 0 14px rgba(37,99,235,0.45)",
                }}
              >
                <span className="text-white font-black text-xs leading-none">W</span>
              </div>
              <span className="text-[15px] font-bold text-white">webuild.ge</span>
            </div>
            <button
              onClick={close}
              className="p-2 rounded-lg transition-colors duration-150"
              style={{ color: "rgba(255,255,255,0.35)" }}
              aria-label="Close menu"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>

          {/* Nav links */}
          <nav className="relative flex-1 px-4 pt-6 pb-4 flex flex-col gap-0.5 overflow-y-auto">
            {isMobileMenuOpen && navLinks.map(({ href, label }, i) => (
              <Link
                key={href}
                href={href}
                onClick={close}
                className="drawer-item group flex items-center justify-between px-4 py-4 rounded-xl transition-colors duration-150"
                style={{
                  animationDelay: `${80 + i * 55}ms`,
                  color: "rgba(255,255,255,0.6)",
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.05)";
                  (e.currentTarget as HTMLElement).style.color = "#ffffff";
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.background = "transparent";
                  (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.6)";
                }}
              >
                <span className="text-[16px] font-medium tracking-[-0.01em]">{label}</span>
                <svg
                  className="w-4 h-4 transition-transform duration-150 group-hover:translate-x-0.5"
                  style={{ color: "rgba(255,255,255,0.2)" }}
                  fill="none" stroke="currentColor" viewBox="0 0 24 24"
                  strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"
                >
                  <path d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            ))}

            {/* Divider */}
            <div
              className="my-4 mx-2"
              style={{ height: "1px", background: "rgba(255,255,255,0.06)" }}
            />

            {/* Contact info */}
            {isMobileMenuOpen && (
              <div
                className="drawer-item flex flex-col gap-2 px-4"
                style={{ animationDelay: `${80 + navLinks.length * 55}ms` }}
              >
                <a
                  href="tel:+995555799369"
                  className="flex items-center gap-2.5 py-1 text-[13px] transition-colors duration-150"
                  style={{ color: "rgba(255,255,255,0.28)" }}
                  onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.55)")}
                  onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.28)")}
                >
                  <svg className="w-3.5 h-3.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 11.54 19.79 19.79 0 01.13 2.94a2 2 0 012-2.18h3a2 2 0 012 1.72c.13.96.36 1.9.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0122 16.92z" />
                  </svg>
                  +995 555 799 369
                </a>
                <a
                  href="mailto:hello@webuild.ge"
                  className="flex items-center gap-2.5 py-1 text-[13px] transition-colors duration-150"
                  style={{ color: "rgba(255,255,255,0.28)" }}
                  onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.55)")}
                  onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.28)")}
                >
                  <svg className="w-3.5 h-3.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                  hello@webuild.ge
                </a>
              </div>
            )}
          </nav>

          {/* Bottom CTA */}
          {isMobileMenuOpen && (
            <div
              className="drawer-item relative px-5 pb-10 pt-5 shrink-0"
              style={{
                borderTop: "1px solid rgba(255,255,255,0.06)",
                animationDelay: `${80 + (navLinks.length + 1) * 55}ms`,
              }}
            >
              <Link
                href="#contact"
                onClick={close}
                className="flex items-center justify-center gap-2 w-full py-3.5 font-semibold text-[15px] rounded-xl text-white transition-all duration-200 hover:-translate-y-px"
                style={{
                  background: "linear-gradient(135deg, #3b82f6 0%, #2563eb 60%, #1d4ed8 100%)",
                  boxShadow: "0 4px 22px rgba(37,99,235,0.45), 0 1px 0 rgba(255,255,255,0.12) inset",
                }}
              >
                {t("nav-get-started")}
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
