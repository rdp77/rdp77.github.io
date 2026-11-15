import { ArrowUpRight } from "lucide-react";
import { Card } from "@/components/ui/primitives";

// Hand-copied from `fastfetch` on the daily driver. Update when the setup changes.
// [label, parts]; each part is [text, optional official link], joined with ", ".
type Part = [string, string?];
const groups: [string, [string, Part[]][]][] = [
  [
    "Hardware",
    [
      ["Laptop", [["MSI Modern 14 B5M"]]],
      ["CPU", [["AMD Ryzen 5 5500U (6C/12T)"]]],
      ["GPU", [["AMD Radeon (Lucienne, integrated)"]]],
      ["Memory", [["32 GB"]]],
      ["Storage", [["Kingston 512 GB NVMe SSD"]]],
      ["Displays", [['14" 1080p 60 Hz + Lenovo L24i-30 24" 1080p 75 Hz']]],
    ],
  ],
  [
    "Software",
    [
      ["OS", [["Ubuntu 26.04 LTS", "https://ubuntu.com"]]],
      ["Kernel", [["Linux 7.0", "https://kernel.org"]]],
      ["Desktop", [["GNOME 50 on Wayland", "https://www.gnome.org"]]],
      ["Shell", [["zsh 5.9", "https://www.zsh.org"]]],
      [
        "Theme",
        [
          ["Orchis", "https://github.com/vinceliuice/Orchis-theme"],
          ["Tela icons", "https://github.com/vinceliuice/Tela-icon-theme"],
          ["Qogir cursor", "https://github.com/vinceliuice/Qogir-icon-theme"],
        ],
      ],
      ["Font", [["Ubuntu Sans", "https://github.com/canonical/Ubuntu-Sans-fonts"]]],
    ],
  ],
];

export function SetupCard() {
  return (
    <Card title="Setup" className="md:col-span-3">
      <div className="grid gap-8 md:grid-cols-2">
        {groups.map(([name, rows]) => (
          <div key={name} className="min-w-0">
            <h4 className="mb-3 text-xs text-faint">{name}</h4>
            <dl className="divide-y divide-line text-sm">
              {rows.map(([k, parts]) => (
                <div key={k} className="grid grid-cols-[6rem_minmax(0,1fr)] gap-4 py-2.5">
                  <dt className="text-muted">{k}</dt>
                  <dd className="break-words">
                    {parts.map(([v, href], i) => (
                      <span key={v}>
                        {i > 0 && ", "}
                        {href ? (
                          <a
                            href={href}
                            rel="noopener"
                            className="group inline-flex items-center gap-1 transition-colors hover:text-muted focus-visible:outline-2 focus-visible:outline-offset-2"
                          >
                            {v}
                            <ArrowUpRight
                              size={14}
                              aria-hidden
                              className="shrink-0 text-faint transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                            />
                          </a>
                        ) : (
                          v
                        )}
                      </span>
                    ))}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        ))}
      </div>
    </Card>
  );
}
