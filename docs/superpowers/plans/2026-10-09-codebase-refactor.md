# Codebase Refactor Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rapikan codebase (readability, maintainability, robustness) tanpa mengubah fungsi atau tampilan.

**Architecture:** Refactor bertahap per lapisan (data → env/error → components → app), satu commit per lapisan, diverifikasi `tsc`, `lint`, `build`, dan diff HTML render.

**Tech Stack:** Next.js 16.4 (`"use cache"`), React 19, Tailwind 4, `@sentry/nextjs`, pnpm.

**Spec:** `docs/superpowers/specs/2026-10-09-codebase-refactor-design.md`

## Global Constraints
- Tidak ada dependency baru, tidak ada test framework baru.
- Tidak ada perubahan visual atau fitur. Sample fallback harus identik nilainya.
- Next.js 16 punya breaking change: baca `node_modules/next/dist/docs/` bila menyentuh `"use cache"`, metadata, route handler.
- `NEXT_PUBLIC_*` harus tetap diakses sebagai literal `process.env.NEXT_PUBLIC_X` (inlining build). Jangan dipindah ke `lib/env.ts`.
- Satu commit per task. Pesan commit diakhiri `Co-Authored-By: Claude Code <noreply@anthropic.com>`.

## Review Focus
- Env kosong (tanpa API key apa pun): semua widget tetap render sample, tidak throw.
- API eksternal gagal/timeout: fallback sample tetap jalan, error ter-log, halaman tidak 500.
- `GITHUB_TOKEN` ada tapi GraphQL balas `data.user = null`: harus jatuh ke sample (sekarang throw TypeError → catch). Perilaku akhir sama.
- Kontak: form tanpa `NEXT_PUBLIC_WEB3FORMS_KEY` tetap menampilkan pesan "not configured"; captcha kosong memblok submit.
- Spotify tanpa env: respons `{configured:false, playing:false}`.

---

### Task 0: Baseline render

**Files:** none committed (skrip di `/tmp`).

- [ ] **Step 1: Buat skrip snapshot**

```bash
cat > /tmp/snap.sh <<'EOF'
#!/usr/bin/env bash
# usage: snap.sh <outdir>
set -e
cd /home/rdp77/Projects/Website/rdp77.github.io
pnpm build >/tmp/build.log 2>&1 || { tail -30 /tmp/build.log; exit 1; }
(pnpm start -p 3100 >/tmp/start.log 2>&1 &) ; sleep 5
mkdir -p "$1"
for p in "" projects creators about contact; do curl -s "localhost:3100/$p" > "$1/${p:-index}.html"; done
curl -s localhost:3100/api/spotify > "$1/spotify.json"
pkill -f "next start" || true
EOF
chmod +x /tmp/snap.sh
```

- [ ] **Step 2: Ambil baseline**

Run: `/tmp/snap.sh /tmp/base`
Expected: 5 file `.html` + `spotify.json` di `/tmp/base`, build sukses.

- [ ] **Step 3: Skrip diff**

```bash
cat > /tmp/cmp.sh <<'EOF'
#!/usr/bin/env bash
# usage: cmp.sh <outdir>; strip build ids, nonces, clock times
for f in /tmp/base/*; do n=$(basename "$f")
  diff <(sed -E 's#/_next/static/[^"]+##g; s/[0-9]{2}:[0-9]{2}(:[0-9]{2})?//g' "$f") \
       <(sed -E 's#/_next/static/[^"]+##g; s/[0-9]{2}:[0-9]{2}(:[0-9]{2})?//g' "$1/$n") >/dev/null && echo "OK   $n" || echo "DIFF $n"
done
EOF
chmod +x /tmp/cmp.sh
```

Run: `/tmp/snap.sh /tmp/chk && /tmp/cmp.sh /tmp/chk`
Expected: semua `OK` (kalau ada `DIFF` tanpa perubahan kode, catat sumber noise dan tambahkan ke `sed` di `cmp.sh` sebelum lanjut).

---

### Task 1: Lapisan `lib/data/*`

**Files:**
- Create: `lib/data/samples/github.ts`, `lib/data/samples/wakatime.ts`, `lib/data/samples/analytics.ts`, `lib/data/samples/ethereum.ts`
- Create: `lib/constants.ts`
- Modify: `lib/data/github.ts`, `wakatime.ts`, `analytics.ts`, `ethereum.ts`

**Interfaces:**
- Produces `lib/constants.ts`:
```ts
export const MS_PER_DAY = 86_400_000;
export const MS_PER_YEAR = 31_557_600_000;
export const SECONDS_PER_DAY = 86_400;
```
- Produces `samples/<x>.ts`: `export const sample: <Type>` (dan `sampleWeeks` untuk github). Tipe (`GH`, `Waka`, `Analytics`, `Eth`) tetap diekspor dari file data asal; sample mengimpor tipe via `import type`.

- [ ] **Step 1: `lib/constants.ts`** — isi seperti di Interfaces.

- [ ] **Step 2: Pindahkan sample** — potong persis blok `sampleWeeks` + `const sample` dari `github.ts`, `const sample` dari `wakatime.ts`, `analytics.ts`, `ethereum.ts` ke `lib/data/samples/<nama>.ts`. Awali dengan `import type { GH } from "../github";` (dst.) dan `export const sample`. `ethereum` sample butuh `import { profile } from "@/lib/profile"` dan konstanta `WEEKS` (ekspor `WEEKS` dari `ethereum.ts`; import dari sample memakai `import { WEEKS } from "../ethereum"` ... **hindari siklus**: pindahkan `WEEKS` ke `samples/ethereum.ts`? Tidak. Letakkan `export const HEATMAP_WEEKS = 52` di `lib/constants.ts` dan pakai di kedua file).
  Ganti `864e5` dengan `MS_PER_DAY` di sample analytics. Nilai tidak boleh berubah.

- [ ] **Step 3: Pecah `getGithub`** — ganti isi `try` dengan fungsi bernama (letakkan di atas `getGithub`):

```ts
type GhEvent = { type: string; repo: { name: string }; payload: { commits?: { message: string }[]; pull_request?: { number: number; title: string; html_url: string }; issue?: { number: number; title: string; html_url: string } } };

function parseEvents(evs: GhEvent[]): GH["events"] {
  const events: GH["events"] = [];
  for (const e of evs) {
    const url = `https://github.com/${e.repo.name}`;
    const { commits, pull_request: pr, issue } = e.payload;
    if (e.type === "PushEvent" && commits?.length) events.push({ type: "Commit", text: commits.at(-1)!.message.split("\n")[0], repo: e.repo.name, url });
    else if (e.type === "PullRequestEvent" && pr) events.push({ type: "PR", text: `#${pr.number} ${pr.title}`, repo: e.repo.name, url: pr.html_url });
    else if (e.type === "IssuesEvent" && issue) events.push({ type: "Issue", text: `#${issue.number} ${issue.title}`, repo: e.repo.name, url: issue.html_url });
  }
  return events;
}

function topLanguages(own: GhRepo[]): GH["languages"] {
  const count = new Map<string, number>();
  for (const r of own) if (r.language) count.set(r.language, (count.get(r.language) ?? 0) + 1);
  const total = [...count.values()].reduce((a, b) => a + b, 0) || 1;
  return [...count].sort((a, b) => b[1] - a[1]).slice(0, 4).map(([name, n]) => ({ name, percent: Math.round((n / total) * 100) }));
}

function topRepos(own: GhRepo[]): GH["topRepos"] {
  return [...own].sort((a, b) => b.stargazers_count - a.stargazers_count).slice(0, 3).map((r) => ({ name: r.name, stars: r.stargazers_count, language: r.language, url: r.html_url }));
}
```
Dan `parseContributions(cc: ContributionsCollection): Pick<GH, "weeks"|"total"|"streak"|"busiest"|"mix">` berisi persis logika streak/longest/busiest/mix/weeks dari blok `if (token)` (salin tubuhnya, ganti variabel lokal ke return object). Tipe `GhRepo`, `ContributionsCollection`, `GhUser` dideklarasikan di atas file (salin dari tipe inline generik `getJson<...>`). Konstanta level: `const LEVELS = ["NONE","FIRST_QUARTILE","SECOND_QUARTILE","THIRD_QUARTILE","FOURTH_QUARTILE"] as const;` `joinedYears` memakai `MS_PER_YEAR`. GraphQL query string jadi `const CONTRIBUTIONS_QUERY`.
`getGithub` menjadi: ambil `u, repos, evs`; `const contrib = token ? parseContributions(await fetchContributions(user, headers)) : null;` lalu rakit return. Semantik `sample: !realGraph` → `sample: !contrib`; bila tanpa token, `weeks = sampleWeeks()`, `total = 0`, `streak/busiest/mix` dari `sample` — pertahankan persis.

- [ ] **Step 4: Pecah `getWakatime`** — tipe `WakaStats`/`WakaSummary` di atas file; `mapDaily(sums)`, `mapAi(w)`, `formatLastActivity(modifiedAt)` sebagai fungsi murni (salin ekspresi aslinya). `getWakatime` tinggal fetch + rakit.

- [ ] **Step 5: `analytics.ts` & `ethereum.ts`** — ganti `864e5` → `MS_PER_DAY`, `86400` → `SECONDS_PER_DAY`, `86400000` → `MS_PER_DAY`, `WEEKS` → `HEATMAP_WEEKS`. Di `ethereum.ts` ekstrak `heatLevel(n)` (`n === 0 ? 0 : n === 1 ? 1 : n <= 3 ? 2 : n <= 6 ? 3 : 4`) dan `weiToEth(wei: string)` (`(Number(BigInt(wei) / BigInt(1e12)) / 1e6).toFixed(4)`) dipakai di `balance` dan `value`.

- [ ] **Step 6: Verifikasi**

Run: `npx tsc --noEmit && pnpm lint && /tmp/snap.sh /tmp/chk && /tmp/cmp.sh /tmp/chk`
Expected: tsc/lint bersih (satu warning `.remember/tmp/last-ndc.ts` sudah ada sebelumnya, abaikan), semua `OK`.

- [ ] **Step 7: Commit** — `git add lib && git commit -m "refactor(data): extract samples, constants and parsers"`

---

### Task 2: `lib/env.ts` dan error reporting

**Files:**
- Create: `lib/env.ts`, `lib/report.ts`
- Modify: `lib/data/{github,wakatime,analytics,ethereum,youtube,status}.ts`, `app/api/spotify/route.ts`

**Interfaces:**
- Produces:
```ts
// lib/env.ts
export function serverEnv() {
  const e = process.env;
  return {
    githubToken: e.GITHUB_TOKEN,
    wakatimeKey: e.WAKATIME_API_KEY,
    etherscanKey: e.ETHERSCAN_API_KEY,
    vercel: { token: e.VERCEL_TOKEN, projectId: e.VERCEL_PROJECT_ID, teamId: e.VERCEL_TEAM_ID },
    spotify: { id: e.SPOTIFY_CLIENT_ID, secret: e.SPOTIFY_CLIENT_SECRET, refresh: e.SPOTIFY_REFRESH_TOKEN },
  };
}
// lib/report.ts
import * as Sentry from "@sentry/nextjs";
export function reportError(scope: string, err: unknown): void {
  console.error(`[${scope}]`, err);
  Sentry.captureException(err, { tags: { scope } });
}
```
Dipanggil per request (bukan saat module load) agar perilaku sama dengan sekarang di dalam fungsi `"use cache"`.

- [ ] **Step 1: Buat kedua file** sesuai Interfaces.

- [ ] **Step 2: Ganti pembacaan env** di tiap file data: `const token = process.env.GITHUB_TOKEN` → `const { githubToken: token } = serverEnv();` dst. Analytics: `const { token, projectId, teamId } = serverEnv().vercel;`.

- [ ] **Step 3: Ganti `catch {` → `catch (err) { reportError("<nama>", err);`** di github, wakatime, analytics, ethereum, youtube, spotify (`fetchNowPlaying`). Di `status.ts` `probe`: tidak di-log (offline adalah hasil valid, bukan error). Pada `.catch(() => ...)` fallback sekunder (ens, summaries, avatar) biarkan senyap.

- [ ] **Step 4: Hilangkan non-null assertion**
  - `spotify/route.ts`: pindahkan `const { id, secret, refresh } = serverEnv().spotify` ke dalam `fetchNowPlaying`, teruskan ke `accessToken(creds)` sebagai parameter bertipe `{id:string;secret:string;refresh:string}` setelah guard `if (!id || !secret || !refresh)`. Hapus `refresh!`.
  - `github.ts`: setelah GraphQL, `const cc = g.data?.user?.contributionsCollection; if (!cc) throw new Error("GitHub GraphQL returned no user");` (tipe `g.data` jadi opsional). Hasil akhir tetap sample via catch.

- [ ] **Step 5: Verifikasi** — `npx tsc --noEmit && pnpm lint && /tmp/snap.sh /tmp/chk && /tmp/cmp.sh /tmp/chk`. Expected: semua `OK`. Cek `grep -rn "process.env" lib app/api` hanya muncul di `lib/env.ts`.

- [ ] **Step 6: Commit** — `git commit -am "refactor: central env access and error reporting" ` (tambah file baru dengan `git add lib app` dulu).

---

### Task 3: `components/`

**Files:**
- Create: `lib/contact.ts`
- Modify: `components/sections/contact.tsx`; lalu tinjau `creators.tsx`, `nav.tsx`, `dashboard/*.tsx`

**Interfaces:**
- Produces:
```ts
// lib/contact.ts
export type ContactErrors = Partial<Record<"name" | "email" | "subject" | "message" | "captcha", string>>;
export function validateContact(get: (k: string) => string, needsCaptcha: boolean): ContactErrors {
  const next: ContactErrors = {};
  if (get("name").length < 2) next.name = "Please enter your name.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(get("email"))) next.email = "Enter a valid email.";
  if (get("subject").length < 3) next.subject = "Please add a subject.";
  if (get("message").length < 10) next.message = "Message must be at least 10 characters.";
  if (needsCaptcha && !get("h-captcha-response")) next.captcha = "Please complete the verification.";
  return next;
}
export async function submitContact(fd: FormData, accessKey: string): Promise<void> {
  fd.append("access_key", accessKey);
  const res = await fetch("https://api.web3forms.com/submit", { method: "POST", body: fd });
  const json = (await res.json()) as { success: boolean; message?: string };
  if (!json.success) throw new Error(json.message);
}
```

- [ ] **Step 1: Buat `lib/contact.ts`**.

- [ ] **Step 2: Sederhanakan `onSubmit`** di `contact.tsx`:

```tsx
async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
  e.preventDefault();
  const form = e.currentTarget;
  const fd = new FormData(form);
  const next = validateContact((k) => String(fd.get(k) ?? "").trim(), !!siteKey);
  setErrors(next);
  if (Object.keys(next).length) return;
  if (!accessKey) { setState("error"); return; }
  setState("loading");
  try {
    await submitContact(fd, accessKey);
    form.reset();
    setState("success");
  } catch (err) {
    setFailMsg(err instanceof Error ? err.message : "");
    setState("error");
  }
}
```
Ubah `useState<Record<string,string>>` → `useState<ContactErrors>({})`. Ekstrak komponen lokal `TextField` untuk loop name/email/subject dan `FieldError` untuk `<p>` error (markup/className identik).

- [ ] **Step 3: Tinjau komponen lain** — buka tiap file di `components/` dan lakukan hanya: tipe props eksplisit bila implisit, pecah JSX >60 baris menjadi sub-komponen di file yang sama, ekstrak magic number jadi konstanta bernama. Tidak mengubah className/markup.

- [ ] **Step 4: Verifikasi** — `npx tsc --noEmit && pnpm lint && /tmp/snap.sh /tmp/chk && /tmp/cmp.sh /tmp/chk`. Expected: semua `OK`. Uji manual `/contact`: submit kosong menampilkan 4 pesan error yang sama.

- [ ] **Step 5: Commit** — `git add -A components lib && git commit -m "refactor(components): extract contact validation and sub-components"`

---

### Task 4: `app/`

**Files:**
- Modify: `app/layout.tsx`, `lib/seo.tsx`, `app/api/spotify/route.ts`, `app/api/youtube/route.ts` (tidak perlu), halaman `app/*/page.tsx` bila tidak konsisten

- [ ] **Step 1: Metadata** — pindahkan objek `metadata` site-wide dari `layout.tsx` ke `lib/seo.tsx` sebagai `export const siteMetadata: Metadata = {...}` (isi persis sama; `robots` tetap), lalu di layout `export const metadata = siteMetadata;`. Pindahkan juga konstanta lokasi `geo` ke objek bernama `geo` di `seo.tsx`.

- [ ] **Step 2: Spotify route** — konstanta `TOKEN_SKEW_MS = 10_000`, `NOW_PLAYING_TTL_MS = 10_000`; tipe `NowPlaying = { configured: boolean; playing: false } | { configured: true; playing: true; song: string; artist: string; album: string; art: string; id: string; progress: number; duration: number; at: number }`; `fetchNowPlaying(): Promise<NowPlaying>`. Cek konsumen `components/dashboard/spotify.tsx` memakai bentuk respons yang sama.

- [ ] **Step 3: Konsistensi** — pastikan semua `app/*/page.tsx` memakai pola `pageMeta(...)` + `JsonLd`; tidak ada perubahan keluaran.

- [ ] **Step 4: Verifikasi akhir** — `npx tsc --noEmit && pnpm lint && /tmp/snap.sh /tmp/chk && /tmp/cmp.sh /tmp/chk`. Expected: semua `OK`, termasuk `spotify.json`. Cek `<head>` (title, OG, JSON-LD) identik via diff yang sama.

- [ ] **Step 5: Commit** — `git add -A app lib && git commit -m "refactor(app): move site metadata to lib/seo and type spotify route"`

---

## Self-Review
- Spec coverage: lapisan 1–4 → Task 1–4; prosedur baseline/diff → Task 0 + step verifikasi tiap task; rollback = satu commit per task.
- Konsistensi nama: `serverEnv`, `reportError`, `validateContact`, `submitContact`, `ContactErrors`, `HEATMAP_WEEKS`, `MS_PER_DAY` dipakai sama di semua task.
- Catatan: `parseContributions` dan `getWakatime` helper dijelaskan dari kode yang ada (potong-pindah), bukan logika baru, sehingga tidak ada rumus yang perlu ditulis ulang.
