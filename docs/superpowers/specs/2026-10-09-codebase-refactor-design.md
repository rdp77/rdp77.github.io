# Codebase Refactor — Readability, Maintainability, Robustness

## Intent
Rapikan seluruh codebase (~2.2k LOC TS/TSX) mengikuti best practice tanpa mengubah fungsi atau tampilan apa pun.

## Disetujui
- Verifikasi: `tsc --noEmit`, `pnpm lint`, `pnpm build`, plus diff HTML render halaman sebelum/sesudah.
- Boleh tambah logging error di `catch` (Sentry + console.error) dan modul env terpusat. Output UI identik.
- Pendekatan: per-lapisan bertahap, satu commit per lapisan.

## Lapisan (urutan commit)
1. **`lib/data/*`**: sample dipindah ke `lib/data/samples/<nama>.ts`; tipe response API jadi tipe bernama; `getGithub`/`getWakatime` dipecah jadi fungsi kecil (`parseEvents`, `parseContributions`, `topLanguages`, dst.); konstanta bernama (`MS_PER_DAY`, `MS_PER_YEAR`, `TOP_N`). Tanpa abstraksi `createWidget()`.
2. **`lib/env.ts` + error handling**: satu modul baca env server dengan tipe; hilangkan `!` dan akses tanpa guard (`refresh!`, `g.data.user`); tiap `catch` log via `Sentry.captureException` + `console.error`, tetap fallback ke sample.
3. **`components/`**: `contact.tsx` → `validate()` murni di `lib/contact.ts` + `submitForm()` terpisah; sub-komponen untuk JSX panjang; pecah one-liner terlalu padat; tipe props eksplisit.
4. **`app/`**: pindah objek metadata besar `layout.tsx` ke `lib/seo`; route Spotify: `TOKEN_TTL`, `NOW_PLAYING_TTL`, tipe respons; konsistensi `pageMeta`.

## Prosedur per lapisan
1. Render baseline HTML (`/`, `/projects`, `/creators`, `/about`, `/contact`) dari build sebelum perubahan.
2. Ubah dalam langkah kecil.
3. `tsc --noEmit`, `pnpm lint`, `pnpm build` harus bersih.
4. Render ulang, diff HTML; abaikan nilai dinamis (jam, data live).
5. Commit.

## Risiko dan rollback
- Risiko utama: perubahan perilaku tak sengaja di pemecahan fungsi data. Mitigasi: diff HTML + sample fallback tetap identik.
- Rollback: tiap lapisan satu commit, `git revert` per lapisan.
- Next.js 16 punya breaking change: baca `node_modules/next/dist/docs/` sebelum menyentuh `"use cache"`, metadata, route handler.

## Di luar scope
Perubahan visual, fitur baru, upgrade dependency, test framework baru, abstraksi widget generik, restrukturisasi feature-folder.
