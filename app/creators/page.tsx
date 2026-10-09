import type { Metadata } from "next";
import { Creators } from "@/components/sections/creators";
import { getYoutube } from "@/lib/data/youtube";

export const metadata: Metadata = { title: "Creators", alternates: { canonical: "/creators" } };

export default async function Page() {
  return <Creators yt={await getYoutube()} />;
}
