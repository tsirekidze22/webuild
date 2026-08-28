// lib\seo.ts
import type { Metadata } from "next";

const baseUrl = "https://webuild.ge";

export function buildAlternates(locale: string, path: string = ""): Metadata["alternates"] {
  const cleanPath = path ? `/${path.replace(/^\/+/, "")}` : "";
  return {
    canonical: locale === "ka" ? `${baseUrl}${cleanPath}` : `${baseUrl}/en${cleanPath}`,
    languages: {
      en: `${baseUrl}/en${cleanPath}`,
      ka: `${baseUrl}${cleanPath}`,
      "x-default": `${baseUrl}${cleanPath}`,
    },
  };
}
