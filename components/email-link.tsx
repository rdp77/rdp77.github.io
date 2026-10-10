import { ArrowUpRight } from "lucide-react";
import { profile } from "@/lib/profile";

export function EmailLink({
  className = "text-2xl sm:text-3xl lg:text-4xl font-light",
  arrow = "size-5 lg:size-6",
}: {
  className?: string;
  arrow?: string;
}) {
  return (
    <a
      className={`group inline-flex max-w-full items-start gap-2 tracking-tight transition-colors duration-200 hover:text-violet ${className}`}
      href={`mailto:${profile.email}`}
    >
      <span className="bg-gradient-to-r from-violet to-marigold bg-[length:0%_2px] bg-bottom bg-no-repeat pb-1 break-all transition-[background-size] duration-300 ease-out group-hover:bg-[length:100%_2px] group-focus-visible:bg-[length:100%_2px]">
        {profile.email}
      </span>
      <ArrowUpRight
        aria-hidden
        className={`mt-1 shrink-0 -translate-x-1 translate-y-1 opacity-0 transition duration-300 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100 motion-reduce:transition-none ${arrow}`}
      />
    </a>
  );
}
