import { notFound } from 'next/navigation'
import { getRequestConfig } from 'next-intl/server'
import { Pathnames } from 'next-intl/routing'
import { createLocalizedPathnamesNavigation } from 'next-intl/navigation'

export const locales = ['en', 'de']
export const defaultLocale = locales[0]
export const localePrefix = 'as-needed'
export const pathnames = {
  '/': '/',
  '/login': {
    en: '/login',
    de: '/login',
  },
  '/404': {
    en: '/404',
    de: '/404',
  },
} satisfies Pathnames<typeof locales>

export default getRequestConfig(async ({ locale }) => {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as any)) notFound()

  return {
    messages: (await import(`../messages/${locale}.json`)).default,
  }
})

export const { Link, getPathname, redirect, usePathname, useRouter } =
  createLocalizedPathnamesNavigation({
    locales: ['en', 'de'],
    pathnames: pathnames,
    localePrefix,
  })
