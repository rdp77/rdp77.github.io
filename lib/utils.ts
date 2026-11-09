export const cn = (...c: (string | false | null | undefined)[]) => c.filter(Boolean).join(" ");

export async function getJson<T>(url: string, init: RequestInit = {}): Promise<T> {
  const go = () => fetch(url, { ...init, signal: AbortSignal.timeout(8000) });
  // Retry once on network-level failure (e.g. "other side closed" from a dropped keep-alive socket).
  const res = await go().catch(go);
  if (!res.ok) throw new Error(`${res.status} ${url}`);
  return res.json() as Promise<T>;
}

export type Widget<T> = { data: T; sample: boolean };
