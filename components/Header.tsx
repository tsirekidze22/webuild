"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import LanguageSwitcher from "./reusable/LanguageSwitcher";

export default function Header() {
  const t = useTranslations("header");
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/80 backdrop-blur-xl shadow-sm border-b border-gray-100"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <a href="#" className="flex items-center gap-3 group">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center shadow-lg shadow-blue-600/20 transition-transform group-hover:scale-105">
                <span className="text-white font-bold text-lg">W</span>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                webuild.ge
              </span>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <a
                href="#examples"
                className="text-gray-600 hover:text-gray-900 transition-colors font-medium"
              >
                {t("nav-examples")}
              </a>
              <a
                href="#pricing"
                className="text-gray-600 hover:text-gray-900 transition-colors font-medium"
              >
                {t("nav-pricing")}
              </a>
              <a
                href="#about"
                className="text-gray-600 hover:text-gray-900 transition-colors font-medium"
              >
                {t("nav-about")}
              </a>
            </nav>

            {/* Right side */}
            <div className="flex items-center gap-x-5">
              <a
                href="#contact"
                className="hidden sm:inline-flex px-6 py-2.5 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl hover:shadow-lg hover:shadow-blue-600/30 transition-all duration-300 font-medium hover:scale-105"
              >
                {t("nav-get-started")}
              </a>

              <LanguageSwitcher />

              {/* Burger Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden flex flex-col gap-1.5 w-8 h-8 justify-center"
                aria-label="Toggle menu"
              >
                <span
                  className={`block h-0.5 w-full bg-gray-900 transition-all duration-300 ${
                    isMobileMenuOpen ? "rotate-45 translate-y-2" : ""
                  }`}
                />
                <span
                  className={`block h-0.5 w-full bg-gray-900 transition-opacity duration-300 ${
                    isMobileMenuOpen ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`block h-0.5 w-full bg-gray-900 transition-all duration-300 ${
                    isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
                  }`}
                />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Overlay Menu */}
      <div
        className={`fixed inset-0 z-40 bg-white/95 backdrop-blur-xl transition-all duration-300 md:hidden ${
          isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          <a
            href="#examples"
            onClick={handleLinkClick}
            className="text-2xl font-medium text-gray-900"
          >
            {t("nav-examples")}
          </a>
          <a
            href="#pricing"
            onClick={handleLinkClick}
            className="text-2xl font-medium text-gray-900"
          >
            {t("nav-pricing")}
          </a>
          <a
            href="#about"
            onClick={handleLinkClick}
            className="text-2xl font-medium text-gray-900"
          >
            {t("nav-about")}
          </a>

          <a
            href="#contact"
            onClick={handleLinkClick}
            className="mt-6 px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl font-medium"
          >
            {t("nav-get-started")}
          </a>
        </div>
      </div>
    </>
  );
}
