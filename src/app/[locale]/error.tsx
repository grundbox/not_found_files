'use client'

import { useEffect } from 'react'
import ResetButton from '@/components/ResetButton'
import { useTranslations } from 'next-intl'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  const t = useTranslations()

  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <>
      <h1>
        {t('Type.error')}.tsx ({t('Page.root')})
      </h1>
      <ResetButton reset={reset} />
    </>
  )
}
