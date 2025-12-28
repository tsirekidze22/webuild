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
      {/* Current Language Button */}
      <button
        className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
        onBlur={() => setTimeout(() => setIsOpen(false), 200)}
      >
        <Image
          src={currentLanguage?.image || "/assets/icons/georgia-flag.svg"}
          alt={currentLanguage?.label || "ქარ"}
          width={20}
          height={20}
          className="rounded-sm"
        />
        <span className="text-sm font-medium text-gray-800">
          {currentLanguage?.label}
        </span>
        <svg
          className={`w-4 h-4 text-gray-800 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <ul className="absolute right-0 mt-2 w-32 bg-white rounded-lg shadow-lg border border-gray-200 py-1 z-50">
          {languages.map((lang) => (
            <li key={lang.code}>
              <button
                onClick={() => handleLanguageSwitch(lang.code as "en" | "ka")}
                className={`w-full flex items-center gap-2 px-4 py-2 text-sm hover:bg-gray-100 transition-colors ${
                  locale === lang.code ? "bg-gray-50" : ""
                }`}
              >
                <Image
                  src={lang.image}
                  alt={lang.label}
                  width={20}
                  height={20}
                  className="rounded-sm"
                />
                <span className="font-medium text-gray-500">{lang.label}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LanguageSwitcher;
