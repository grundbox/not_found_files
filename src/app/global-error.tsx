"use client";

import ResetButton from "@/components/ResetButton";
import ReloadButton from "@/components/ReloadButton";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <html>
      <body>
        <h1>global-error.tsx</h1>
        <ResetButton reset={reset} />&nbsp;
        <ReloadButton />
      </body>
    </html>
  );
}
