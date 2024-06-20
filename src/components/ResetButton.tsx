'use client'

const ResetButton = ({ reset }: { reset: () => void }) => {
  return <button onClick={reset}>Try again</button>
}

export default ResetButton
