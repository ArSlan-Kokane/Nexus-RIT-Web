"use client";

import { Button } from "@/components/ui/button";
import { ExploreOverlay } from "./explore-overlay";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef, useState } from "react";
import { MobileNav } from "./mobile-nav";

const NAV_LINKS = [
  { title: "ABOUT", href: "/about" },
  { title: "TEAM", href: "/team" },
  { title: "PROJECTS", href: "/projects" },
  { title: "HACKATHONS", href: "/hackathons" },
];

export function Navbar() {
  const [isExploreOpen, setIsExploreOpen] = useState(false);
  const exploreTriggerRef = useRef<HTMLButtonElement>(null);
  const pathname = usePathname();

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:px-4 focus:py-2 focus:bg-purple-600 focus:text-white focus:rounded-md focus:font-mono focus:text-xs shadow-lg"
      >
        Skip to main content
      </a>

      <header className="sticky top-0 z-40 w-full border-b border-[#1c1c27] bg-[#050507]/90 backdrop-blur-md transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between gap-4">
            {/* Left: NEXUS × RIT Institutional Brand Lockup */}
            <div className="flex items-center gap-3">
              <Link href="/" className="flex items-center gap-2.5 group">
                <div className="h-9 w-9 rounded-lg bg-zinc-900 border border-zinc-800 p-1.5 flex items-center justify-center transition-all group-hover:border-purple-500/50">
                  <Image
                    src="/images/nexus-official-mark.jpg"
                    alt="NEXUS Logo"
                    width={26}
                    height={26}
                    priority
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-base tracking-wider text-white flex items-center gap-1.5 leading-none">
                    NEXUS
                    <span className="h-1.5 w-1.5 rounded-full bg-purple-500" />
                  </span>
                  <span className="text-[10px] font-mono text-zinc-400 mt-0.5 uppercase tracking-wider">
                    Innovation &amp; Leadership
                  </span>
                </div>
              </Link>

              {/* Subtle Institutional Divider */}
              <div className="h-5 w-[1px] bg-zinc-800 mx-1 hidden sm:block" />

              {/* RIT Co-Branding */}
              <div className="hidden sm:flex items-center gap-2">
                <div className="h-7 w-7 rounded-full overflow-hidden border border-zinc-800 shrink-0 bg-yellow-400">
                  <Image
                    src="/images/rit_logo.jpg"
                    alt="RIT Official Logo"
                    width={28}
                    height={28}
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="text-xs font-mono font-semibold text-zinc-300">
                  RIT
                </span>
              </div>
            </div>

            {/* Center: Persistent Desktop Nav Links + Explore Trigger */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`px-3 py-1.5 rounded-md text-xs font-mono tracking-wider font-semibold transition-all ${
                      isActive
                        ? "text-white bg-purple-950/40 border border-purple-800/40 shadow-[0_0_15px_rgba(168,85,247,0.15)]"
                        : "text-zinc-400 hover:text-white hover:bg-zinc-900/60"
                    }`}
                  >
                    {link.title}
                  </Link>
                );
              })}

              <button
                ref={exploreTriggerRef}
                onClick={() => setIsExploreOpen(true)}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 ml-2 rounded-md bg-[#0e0e14] border border-[#222230] text-xs font-mono font-semibold text-zinc-300 hover:text-white hover:border-purple-500/50 hover:bg-[#161620] transition-all cursor-pointer shadow-sm"
                aria-label="Open Explore Directory"
                aria-expanded={isExploreOpen}
              >
                <span>EXPLORE</span>
                <ChevronDown className="h-3 w-3 text-purple-400" />
              </button>
            </nav>

            {/* Right: Direct Join Button & Mobile Menu */}
            <div className="hidden lg:flex items-center gap-3">
              <Button
                href="/join"
                variant="primary"
                size="sm"
                className="font-medium text-xs shadow-[0_0_20px_rgba(168,85,247,0.2)] h-9 px-4"
              >
                <span>Join NEXUS</span>
                <ArrowUpRight className="h-3.5 w-3.5 ml-1" />
              </Button>
            </div>

            <MobileNav />
          </div>
        </div>
      </header>

      {/* Full-Viewport Explore Overlay */}
      <ExploreOverlay
        isOpen={isExploreOpen}
        onClose={() => setIsExploreOpen(false)}
        triggerRef={exploreTriggerRef}
      />
    </>
  );
}
