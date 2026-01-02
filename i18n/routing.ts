// i18n/routing.ts
import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ["ka", "en"],

  // Used when no locale matches - Georgian is default
  defaultLocale: "ka",

  // Don't use a locale prefix for the default locale (ka)
  // This means /about instead of /ka/about for Georgian
  // But /en/about for English
  localePrefix: "as-needed",

  // 🔥 DISABLE AUTO-DETECTION
  // This prevents next-intl from detecting locale from:
  // - Browser Accept-Language headers
  // - User's browser preferences
  localeDetection: false,
});
