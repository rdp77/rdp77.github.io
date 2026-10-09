import { cacheLife } from "next/cache";
import { getJson, type Widget } from "@/lib/utils";
import { profile } from "@/lib/profile";

export type Eth = {
  address: string; ens: string | null; balance: string; txCount: number; network: string;
  txs: { hash: string; direction: "in" | "out"; value: string; method: string; fee: string; when: string }[];
  txCountLabel: string; firstSeen: string; failed: number; heatmap: number[][]; heatTotal: number;
};

const WEEKS = 26;
// weeks × 7 days of tx counts, oldest first, ending today (UTC).
function buildHeatmap(stamps: number[]) {
  const day = 86400;
  const today = Math.floor(Date.now() / 1000 / day);
  const start = today - (WEEKS * 7 - 1) - ((today + 4) % 7); // align to Sunday
  const counts = new Map<number, number>();
  for (const t of stamps) { const d = Math.floor(t / day); if (d >= start && d <= today) counts.set(d, (counts.get(d) ?? 0) + 1); }
  const grid: number[][] = [];
  for (let w = 0; w < WEEKS + 1; w++) grid.push(Array.from({ length: 7 }, (_, i) => { const d = start + w * 7 + i; return d > today ? -1 : counts.get(d) ?? 0; }));
  return { grid, total: [...counts.values()].reduce((a, b) => a + b, 0) };
}

const sample: Eth = {
  address: profile.wallet, ens: null, balance: "0.000", txCount: 0, network: "Ethereum Mainnet",
  txs: [{ hash: "0x…sample", direction: "in", value: "0.05 ETH", method: "Transfer", fee: "0.0002", when: "Sample data" }],
  txCountLabel: "0", firstSeen: "—", failed: 0, heatTotal: 0,
  heatmap: Array.from({ length: WEEKS + 1 }, (_, w) => Array.from({ length: 7 }, (_, d) => ((w * 7 + d) % 11 === 0 ? 2 : (w + d) % 5 === 0 ? 1 : 0))),
};

type Scan<T> = { status: string; result: T };

export async function getEthereum(): Promise<Widget<Eth>> {
  "use cache";
  cacheLife("minutes");
  const key = process.env.ETHERSCAN_API_KEY;
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
        address: addr, ens: ens.name ?? null, balance: (Number(BigInt(bal.result) / BigInt(1e12)) / 1e6).toFixed(4),
        txCount: list.length, txCountLabel: list.length >= 1000 ? "1,000+" : String(list.length),
        firstSeen: oldest ? new Date(Number(oldest.timeStamp) * 1000).toISOString().slice(0, 10) : "—",
        failed: list.filter((t) => t.isError === "1").length, heatmap: heat.grid, heatTotal: heat.total, network: "Ethereum Mainnet",
        txs: list.slice(0, 5).map((t) => ({
          hash: t.hash, direction: t.from.toLowerCase() === addr.toLowerCase() ? "out" : "in",
          method: t.functionName ? t.functionName.split("(")[0] : t.value !== "0" ? "Transfer" : "Contract call",
          fee: ((Number(t.gasUsed ?? 0) * Number(t.gasPrice ?? 0)) / 1e18).toFixed(5),
          value: `${(Number(BigInt(t.value) / BigInt(1e12)) / 1e6).toFixed(4)} ETH`, when: new Date(Number(t.timeStamp) * 1000).toISOString().slice(0, 10),
        })),
      },
    };
  } catch {
    return { data: sample, sample: true };
  }
}
