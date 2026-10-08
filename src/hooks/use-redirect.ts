import { useEffect } from "react"

/**
 * Navigates to `to` after `delay` milliseconds so the loader animation has
 * time to play before the page changes.
 *
 * - `to` empty/undefined → no navigation (component stays a plain loader).
 * - The timer is cleared on unmount, so HMR / StrictMode never double-fire.
 * - Guarding against redirecting to the current URL avoids an infinite
 *   reload loop (this app has no router, so every path renders the same SPA).
 */
export function useRedirect(to?: string, delay: number = 3000) {
  useEffect(() => {
    if (!to) return

    let target: string | undefined
    try {
      const url = new URL(to, window.location.href)
      if (url.href === window.location.href) return
      target = url.href
    } catch {
      // Malformed URL: let the browser handle it (and fail loudly) as-is.
      target = to
    }

    const timer = window.setTimeout(() => {
      window.location.assign(target!)
    }, delay)

    return () => window.clearTimeout(timer)
  }, [to, delay])
}
