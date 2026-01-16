// app\[locale]\layout.tsx
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
  const { locale } = await params;
  const t = await getTranslations("mainMetadata");
  const baseUrl = "https://webuild.ge";

  // JSON-LD for Organization
  const organizationJSON = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Webuild.ge",
    url: baseUrl,
    logo: `${baseUrl}/assets/image/logo.png`,
    sameAs: [],
  };

  // JSON-LD Breadcrumb
  const breadcrumbJSON = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: locale === "ka" ? baseUrl : `${baseUrl}/${locale}`,
      },
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
      url: `${baseUrl}/${locale}`,
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
    alternates: {
      canonical: locale === "ka" ? baseUrl : `${baseUrl}/${locale}`,
      languages: {
        en: `${baseUrl}/en`,
        ka: baseUrl,
      },
    },
    metadataBase: new URL(baseUrl),
    other: [
      {
        type: "application/ld+json",
        children: JSON.stringify(organizationJSON),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(breadcrumbJSON),
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
      <head>
        <title>Webuild.ge - ვებგვერდების დამზადება თბილისში</title>

        {/* Local Business Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Webuild.ge",
              url: "https://webuild.ge",
              logo: "https://webuild.ge/logo.png",
              telephone: "+995555799369",
              email: "hello@webuild.ge",
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
            }),
          }}
        />
      </head>
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
