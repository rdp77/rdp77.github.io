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
      <header className="flex items-center justify-between gap-3 border-b border-line px-4 py-2 text-faint">
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
            <input ref={input} value={value} onChange={(e) => { setValue(e.target.value); setSel(0); }} onKeyDown={onKey}
              aria-label="Terminal command" autoComplete="off" spellCheck={false}
              className="flex-1 bg-transparent outline-none placeholder:text-faint" placeholder="type / for commands" />
          </label>
        </div>
      </div>
    </div>
  );
}
