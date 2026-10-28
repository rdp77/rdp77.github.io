"use client";

import * as Sentry from "@sentry/nextjs";
import { useEffect } from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    Sentry.captureException(error);
  }, [error]);

  return (
    <html lang="en">
      <body
        style={{
          fontFamily: "system-ui, sans-serif",
          padding: "8rem 1.5rem",
          maxWidth: 600,
          margin: "0 auto",
        }}
      >
        <h1>Something went wrong</h1>
        <p>An unexpected error occurred. Reload to try again.</p>
        <button onClick={reset} style={{ padding: "0.75rem 1.25rem", minHeight: 44 }}>
          Try again
        </button>
      </body>
    </html>
  );
}
