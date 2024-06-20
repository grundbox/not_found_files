import ErrorButton from '@/components/ErrorButton'
import { getTranslations } from 'next-intl/server'

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const t = await getTranslations()

  return (
    <>
      <h1>
        {t('Type.layout')}.tsx ({t('Page.404')})
      </h1>
      <ErrorButton />
      {children}
    </>
  )
}
