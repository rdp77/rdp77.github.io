export const cn = (...c: (string | false | null | undefined)[]) => c.filter(Boolean).join(" ");

export async function getJson<T>(url: string, init: RequestInit = {}): Promise<T> {
  const res = await fetch(url, { ...init, signal: AbortSignal.timeout(8000) });
  if (!res.ok) throw new Error(`${res.status} ${url}`);
  return res.json() as Promise<T>;
}

export type Widget<T> = { data: T; sample: boolean };
