import { siteConfig } from "@/data/site-config";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

interface AnnouncementBarProps {
  text?: string;
  linkText?: string;
  href?: string;
}

export function AnnouncementBar({
  text,
  linkText,
  href = "/join",
}: AnnouncementBarProps) {
  const { recruitment } = siteConfig;
  const statusText = recruitment.isOpen
    ? `${recruitment.deadline ?? "Recruitment"} is currently open for core departments.`
    : "Recruitment is currently closed. Follow NEXUS for the next induction cycle.";

  return (
    <div className="bg-gradient-to-r from-blue-950/60 via-blue-900/40 to-blue-950/60 border-b border-blue-800/30 py-2 px-4 text-xs font-medium text-blue-200">
      <div className="max-w-7xl mx-auto flex items-center justify-center gap-2 text-center">
        <span className="inline-flex items-center gap-1.5 bg-blue-500/20 text-blue-300 px-2 py-0.5 rounded-full text-[10px] uppercase font-mono tracking-wider">
          <Sparkles className="h-3 w-3 animate-pulse" />
          {recruitment.isOpen ? "Active" : "Updates"}
        </span>
        <span className="hidden sm:inline text-zinc-300">{text ?? statusText}</span>
        <Link
          href={href}
          className="inline-flex items-center gap-1 font-semibold text-white hover:text-blue-300 transition-colors underline-offset-4 hover:underline"
        >
          {linkText ?? (recruitment.isOpen ? "Apply Now" : "Learn More")}
          <ArrowRight className="h-3 w-3" />
        </Link>
      </div>
    </div>
  );
}
