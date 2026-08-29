"use client";

import { Button } from "@/components/ui/button";
import { ExploreOverlay } from "./explore-overlay";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export function Navbar() {
  const [isExploreOpen, setIsExploreOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-40 w-full border-b border-[#1c1c27] bg-[#050507]/90 backdrop-blur-md transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between gap-4">
            {/* Left: NEXUS × RIT Institutional Brand Lockup */}
            <div className="flex items-center gap-3">
              <Link href="/" className="flex items-center gap-2.5 group">
                <div className="h-9 w-9 rounded-lg bg-zinc-900 border border-zinc-800 p-1.5 flex items-center justify-center transition-all group-hover:border-blue-500/50">
                  <Image
                    src="/Nexus_Logo.svg"
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
                    <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                  </span>
                  <span className="text-[10px] font-mono text-zinc-400 mt-0.5 uppercase tracking-wider">
                    Innovation & Leadership
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

            {/* Center: Minimalist Explore Trigger */}
            <div className="flex items-center">
              <button
                onClick={() => setIsExploreOpen(true)}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#0e0e14] border border-[#222230] text-xs font-mono font-semibold text-zinc-300 hover:text-white hover:border-zinc-600 hover:bg-[#161620] transition-all cursor-pointer shadow-sm"
                aria-label="Open Explore Directory"
              >
                <span>EXPLORE DIRECTORY</span>
                <ChevronDown className="h-3.5 w-3.5 text-blue-400" />
              </button>
            </div>

            {/* Right: Join CTA & Mobile Menu */}
            <div className="flex items-center gap-3">
              <Link href="/join">
                <Button
                  variant="primary"
                  size="sm"
                  className="font-medium text-xs shadow-[0_0_15px_rgba(59,130,246,0.15)] h-9 px-4"
                >
                  <span>Join NEXUS</span>
                  <ArrowUpRight className="h-3.5 w-3.5 ml-1" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Full-Viewport Explore Overlay */}
      <ExploreOverlay
        isOpen={isExploreOpen}
        onClose={() => setIsExploreOpen(false)}
      />
    </>
  );
}
