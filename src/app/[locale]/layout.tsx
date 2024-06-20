import type { Metadata } from 'next'
import ErrorButton from '@/components/ErrorButton'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages, getTranslations } from 'next-intl/server'
import LocaleSwitcher from '@/components/LocaleSwitcher'
import { Link } from '@/i18n'

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: any
}) {
  const messages = await getMessages()
  const t = await getTranslations()

  return (
    <html lang={params.locale}>
      <NextIntlClientProvider messages={messages}>
        <body>
          <nav>
            <div>
              <Link href="/">
                {t('Navigation.home')} {t('Type.page')}
              </Link>
            </div>
            <div>
              <Link href="/login">
                {t('Navigation.login')} {t('Type.page')}
              </Link>
            </div>
            <div>
              <Link href="/404">
                {t('Navigation.404')} {t('Type.page')}
              </Link>
            </div>
          </nav>
          <br />
          <LocaleSwitcher />
          <h1>
            {t('Type.layout')}.tsx ({t('Page.root')})
          </h1>
          <ErrorButton />
          {children}
        </body>
      </NextIntlClientProvider>
    </html>
  )
}
