import createMiddleware from 'next-intl/middleware'
import { type NextRequest } from 'next/server'
import { defaultLocale, localePrefix, locales } from './i18n'

export default function middlewareI18n(request: NextRequest) {
  const handleI18nRouting = createMiddleware({
    locales,
    defaultLocale,
    localePrefix,
  })

  return handleI18nRouting(request)
}

export const config = {
  // Matcher ignoring `/_next/` and `/api/`
  matcher: [
    /*
     * Enable a redirect to a matching locale at the root
     */
    '/',

    /*
     * Set a cookie to remember the previous locale for
     * all requests that have a locale prefix
     */
    '/(en|de)/:path*',

    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}
