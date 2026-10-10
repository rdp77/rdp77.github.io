import { cn } from "@/lib/utils";
import { getIcon } from "@/lib/icons";

export function Container({
  children,
  className,
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <div id={id} className={cn("mx-auto w-full max-w-[1200px] px-6", className)}>
      {children}
    </div>
  );
}

export function Section({
  id,
  title,
  children,
  h1,
}: {
  id: string;
  eyebrow?: string;
  title: string;
  children: React.ReactNode;
  h1?: boolean;
}) {
  const H = h1 ? "h1" : "h2";
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="py-20">
      <Container>
        <H id={`${id}-title`} className="h2 text-4xl md:text-6xl">
          {title}
        </H>
        <div className="mt-10">{children}</div>
      </Container>
    </section>
  );
}

export function Card({
  title,
  sample,
  action,
  children,
  className,
}: {
  title: string;
  sample?: boolean;
  action?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      aria-label={title}
      className={cn("min-w-0 border border-line bg-bg p-4 sm:p-6", className)}
    >
      <header className="mb-5 flex items-center justify-between gap-2">
        <h3 className="text-sm font-medium">{title}</h3>
        {action}
        {sample && (
          <span
            className="rounded-full bg-line px-2 py-0.5 font-mono text-xs text-fg"
            title="API key not configured or request failed"
          >
            sample data
          </span>
        )}
      </header>
      {children}
    </section>
  );
}

export function Stat({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="text-xs text-faint">{label}</p>
      <p className="mt-1 text-xl font-light tracking-tight sm:text-2xl">{children}</p>
    </div>
  );
}

export function EmptyState({ children }: { children: React.ReactNode }) {
  return <p className="border border-dashed border-line p-6 text-sm text-faint">{children}</p>;
}

export function Badge({
  tone = "neutral",
  children,
}: {
  tone?: "ok" | "warn" | "bad" | "neutral";
  children: React.ReactNode;
}) {
  const t = {
    ok: "bg-ok-bg text-ok-fg",
    warn: "bg-warn-bg text-warn-fg",
    bad: "bg-bad-bg text-bad-fg",
    neutral: "bg-line text-fg",
  }[tone];
  return (
    <span
      className={cn("inline-flex items-center rounded-full px-2.5 py-0.5 font-mono text-xs", t)}
    >
      {children}
    </span>
  );
}

export function TechIcon({
  icon,
  label,
  size = 18,
}: {
  icon: string;
  label?: string;
  size?: number;
}) {
  const i = getIcon(icon);
  if (!i) return null;
  return (
    <svg
      role="img"
      aria-label={label ?? i.title}
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="currentColor"
    >
      <title>{label ?? i.title}</title>
      <path d={i.path} />
    </svg>
  );
}

export const btnPrimary =
  "inline-flex items-center gap-2 rounded-sm bg-inverse-bg px-5 py-2.5 text-base font-medium text-inverse-fg transition-opacity hover:opacity-85";
