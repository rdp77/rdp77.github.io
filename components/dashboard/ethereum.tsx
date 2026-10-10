import { getEthereum } from "@/lib/data/ethereum";
import { ArrowUpRight } from "lucide-react";
import { Heatmap } from "@/components/ui/heatmap";
import { Card, Stat, Badge, EmptyState } from "@/components/ui/primitives";

const scan = "https://etherscan.io";
const more =
  "inline-flex items-center gap-1 text-sm text-muted transition-colors hover:text-violet";

export async function EthereumCard() {
  const { data: d, sample } = await getEthereum();
  return (
    <Card title="Ethereum wallet" sample={sample} className="md:col-span-3">
      <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] lg:items-center">
        <div className="bg-carbon p-4 text-white">
          <p className="font-mono text-xs text-white/60">{d.ens ?? "No ENS name"}</p>
          <a
            href={`${scan}/address/${d.address}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-1 block font-mono text-xs break-all hover:underline"
          >
            {d.address}
          </a>
          <p className="mt-3">
            <Badge>{d.network}</Badge>
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          <Stat label="Balance">{d.balance} ETH</Stat>
          <Stat label="Transactions">{d.txCountLabel}</Stat>
          <Stat label="First seen">
            <span className="text-base">{d.firstSeen}</span>
          </Stat>
          <Stat label="Failed">
            <span className="text-xl">{d.failed}</span>
          </Stat>
        </div>
      </div>
      <p className="mt-6 mb-2 text-xs text-faint">
        Transaction heatmap · last year · {d.heatTotal} txs
      </p>
      <Heatmap
        weeks={d.heatmap}
        hint={`${d.heatTotal} transactions`}
        aria={`Transaction heatmap, ${d.heatTotal} transactions in the last year`}
      />
      <p className="mt-6 mb-2 text-xs text-faint">Latest transactions</p>
      {d.txs.length === 0 ? (
        <EmptyState>No transactions yet.</EmptyState>
      ) : (
        <ul className="divide-y divide-line text-sm">
          {d.txs.map((t) => (
            <li
              key={t.hash}
              className="flex flex-wrap items-center justify-between gap-x-2 gap-y-1 py-2"
            >
              <a
                href={`${scan}/tx/${t.hash}`}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs text-muted hover:text-violet hover:underline"
              >
                {t.direction === "in" ? "↓" : "↑"} {t.hash.slice(0, 10)}…
              </a>
              <span className="min-w-0 flex-1 truncate px-2 text-center text-xs">{t.method}</span>
              <span className="text-right">
                {t.value === "0.0000 ETH" ? (
                  <span className="text-faint" title="Contract call, no ETH moved">
                    fee {t.fee}
                  </span>
                ) : (
                  t.value
                )}
              </span>
              <span className="font-mono text-xs text-faint">{t.when}</span>
            </li>
          ))}
        </ul>
      )}
      <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 border-t border-line pt-4">
        <a
          className={more}
          href={`${scan}/address/${d.address}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          View on Etherscan <ArrowUpRight size={14} aria-hidden />
        </a>
        <a
          className={more}
          href={`${scan}/txs?a=${d.address}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          All transactions <ArrowUpRight size={14} aria-hidden />
        </a>
        <a
          className={more}
          href={`${scan}/address/${d.address}#tokentxns`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Token transfers <ArrowUpRight size={14} aria-hidden />
        </a>
      </div>
    </Card>
  );
}
