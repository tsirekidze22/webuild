import createIntlMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";
import { NextRequest, NextResponse } from "next/server";

export default function middleware(request: NextRequest) {
  const userAgent = request.headers.get("user-agent") || "";

  // Skip middleware for search engine crawlers (Google, Bing, Yandex)
  if (/Googlebot|Bingbot|Slurp|YandexBot/i.test(userAgent)) {
    return NextResponse.next();
  }

  // Normal i18n handling
  return createIntlMiddleware(routing)(request);
}

export const config = {
  matcher: ["/((?!api|_next|.*\\..*|favicon\\.ico).*)"],
};
