# Terminal (TUI) Mode — Design

## Goal
Visitors can switch from the normal GUI to a terminal-style mode via a floating button (render.com-style, terminal icon). `/gui` returns to the GUI. GUI pages, routes and SEO are unchanged.

## Scope
- Style: custom brand (violet, existing mono font), structured like brainless.swerdlow.dev Claude components (header, `❯` message, tool-call block, slash-menu, prompt).
- Page content is re-rendered as text blocks from `lib/profile.ts`; no GUI components embedded.
- Client-side state only; no new routes.

## Components (`components/terminal/`)
- `terminal-provider.tsx`: context holding `open`; `TerminalFab` button (fixed bottom-right, round, terminal icon, `aria-label`) mounted in `app/layout.tsx`.
- `terminal.tsx`: `fixed inset-0` overlay, history list, prompt input. Focus moves to input on open; Esc or `/gui` closes; focus returns to the FAB.
- `slash-menu.tsx`: filterable palette shown when input starts with `/`; arrows navigate, Enter/Tab selects.
- `commands.ts`: command name -> block renderer map.
- `blocks.tsx`: one block per command, reading `profile`, `story`, `projects`, `skills`, `experience`, `education`, `achievements`.

## Commands
`/help`, `/about`, `/projects`, `/experience`, `/skills`, `/creators`, `/contact`, `/gui`. Unknown command prints an error block with a `/help` hint.

## Out of scope
Persisting history, new routes, changing GUI, extra commands.

## Verification
`tsc`, lint, build; manual browser check: open, type `/`, run each command, `/gui`, Esc, mobile width.
