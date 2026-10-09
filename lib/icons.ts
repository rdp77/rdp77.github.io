import * as si from "simple-icons";

type Icon = { title: string; path: string };
const all = si as unknown as Record<string, Icon | undefined>;

export function getIcon(key: string): Icon | undefined {
  return all[key];
}
