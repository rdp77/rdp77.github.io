import type { Metadata } from "next";
import { Creators } from "@/components/sections/creators";

export const metadata: Metadata = { title: "Creators", alternates: { canonical: "/creators" } };

export default function Page() {
  return <Creators />;
}
