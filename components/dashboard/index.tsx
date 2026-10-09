import { Suspense } from "react";
import { WakatimeCard } from "./wakatime";
import { EthereumCard } from "./ethereum";
import { AnalyticsCard } from "./analytics";
import { GithubCard } from "./github";
import { StatusCard } from "./status";
import { SpotifyCard } from "./spotify";

// Add a widget: write lib/data/<x>.ts + components/dashboard/<x>.tsx, then list it here.
const widgets = [WakatimeCard, SpotifyCard, EthereumCard, GithubCard, AnalyticsCard, StatusCard];

function Skeleton() {
  return <div role="status" aria-label="Loading widget" className="h-64 animate-pulse border border-line bg-tint md:col-span-2" />;
}

export function Dashboard() {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-5">
      {widgets.map((W, i) => (
        <Suspense key={i} fallback={<Skeleton />}><W /></Suspense>
      ))}
    </div>
  );
}
