"use client";
import { createContext, useContext, useEffect, useRef, useState, type ReactNode } from "react";
import { Terminal as TerminalIcon } from "lucide-react";
import Image from "next/image";
import { Geist_Mono } from "next/font/google";
import { profile } from "@/lib/profile";
import { commands, findCommand } from "./commands";
import { C, Tool } from "./blocks";

const geist = Geist_Mono({ subsets: ["latin"], weight: ["400", "500", "600"] });

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
    <button
      ref={ref}
      type="button"
      onClick={() => setOpen(true)}
      aria-label="Open terminal mode"
      className="fixed right-5 bottom-5 z-40 grid size-[45px] place-items-center border border-fg bg-bg text-fg transition-colors md:right-[30px] md:bottom-[30px]"
    >
      <TerminalIcon size={30} strokeWidth={1.5} aria-hidden />
    </button>
  );
}

type Entry = { id: number; input: string; node: ReactNode | null };

const VERBS = ["Thinking", "Pondering", "Cooking", "Mulling", "Noodling"];
const THINK_MS = 1400;

// Mirrors brainless claude-thinking: pulsing glyph, shimmering verb, elapsed + interrupt hint.
function Thinking() {
  const [t, setT] = useState(0);
  useEffect(() => {
    const i = setInterval(() => setT((n) => n + 1), 200);
    return () => clearInterval(i);
  }, []);
  return (
    <div role="status" aria-live="polite" className="flex items-center gap-2">
      <style>{`.cw-verb{background-image:linear-gradient(100deg,#cd694a 43%,#e79475 50%,#cd694a 57%);background-size:200% 100%;-webkit-background-clip:text;background-clip:text;color:transparent;-webkit-text-fill-color:transparent;animation:cw-shine 2.8s linear infinite}@keyframes cw-shine{from{background-position:100% 0}to{background-position:-100% 0}}@media (prefers-reduced-motion:reduce){.cw-verb{animation:none;background-image:none;color:#cd694a;-webkit-text-fill-color:#cd694a}}`}</style>
      <span aria-hidden className="inline-block w-[1ch]" style={{ color: C.accent }}>
        {["·", "✢", "✳", "✶", "✻", "✽"][t % 6]}
      </span>
      <span className="cw-verb">{VERBS[Math.floor(t / 10) % VERBS.length]}…</span>
      <span style={{ color: "#7d7d7d" }}>({Math.floor(t / 5)}s · esc to interrupt)</span>
    </div>
  );
}

const Mascot = () => (
  <Image
    aria-hidden
    alt=""
    src="/logo-light.svg"
    width={64}
    height={64}
    className="my-1.5 size-16"
  />
);

const Header = () => (
  <fieldset
    className="min-w-0 rounded-[6px] border px-3 pt-1 pb-3.5 sm:px-4"
    style={{ borderColor: C.accent }}
  >
    <legend className="max-w-full truncate px-2" style={{ color: C.accent }}>
      {profile.handle} terminal <span style={{ color: C.dim }}>v3</span>
    </legend>
    <div className="grid min-w-0 gap-4 sm:grid-cols-[minmax(0,1fr)_1px_minmax(0,1.1fr)]">
      <div className="flex min-w-0 flex-col items-center gap-2 py-1 text-center">
        <div className="font-semibold">Welcome, visitor!</div>
        <Mascot />
        <div className="min-w-0 space-y-0.5 break-words" style={{ color: C.dim }}>
          <div>{profile.name}</div>
          <div>{profile.role}</div>
          <div>~/{profile.handle}.github.io</div>
        </div>
      </div>
      <div aria-hidden className="hidden sm:block" style={{ background: `${C.accent}55` }} />
      <div className="min-w-0 space-y-1">
        <div className="font-semibold" style={{ color: C.accent }}>
          Tips for getting started
        </div>
        <div className="truncate">Type / to browse commands</div>
        <div className="truncate">Try /about or /projects</div>
        <div className="my-1.5 h-px" style={{ background: C.accent }} />
        <div className="font-semibold" style={{ color: C.accent }}>
          Leaving?
        </div>
        <div className="truncate">/gui or Esc returns to the website</div>
      </div>
    </div>
  </fieldset>
);

export function Terminal() {
  const { open, setOpen } = useContext(TerminalCtx);
  const [history, setHistory] = useState<Entry[]>([]);
  const [value, setValue] = useState("");
  const [sel, setSel] = useState(0);
  const input = useRef<HTMLInputElement>(null);
  const end = useRef<HTMLDivElement>(null);
  const id = useRef(0);
  const pending = useRef<{ id: number; timer: ReturnType<typeof setTimeout> } | null>(null);

  const matches = value.startsWith("/")
    ? commands.filter((c) => `/${c.name}`.startsWith(value.trim().toLowerCase()))
    : [];

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    input.current?.focus();
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  useEffect(() => {
    end.current?.scrollIntoView({ block: "end" });
  }, [history]);

  if (!open) return null;

  const finish = (entryId: number, node: ReactNode) => {
    pending.current = null;
    setHistory((h) => h.map((x) => (x.id === entryId ? { ...x, node } : x)));
  };
  const interrupt = () => {
    if (!pending.current) return false;
    const { id: eid, timer } = pending.current;
    clearTimeout(timer);
    finish(eid, <Tool bad name="Run" arg="interrupted" note="interrupted by user" />);
    return true;
  };
  const close = () => {
    if (pending.current) {
      clearTimeout(pending.current.timer);
      pending.current = null;
    }
    setValue("");
    setSel(0);
    setOpen(false);
  };

  const run = (raw: string) => {
    const text = raw.trim();
    if (!text || pending.current) return;
    setValue("");
    setSel(0);
    const cmd = findCommand(text);
    if (cmd?.name === "gui") {
      close();
      return;
    }
    if (cmd?.name === "clear") {
      setHistory([]);
      return;
    }
    let node: ReactNode;
    if (cmd?.name === "help") {
      node = (
        <Tool name="Help" arg="commands" note={`${commands.length} available`}>
          {commands.map((c) => (
            <div key={c.name} className="flex">
              <span className="inline-block w-[14ch] shrink-0" style={{ color: C.arg }}>
                /{c.name}
              </span>
              <span style={{ color: C.dim }}>{c.hint}</span>
            </div>
          ))}
        </Tool>
      );
    } else if (cmd) {
      node = <cmd.Block />;
    } else {
      node = <Tool bad name="Run" arg={text} note="command not found · type /help" />;
    }
    const eid = ++id.current;
    setHistory((h) => [...h, { id: eid, input: text, node: cmd ? null : node }]);
    if (cmd) pending.current = { id: eid, timer: setTimeout(() => finish(eid, node), THINK_MS) };
  };

  const onKey = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      if (!interrupt()) close();
      return;
    }
    if (matches.length) {
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setSel((s) => (s + 1) % matches.length);
        return;
      }
      if (e.key === "ArrowUp") {
        e.preventDefault();
        setSel((s) => (s - 1 + matches.length) % matches.length);
        return;
      }
      if (e.key === "Tab") {
        e.preventDefault();
        setValue(`/${matches[sel].name}`);
        return;
      }
    }
    if (e.key === "Enter") {
      e.preventDefault();
      run(matches.length ? `/${matches[sel].name}` : value);
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Terminal mode"
      className={`${geist.className} fixed inset-0 z-[60] flex flex-col bg-[#1a1a1a] text-[13px] leading-[1.6] text-[#c0caf5]`}
    >
      <div className="flex-1 overflow-y-auto px-4 py-5">
        <div className="mx-auto max-w-4xl space-y-3">
          <Header />
          {history.map((h) => (
            <div key={h.id} className="space-y-3 pt-1">
              <div className="flex w-full min-w-0 items-baseline bg-[#3a3a3a]">
                <span aria-hidden style={{ color: "#4e4e4e" }}>
                  ❯
                </span>
                <span aria-hidden className="inline-block w-[1ch]" />
                <span className="min-w-0 flex-1 break-words text-white">{h.input}</span>
              </div>
              {h.node ?? <Thinking />}
            </div>
          ))}
          <div ref={end} />
        </div>
      </div>
      <div className="px-4 pb-3">
        <div className="mx-auto max-w-4xl">
          {matches.length > 0 && (
            <ul role="listbox" aria-label="Slash commands" className="mb-2 space-y-0.5">
              {matches.map((c, i) => (
                <li
                  key={c.name}
                  role="option"
                  aria-selected={i === sel}
                  onMouseDown={(e) => {
                    e.preventDefault();
                    run(`/${c.name}`);
                  }}
                  className="cursor-pointer truncate px-1 py-0.5"
                  style={{ color: i === sel ? "#afd7ff" : C.dim }}
                >
                  <span className="inline-block w-[16ch]">/{c.name}</span>
                  {c.hint}
                </li>
              ))}
            </ul>
          )}
          <div className="flex justify-end px-1 pb-1 text-[12px]" style={{ color: C.dim }}>
            <span className="min-w-0 text-right break-words">
              <span aria-hidden>◉</span> design inspired by Claude Code
            </span>
          </div>
          <div
            className="flex min-w-0 items-center border-y py-0.5"
            style={{ borderColor: "#808080" }}
          >
            <span aria-hidden>❯</span>
            <input
              ref={input}
              value={value}
              onChange={(e) => {
                setValue(e.target.value);
                setSel(0);
              }}
              onKeyDown={onKey}
              aria-label="Prompt"
              autoComplete="off"
              spellCheck={false}
              className="min-w-0 flex-1 bg-transparent py-0.5 pl-[1ch] outline-none"
              style={
                {
                  caretColor: C.fg,
                  caretShape: "block",
                  outline: "none",
                  boxShadow: "none",
                } as React.CSSProperties
              }
            />
          </div>
          <div className="mt-1.5 px-1 text-[12px] break-words">
            <span style={{ color: "#ffd700" }}>
              <span aria-hidden>⏵⏵ </span>terminal mode on
            </span>
            <span style={{ color: C.dim }}> (/gui or esc to exit)</span>
          </div>
        </div>
      </div>
    </div>
  );
}
