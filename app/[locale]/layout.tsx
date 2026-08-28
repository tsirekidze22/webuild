// app\[locale]\layout.tsx
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { Inter, Noto_Sans_Georgian } from "next/font/google";
import "../globals.css";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import LoadingScreen from "@/components/LoadingScreen";
import { buildAlternates } from "@/lib/seo";

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
  const { locale } = await params;
  const t = await getTranslations("mainMetadata");
  const baseUrl = "https://webuild.ge";

  const pageUrl = locale === "ka" ? baseUrl : `${baseUrl}/en`;

  const organizationJSON = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Webuild.ge",
    url: baseUrl,
    logo: `${baseUrl}/assets/images/logo.png`,
    sameAs: [
      "https://www.facebook.com/webuildge",
      "https://www.instagram.com/webuildge",
      "https://www.linkedin.com/company/webuildge",
    ],
  };

  const localBusinessJSON = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Webuild.ge",
    url: baseUrl,
    logo: `${baseUrl}/assets/images/logo.png`,
    telephone: "+995555799369",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Mikheil Abramishvili Str",
      addressLocality: "Tbilisi",
      postalCode: "0144",
      addressCountry: "GE",
    },
    sameAs: [
      "https://www.facebook.com/webuildge",
      "https://www.instagram.com/webuildge",
      "https://www.linkedin.com/company/webuildge",
    ],
  };

  return {
    title: t("metadata-title"),
    description: t("metadata-description"),
    keywords: t("metadata-keywords"),
    authors: [{ name: "Webuild.ge" }],
    creator: "Webuild.ge",
    openGraph: {
      title: t("og-title"),
      description: t("og-description"),
      url: pageUrl,
      siteName: "Webuild.ge",
      images: [
        {
          url: `${baseUrl}/assets/images/og-image.jpg`,
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
      images: [`${baseUrl}/assets/images/og-image.jpg`],
      creator: "@webuildge",
    },
    alternates: buildAlternates(locale),
    metadataBase: new URL(baseUrl),
    other: [
      {
        type: "application/ld+json",
        children: JSON.stringify(organizationJSON),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(localBusinessJSON),
      },
    ],
    icons: {
      icon: [
        { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
        { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      ],
      shortcut: "/favicon.ico",
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
  const { locale } = await params;

  if (!routing.locales.includes(locale as "en" | "ka")) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={locale === "ka" ? noto.className : inter.className}>
        <NextIntlClientProvider messages={messages}>
          <LoadingScreen />
          {children}
          <Analytics />
          <SpeedInsights />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
