import * as Sentry from "@sentry/nextjs";

/** Log + forward to Sentry for failures that are swallowed by a sample/empty fallback. */
export function reportError(scope: string, err: unknown): void {
  console.error(`[${scope}]`, err);
  Sentry.captureException(err, { tags: { scope } });
}
