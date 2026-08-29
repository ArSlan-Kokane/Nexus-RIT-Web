import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

interface AnnouncementBarProps {
  text?: string;
  linkText?: string;
  href?: string;
}

export function AnnouncementBar({
  text = "Spring 2026 Recruitment Cycle is currently open for core departments.",
  linkText = "Apply Now",
  href = "/join",
}: AnnouncementBarProps) {
  return (
    <div className="bg-gradient-to-r from-blue-950/60 via-blue-900/40 to-blue-950/60 border-b border-blue-800/30 py-2 px-4 text-xs font-medium text-blue-200">
      <div className="max-w-7xl mx-auto flex items-center justify-center gap-2 text-center">
        <span className="inline-flex items-center gap-1.5 bg-blue-500/20 text-blue-300 px-2 py-0.5 rounded-full text-[10px] uppercase font-mono tracking-wider">
          <Sparkles className="h-3 w-3 animate-pulse" />
          Active
        </span>
        <span className="hidden sm:inline text-zinc-300">{text}</span>
        <Link
          href={href}
          className="inline-flex items-center gap-1 font-semibold text-white hover:text-blue-300 transition-colors underline-offset-4 hover:underline"
        >
          {linkText}
          <ArrowRight className="h-3 w-3" />
        </Link>
      </div>
    </div>
  );
}
