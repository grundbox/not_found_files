import ErrorButton from '@/components/ErrorButton'
import { getTranslations } from 'next-intl/server'

export default async function Page() {
  const t = await getTranslations()

  return (
    <>
      <h1>
        {t('Type.page')}.tsx ({t('Page.root')})
      </h1>
      <ErrorButton />
    </>
  )
}
