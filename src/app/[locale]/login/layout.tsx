import ErrorButton from '@/components/ErrorButton'
import { getTranslations } from 'next-intl/server'

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode
  params: { locale: string }
}) {
  const t = await getTranslations()

  return (
    <>
      <h1>
        {t('Type.layout')}.tsx ({t('Page.login')})
      </h1>
      <ErrorButton />
      {children}
    </>
  )
}
