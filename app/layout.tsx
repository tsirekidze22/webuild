import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Webuild.ge — Professional Websites for Local Businesses",
  description:
    "Get modern, mobile-friendly websites for your local business in Tbilisi. One-page websites, easy contact, fast setup, and transparent pricing.",
  keywords: [
    "webuild.ge",
    "Tbilisi websites",
    "local business website",
    "home repair website",
    "small business web design",
    "mobile-friendly websites",
    "professional websites Georgia",
  ],
  authors: [{ name: "Webuild.ge" }],
  creator: "Webuild.ge",
  openGraph: {
    title: "Webuild.ge — Professional Websites for Local Businesses",
    description:
      "Modern, mobile-friendly websites for small businesses in Tbilisi. Fast setup, easy contact, and professional design.",
    url: "https://webuild.ge",
    siteName: "Webuild.ge",
    images: [
      {
        url: "https://webuild.ge/og-image.jpg", // placeholder for OG image
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Webuild.ge — Professional Websites for Local Businesses",
    description:
      "Modern, mobile-friendly websites for small businesses in Tbilisi. Fast setup, easy contact, and professional design.",
    images: ["https://webuild.ge/og-image.jpg"],
    creator: "@webuildge",
  },
};

import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
