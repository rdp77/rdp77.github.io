# Terminal (TUI) Mode Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Floating terminal button opens a full-screen brand-styled TUI overlay with slash commands; `/gui` returns to the normal site.

**Architecture:** Client-only React context holds `open`. `TerminalFab` + `Terminal` overlay are mounted once in `app/layout.tsx`. Commands are a plain map name → block component reading `lib/profile.ts`. No routes, no GUI changes.

**Tech Stack:** Next.js 16 (read `node_modules/next/dist/docs/` for client-component rules before writing), React 19.3, Tailwind v4 tokens in `app/globals.css`, `lucide-react` (`TerminalSquare` icon).

**Spec:** `docs/superpowers/specs/2026-10-10-terminal-mode-design.md`

## Global Constraints

- Tokens only: `bg-bg`, `text-fg`, `border-line`, `text-muted`, `text-faint`, `bg-tint`, `bg-wisteria`, `text-violet`, `text-ok-fg`, `text-bad-fg`; font `font-mono`. Radius is 2px (existing).
- Overlay `fixed inset-0`, z-index above Nav and Cursor.
- No new dependencies. No test runner exists; verification = `pnpm tsc --noEmit`, `pnpm lint`, `pnpm build`, plus manual browser check.
- Data read directly from `lib/profile.ts` exports: `profile`, `story`, `projects`, `skills`, `experience`, `education`. Never duplicate content.

## Review Focus

- Unknown command (`/foo`, plain text with no slash): prints error block with `/help` hint, does not crash.
- Empty Enter: no-op, no empty history entry.
- Esc / `/gui` closes and returns focus to the FAB; body scroll locked while open and restored on close.
- Slash menu with zero matches: shows nothing, Enter runs the raw text (→ unknown error).
- Mobile width (~400px): overlay scrolls vertically, no horizontal page overflow, FAB not hidden behind overlay.
- Many commands run in a row: history auto-scrolls to newest.

---

### Task 1: Commands + blocks

**Files:**
- Create: `components/terminal/blocks.tsx`
- Create: `components/terminal/commands.ts`

**Interfaces:**
- Produces: `commands.ts` exports `type Cmd = { name: string; hint: string; Block: () => React.ReactElement }`, `const commands: Cmd[]`, `function findCommand(input: string): Cmd | undefined` (matches `input.trim()` against `/${name}`, case-insensitive). `/gui` is handled by the Terminal (Task 2), but is listed in `commands` with a `Block` that renders nothing so it shows in `/help` and the slash menu.

- [ ] **Step 1: Create `blocks.tsx`**

```tsx
import { profile, story, projects, skills, experience, education } from "@/lib/profile";

const Row = ({ k, children }: { k: string; children: React.ReactNode }) => (
  <div className="flex gap-3"><span className="w-24 shrink-0 text-faint">{k}</span><span className="min-w-0 break-words">{children}</span></div>
);
const Title = ({ children }: { children: React.ReactNode }) => <div className="mb-2 text-violet">● {children}</div>;

export const About = () => (
  <div><Title>about</Title>
    <Row k="name">{profile.name} ({profile.handle})</Row>
    <Row k="role">{profile.role}</Row>
    <Row k="location">{profile.location}</Row>
    <div className="mt-3 space-y-2 text-muted">{story.map((p, i) => <p key={i}>{p}</p>)}</div>
  </div>
);

export const Projects = () => (
  <div><Title>projects ({projects.length})</Title>
    <ul className="space-y-2">{projects.map((p) => (
      <li key={p.name}><span className="text-fg">{p.name}</span> <span className="text-faint">[{p.category.join(", ")}]</span>
        <div className="text-muted">{p.description}</div></li>
    ))}</ul>
  </div>
);

export const Experience = () => (
  <div><Title>experience</Title>
    <ul className="space-y-2">{experience.map((e) => (
      <li key={e.company + e.duration}><span className="text-fg">{e.position}</span> <span className="text-faint">@ {e.company} · {e.duration}</span>
        <div className="text-muted">{e.description}</div></li>
    ))}</ul>
    <div className="mb-2 mt-4 text-violet">● education</div>
    <ul className="space-y-1">{education.map((e) => (
      <li key={e.school}><span className="text-fg">{e.school}</span> <span className="text-faint">· {e.degree} · {e.duration}</span></li>
    ))}</ul>
  </div>
);

export const Skills = () => (
  <div><Title>skills</Title>
    {Object.entries(skills).map(([group, items]) => (
      <Row key={group} k={group.toLowerCase()}>{items.map((s) => s.name).join(", ")}</Row>
    ))}
  </div>
);

export const Creators = () => (
  <div><Title>creators</Title>
    {profile.socials.filter((s) => ["YouTube", "TikTok", "Instagram"].includes(s.label)).map((s) => (
      <Row key={s.label} k={s.label.toLowerCase()}><a className="underline" href={s.href} target="_blank" rel="noreferrer">{s.href}</a></Row>
    ))}
  </div>
);

export const Contact = () => (
  <div><Title>contact</Title>
    <Row k="email">{profile.email}</Row>
    {profile.socials.map((s) => (
      <Row key={s.label} k={s.label.toLowerCase()}><a className="underline" href={s.href} target="_blank" rel="noreferrer">{s.href}</a></Row>
    ))}
  </div>
);
```

- [ ] **Step 2: Create `commands.ts`** (a `.ts` file cannot hold JSX, so use `createElement`-free references: `Block` is a component reference, not a call)

```ts
import type { ComponentType } from "react";
import { About, Projects, Experience, Skills, Creators, Contact } from "./blocks";

export type Cmd = { name: string; hint: string; Block: ComponentType };

const Nothing = () => null;

export const commands: Cmd[] = [
  { name: "help", hint: "list commands", Block: Nothing }, // rendered by Terminal (needs `commands`)
  { name: "about", hint: "who I am", Block: About },
  { name: "projects", hint: "things I built", Block: Projects },
  { name: "experience", hint: "work and education", Block: Experience },
  { name: "skills", hint: "tools and stacks", Block: Skills },
  { name: "creators", hint: "content channels", Block: Creators },
  { name: "contact", hint: "email and socials", Block: Contact },
  { name: "gui", hint: "back to the website", Block: Nothing },
];

export const findCommand = (input: string) =>
  commands.find((c) => `/${c.name}` === input.trim().toLowerCase());
```

- [ ] **Step 3: Typecheck**

Run: `pnpm tsc --noEmit` — Expected: no errors.

- [ ] **Step 4: Commit**

```bash
git add components/terminal && git commit -m "feat(terminal): add command registry and content blocks" -m "Co-Authored-By: Claude Code <noreply@anthropic.com>"
```

### Task 2: Provider, FAB, overlay, slash menu

**Files:**
- Create: `components/terminal/terminal.tsx` (exports `TerminalProvider`, `TerminalFab`, `Terminal`; `"use client"`)

**Interfaces:**
- Consumes: `commands`, `findCommand`, `Cmd` from Task 1.
- Produces: `<TerminalProvider>{children}</TerminalProvider>`, `<TerminalFab />`, `<Terminal />`.

- [ ] **Step 1: Create `terminal.tsx`**

```tsx
"use client";
import { createContext, useContext, useEffect, useRef, useState, type ReactNode } from "react";
import { TerminalSquare } from "lucide-react";
import { profile } from "@/lib/profile";
import { commands, findCommand } from "./commands";

type Ctx = { open: boolean; setOpen: (v: boolean) => void };
const TerminalCtx = createContext<Ctx>({ open: false, setOpen: () => {} });

export function TerminalProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  return <TerminalCtx.Provider value={{ open, setOpen }}>{children}</TerminalCtx.Provider>;
}

export function TerminalFab() {
  const { open, setOpen } = useContext(TerminalCtx);
  const ref = useRef<HTMLButtonElement>(null);
  const was = useRef(false);
  useEffect(() => {
    if (was.current && !open) ref.current?.focus();
    was.current = open;
  }, [open]);
  return (
    <button ref={ref} type="button" onClick={() => setOpen(true)} aria-label="Open terminal mode"
      className="fixed bottom-5 right-5 z-40 grid size-12 place-items-center rounded-full border border-line bg-inverse-bg text-inverse-fg shadow-lg transition hover:scale-105 hover:bg-violet hover:text-fg">
      <TerminalSquare className="size-5" aria-hidden />
    </button>
  );
}

type Entry = { id: number; input: string; node: ReactNode };

export function Terminal() {
  const { open, setOpen } = useContext(TerminalCtx);
  const [history, setHistory] = useState<Entry[]>([]);
  const [value, setValue] = useState("");
  const [sel, setSel] = useState(0);
  const input = useRef<HTMLInputElement>(null);
  const end = useRef<HTMLDivElement>(null);
  const id = useRef(0);

  const matches = value.startsWith("/") ? commands.filter((c) => `/${c.name}`.startsWith(value.trim().toLowerCase())) : [];

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    input.current?.focus();
    return () => { document.body.style.overflow = prev; };
  }, [open]);

  useEffect(() => { end.current?.scrollIntoView({ block: "end" }); }, [history]);
  useEffect(() => { setSel(0); }, [value]);

  if (!open) return null;

  const run = (raw: string) => {
    const text = raw.trim();
    if (!text) return;
    setValue("");
    const cmd = findCommand(text);
    if (cmd?.name === "gui") { setOpen(false); return; }
    let node: ReactNode;
    if (cmd?.name === "help") {
      node = <ul>{commands.map((c) => <li key={c.name}><span className="text-violet">/{c.name}</span> <span className="text-faint">— {c.hint}</span></li>)}</ul>;
    } else if (cmd) {
      node = <cmd.Block />;
    } else {
      node = <span className="text-bad-fg">command not found: {text}. Type /help.</span>;
    }
    setHistory((h) => [...h, { id: ++id.current, input: text, node }]);
  };

  const onKey = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") { setOpen(false); return; }
    if (matches.length) {
      if (e.key === "ArrowDown") { e.preventDefault(); setSel((s) => (s + 1) % matches.length); return; }
      if (e.key === "ArrowUp") { e.preventDefault(); setSel((s) => (s - 1 + matches.length) % matches.length); return; }
      if (e.key === "Tab") { e.preventDefault(); setValue(`/${matches[sel].name}`); return; }
    }
    if (e.key === "Enter") { e.preventDefault(); run(matches.length ? `/${matches[sel].name}` : value); }
  };

  return (
    <div role="dialog" aria-modal="true" aria-label="Terminal mode" className="fixed inset-0 z-[60] flex flex-col bg-bg font-mono text-sm text-fg">
      <header className="flex items-center justify-between border-b border-line px-4 py-2 text-faint">
        <span><span className="text-violet">●</span> {profile.handle} — terminal</span>
        <span>/help · /gui or Esc to exit</span>
      </header>
      <div className="flex-1 overflow-y-auto px-4 py-4">
        <div className="mx-auto max-w-3xl space-y-4">
          <p className="text-muted">Welcome. Type <span className="text-violet">/</span> to see commands.</p>
          {history.map((h) => (
            <section key={h.id}>
              <div className="mb-2"><span className="bg-wisteria px-1.5 text-violet">❯</span> {h.input}</div>
              <div className="pl-1">{h.node}</div>
            </section>
          ))}
          <div ref={end} />
        </div>
      </div>
      <div className="border-t border-line px-4 py-3">
        <div className="mx-auto max-w-3xl">
          {matches.length > 0 && (
            <ul role="listbox" className="mb-2 border border-line bg-tint">
              {matches.map((c, i) => (
                <li key={c.name} role="option" aria-selected={i === sel}
                  onMouseDown={(e) => { e.preventDefault(); run(`/${c.name}`); }}
                  className={`flex gap-3 px-3 py-1 ${i === sel ? "bg-wisteria text-fg" : "text-muted"}`}>
                  <span className="text-violet">/{c.name}</span><span className="text-faint">{c.hint}</span>
                </li>
              ))}
            </ul>
          )}
          <label className="flex items-center gap-2">
            <span className="text-violet" aria-hidden>❯</span>
            <input ref={input} value={value} onChange={(e) => setValue(e.target.value)} onKeyDown={onKey}
              aria-label="Terminal command" autoComplete="off" spellCheck={false}
              className="flex-1 bg-transparent outline-none placeholder:text-faint" placeholder="type / for commands" />
          </label>
        </div>
      </div>
    </div>
  );
}
```

- [ ] **Step 2: Typecheck + lint**

Run: `pnpm tsc --noEmit && pnpm lint` — Expected: clean (fix the `useEffect(() => setSel(0), [value])` lint warning by wrapping in braces if flagged).

- [ ] **Step 3: Commit**

```bash
git add components/terminal && git commit -m "feat(terminal): add provider, floating button, overlay and slash menu" -m "Co-Authored-By: Claude Code <noreply@anthropic.com>"
```

### Task 3: Wire into layout and verify

**Files:**
- Modify: `app/layout.tsx` (body: wrap content in `TerminalProvider`, add `<TerminalFab />` and `<Terminal />` after `<Cursor />`)

**Interfaces:**
- Consumes: `TerminalProvider`, `TerminalFab`, `Terminal` from Task 2.

- [ ] **Step 1: Edit `app/layout.tsx`**

Add `import { TerminalProvider, TerminalFab, Terminal } from "@/components/terminal/terminal";`, then wrap the body children:

```tsx
<body>
  <TerminalProvider>
    {/* existing JsonLd, skip link, <Motion>…</Motion>, <Cursor />, <Analytics /> unchanged */}
    <TerminalFab />
    <Terminal />
  </TerminalProvider>
</body>
```

- [ ] **Step 2: Build**

Run: `pnpm tsc --noEmit && pnpm lint && pnpm build` — Expected: all pass; static pages still prerender (provider is a client component, children stay server-rendered).

- [ ] **Step 3: Manual browser check** (`pnpm dev`)

1. FAB visible bottom-right on `/`, `/projects`; click opens overlay, input focused, page behind does not scroll.
2. Type `/` → menu lists 8 commands; `/pro` filters to `/projects`; ↑/↓/Tab/Enter work.
3. Run `/about`, `/projects`, `/experience`, `/skills`, `/creators`, `/contact`, `/help`; output appends and scrolls to newest.
4. `/foo` → red "command not found"; empty Enter does nothing.
5. `/gui` and Esc close; focus returns to FAB; GUI page unchanged.
6. 400px width: no horizontal scroll; check the custom cursor (`components/cursor.tsx`) is not hiding the native cursor over the overlay — if it is, hide it while open.

- [ ] **Step 4: Commit**

```bash
git add app/layout.tsx && git commit -m "feat(terminal): mount terminal mode in root layout" -m "Co-Authored-By: Claude Code <noreply@anthropic.com>"
```
