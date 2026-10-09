"use client";

export default function Error({ reset }: { error: Error; reset: () => void }) {
  return (
    <div className="mx-auto max-w-[1200px] px-6 py-32">
      <h1 className="h2 text-4xl">Something went wrong</h1>
      <p className="mt-3 text-muted">An unexpected error occurred while rendering this page.</p>
      <button onClick={reset} className="mt-6 rounded-sm bg-inverse-bg px-5 py-2.5 text-sm font-medium text-inverse-fg">Try again</button>
    </div>
  );
}
