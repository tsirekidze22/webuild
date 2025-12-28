// app\layout.tsx
import type { Metadata } from "next";
import "./globals.css";

// This metadata will be overridden by locale-specific layout
export const metadata: Metadata = {
  title: "Webuild.ge",
  description: "Professional websites for local businesses",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
