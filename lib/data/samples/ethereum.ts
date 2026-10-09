import type { Eth } from "../ethereum";
import { profile } from "@/lib/profile";
import { HEATMAP_WEEKS } from "@/lib/constants";

export const sample: Eth = {
  address: profile.wallet, ens: null, balance: "0.000", txCount: 0, network: "Ethereum Mainnet",
  txs: [{ hash: "0x…sample", direction: "in", value: "0.05 ETH", method: "Transfer", fee: "0.0002", when: "Sample data" }],
  txCountLabel: "0", firstSeen: "—", failed: 0, heatTotal: 0,
  heatmap: Array.from({ length: HEATMAP_WEEKS + 1 }, (_, w) => Array.from({ length: 7 }, (_, d) => { const l = (w * 7 + d) % 11 === 0 ? 3 : (w + d) % 5 === 0 ? 1 : 0; return { l, label: `Sample · level ${l}` }; })),
};
