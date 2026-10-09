import { cacheLife } from "next/cache";
import { getJson, type Widget } from "@/lib/utils";
import { serverEnv } from "@/lib/env";
import { reportError } from "@/lib/report";
import { profile } from "@/lib/profile";
import { HEATMAP_WEEKS, MS_PER_DAY, SECONDS_PER_DAY } from "@/lib/constants";
import { sample } from "./samples/ethereum";

export type Eth = {
  address: string; ens: string | null; balance: string; txCount: number; network: string;
  txs: { hash: string; direction: "in" | "out"; value: string; method: string; fee: string; when: string }[];
  txCountLabel: string; firstSeen: string; failed: number; heatmap: { l: number; label: string }[][]; heatTotal: number;
};

const heatLevel = (n: number) => (n === 0 ? 0 : n === 1 ? 1 : n <= 3 ? 2 : n <= 6 ? 3 : 4);
const weiToEth = (wei: string) => (Number(BigInt(wei) / BigInt(1e12)) / 1e6).toFixed(4);

// weeks × 7 days of tx counts, oldest first, ending today (UTC).
function buildHeatmap(stamps: number[]) {
  const day = SECONDS_PER_DAY;
  const today = Math.floor(Date.now() / 1000 / day);
  const start = today - (HEATMAP_WEEKS * 7 - 1) - ((today + 4) % 7); // align to Sunday
  const counts = new Map<number, number>();
  for (const t of stamps) { const d = Math.floor(t / day); if (d >= start && d <= today) counts.set(d, (counts.get(d) ?? 0) + 1); }
  const grid: { l: number; label: string }[][] = [];
  for (let w = 0; w < HEATMAP_WEEKS + 1; w++) grid.push(Array.from({ length: 7 }, (_, i) => { const d = start + w * 7 + i; if (d > today) return { l: -1, label: "" }; const n = counts.get(d) ?? 0; return { l: heatLevel(n), label: `${n} tx${n === 1 ? "" : "s"} · ${new Date(d * MS_PER_DAY).toISOString().slice(0, 10)}` }; }));
  return { grid, total: [...counts.values()].reduce((a, b) => a + b, 0) };
}

type Scan<T> = { status: string; result: T };

export async function getEthereum(): Promise<Widget<Eth>> {
  "use cache";
  cacheLife("minutes");
  const { etherscanKey: key } = serverEnv();
  const addr = profile.wallet;
  if (!key || /^0x0+$/.test(addr)) return { data: sample, sample: true };
  const q = (a: string) => `https://api.etherscan.io/v2/api?chainid=1&module=account&address=${addr}&apikey=${key}&${a}`;
  try {
    const [bal, txs, ens] = await Promise.all([
      getJson<Scan<string>>(q("action=balance&tag=latest")),
      getJson<Scan<{ hash: string; from: string; value: string; timeStamp: string; isError?: string; functionName?: string; gasUsed?: string; gasPrice?: string; to?: string }[]>>(q("action=txlist&page=1&offset=1000&sort=desc")),
      getJson<{ name?: string }>(`https://api.ensideas.com/ens/resolve/${addr}`).catch(() => ({} as { name?: string })),
    ]);
    const list = Array.isArray(txs.result) ? txs.result : [];
    const heat = buildHeatmap(list.map((t) => Number(t.timeStamp)));
    const oldest = list[list.length - 1];
    return {
      sample: false,
      data: {
        address: addr, ens: ens.name ?? null, balance: weiToEth(bal.result),
        txCount: list.length, txCountLabel: list.length >= 1000 ? "1,000+" : String(list.length),
        firstSeen: oldest ? new Date(Number(oldest.timeStamp) * 1000).toISOString().slice(0, 10) : "—",
        failed: list.filter((t) => t.isError === "1").length, heatmap: heat.grid, heatTotal: heat.total, network: "Ethereum Mainnet",
        txs: list.slice(0, 5).map((t) => ({
          hash: t.hash, direction: t.from.toLowerCase() === addr.toLowerCase() ? "out" : "in",
          method: t.functionName ? t.functionName.split("(")[0] : t.value !== "0" ? "Transfer" : "Contract call",
          fee: ((Number(t.gasUsed ?? 0) * Number(t.gasPrice ?? 0)) / 1e18).toFixed(5),
          value: `${weiToEth(t.value)} ETH`, when: new Date(Number(t.timeStamp) * 1000).toISOString().slice(0, 10),
        })),
      },
    };
  } catch (err) {
    reportError("ethereum", err);
    return { data: sample, sample: true };
  }
}
