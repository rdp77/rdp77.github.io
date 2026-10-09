import { NavProgress } from "@/components/nav-progress";

export function ThemeShell({ children }: { children: React.ReactNode }) {
  return <div className="flex min-h-screen flex-col bg-bg text-fg"><NavProgress />{children}</div>;
}
