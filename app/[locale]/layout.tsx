import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { Inter, Noto_Sans_Georgian } from "next/font/google";
import "../globals.css";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

const noto = Noto_Sans_Georgian({
  subsets: ["georgian"],
  weight: ["400", "500", "600", "700"],
});

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  // Await params before using
  const { locale } = await params;
  const t = await getTranslations("mainMetadata");

  return {
    title: t("metadata-title"),
    description: t("metadata-description"),
    keywords: t("metadata-keywords"),
    authors: [{ name: "Webuild.ge" }],
    creator: "Webuild.ge",
    openGraph: {
      title: t("og-title"),
      description: t("og-description"),
      url: "https://webuild.ge",
      siteName: "Webuild.ge",
      images: [
        {
          url: "https://webuild.ge/og-image.jpg",
          width: 1200,
          height: 630,
        },
      ],
      locale: locale === "ka" ? "ka_GE" : "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: t("og-title"),
      description: t("og-description"),
      images: ["https://webuild.ge/og-image.jpg"],
      creator: "@webuildge",
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  // Await params before using
  const { locale } = await params;

  if (!routing.locales.includes(locale as "en" | "ka")) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={locale === "ka" ? noto.className : inter.className}>
        <NextIntlClientProvider messages={messages}>
          {children}
          <Analytics />
          <SpeedInsights />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
