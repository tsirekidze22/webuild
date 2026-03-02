"use client";

import { useState } from "react";
import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import Image from "next/image";

const LanguageSwitcher = () => {
  const [isOpen, setIsOpen] = useState(false);
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const handleLanguageSwitch = (newLocale: "en" | "ka") => {
    // Navigate to the same page with new locale
    router.replace(pathname, { locale: newLocale });
    setIsOpen(false);
  };

  const languages = [
    {
      code: "ka",
      image: "/assets/icons/georgia-flag.svg",
      label: "ქარ",
    },
    {
      code: "en",
      image: "/assets/icons/britain-flag.svg",
      label: "ENG",
    },
  ];

  const currentLanguage = languages.find((lang) => lang.code === locale);

  return (
    <div className="relative">
      {/* Trigger */}
      <button
        className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-md text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
        onBlur={() => setTimeout(() => setIsOpen(false), 200)}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        <Image
          src={currentLanguage?.image || "/assets/icons/georgia-flag.svg"}
          alt={currentLanguage?.label || "ქარ"}
          width={18}
          height={18}
          className="rounded-sm"
        />
        <span className="text-[13px] font-semibold">{currentLanguage?.label}</span>
        <svg
          className={`w-3 h-3 transition-transform ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          strokeWidth={2.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Dropdown */}
      {isOpen && (
        <ul
          role="listbox"
          className="absolute right-0 mt-1.5 w-28 bg-white rounded-lg shadow-lg border border-slate-200 py-1 z-50"
        >
          {languages.map((lang) => (
            <li key={lang.code} role="option" aria-selected={locale === lang.code}>
              <button
                onClick={() => handleLanguageSwitch(lang.code as "en" | "ka")}
                className={`w-full flex items-center gap-2 px-3 py-2 text-[13px] font-medium hover:bg-slate-50 transition-colors ${
                  locale === lang.code ? "text-blue-600 bg-blue-50" : "text-slate-600"
                }`}
              >
                <Image src={lang.image} alt={lang.label} width={18} height={18} className="rounded-sm" />
                {lang.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LanguageSwitcher;
