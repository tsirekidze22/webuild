// app/[locale]/head.tsx
export default function Head() {
  return (
    <>
      {/* Favicon */}
      <link rel="shortcut icon" href="/favicon.ico" />
      <link
        rel="icon"
        href="/favicon-32x32.png"
        sizes="32x32"
        type="image/png"
      />
      <link
        rel="icon"
        href="/favicon-16x16.png"
        sizes="16x16"
        type="image/png"
      />

      {/* Optional: OG / Twitter fallback */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Webuild.ge" />
      <meta name="twitter:card" content="summary_large_image" />
    </>
  );
}
