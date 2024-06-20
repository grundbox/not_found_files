import ErrorButton from '@/components/ErrorButton'
import { getTranslations } from 'next-intl/server'

export default async function NotFound() {
  const t = await getTranslations()

  return (
    <>
      <h1>
        {t('Type.page')}.tsx ({t('Page.404')})
      </h1>
      <ErrorButton />
    </>
  )
}
