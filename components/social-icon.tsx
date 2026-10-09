import { Link2 } from "lucide-react";
import { TechIcon } from "@/components/ui/primitives";

const map: Record<string, string> = { GitHub: "siGithub", X: "siX", Instagram: "siInstagram", TikTok: "siTiktok", YouTube: "siYoutube" };

export function SocialIcon({ label, size = 18 }: { label: string; size?: number }) {
  if (label === "LinkedIn")
    return (
      <svg aria-hidden viewBox="0 0 24 24" width={size} height={size} fill="currentColor"><path d="M20.4 20.5h-3.6v-5.6c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9v5.7H9.4V9h3.4v1.6c.5-.9 1.6-1.8 3.4-1.8 3.600 0 4.300 2.400 4.300 5.500v6.200zM5.300 7.400a2.100 2.100 0 1 1 0-4.200 2.100 2.100 0 0 1 0 4.200zM7.100 20.500H3.600V9h3.500v11.500z" /></svg>
    );
  const k = map[label];
  return k ? <TechIcon icon={k} label={label} size={size} /> : <Link2 size={size} aria-hidden />;
}
