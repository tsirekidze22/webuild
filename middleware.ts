// middleware.ts
import createIntlMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export default createIntlMiddleware(routing);

export const config = {
  // Match all pathnames except for
  // - API routes
  // - Next.js internals (_next)
  // - Static files (images, etc.)
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};
