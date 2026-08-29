import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { ArrowRight, Terminal, Trophy } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-28 border-b border-[#1c1c27] tech-grid-bg">
      {/* Ambient Lighting Gradient */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-600/10 blur-[140px] rounded-full pointer-events-none" />

      <Container size="xl" className="relative z-10">
        <div className="flex flex-col space-y-12">
          {/* Top Metadata & Co-Branding Bar */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-[#1c1c27] pb-6">
            <div className="inline-flex items-center gap-2.5 px-3 py-1 rounded-full bg-zinc-900/90 border border-zinc-800 text-xs font-mono text-zinc-300 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="font-semibold text-white">NEXUS COLLECTIVE</span>
              <span className="text-zinc-600">/</span>
              <span>RIT CHAPTER</span>
            </div>

            <div className="flex items-center gap-3 text-xs font-mono text-zinc-400">
              <div className="flex items-center gap-2 bg-[#0c0c10] border border-[#1c1c27] px-3 py-1 rounded-md">
                <Image
                  src="/images/rit_logo.jpg"
                  alt="RIT Logo"
                  width={16}
                  height={16}
                  className="rounded-full"
                />
                <span className="text-zinc-200">RAJARAMBAPU INSTITUTE OF TECHNOLOGY</span>
              </div>
              <span className="hidden md:inline text-zinc-600">LOC: 17.04°N, 74.26°E</span>
            </div>
          </div>

          {/* Monolithic Editorial Typography */}
          <div className="space-y-6 max-w-5xl">
            <div className="space-y-2">
              <div className="text-xs font-mono text-blue-400 uppercase tracking-widest font-semibold">
                Innovation & Technical Leadership Ecosystem
              </div>
              <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tighter text-white uppercase leading-[0.95]">
                <span className="block text-zinc-100">
                  BUILD.
                </span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-300 to-zinc-500">
                  LEAD. CONNECT.
                </span>
              </h1>
            </div>

            <p className="text-lg sm:text-2xl text-zinc-400 max-w-3xl font-normal leading-relaxed">
              We are the premier engineering collective of RIT. Building production-grade software, competing in national hackathons, and establishing student technical sovereignty.
            </p>
          </div>

          {/* Action Strip */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
            <Link href="/join">
              <Button size="lg" variant="primary" className="h-14 px-8 text-base font-semibold justify-center">
                <span>Apply for Spring 2026</span>
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </Link>
            <Link href="/hackathons">
              <Button size="lg" variant="secondary" className="h-14 px-8 text-base justify-center">
                <Trophy className="h-4 w-4 mr-2 text-blue-400" />
                <span>Hackathon Support Hub</span>
              </Button>
            </Link>
            <Link href="/projects">
              <Button size="lg" variant="outline" className="h-14 px-8 text-base justify-center">
                <Terminal className="h-4 w-4 mr-2 text-zinc-400" />
                <span>Project Archive</span>
              </Button>
            </Link>
          </div>

          {/* Full-Width Telemetry Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-12 border-t border-[#1c1c27]">
            <div className="space-y-1">
              <div className="text-xs font-mono text-zinc-500 uppercase">01 / Architecture</div>
              <div className="text-sm font-semibold text-white font-mono">Next.js 16 Server-First</div>
            </div>
            <div className="space-y-1">
              <div className="text-xs font-mono text-zinc-500 uppercase">02 / Open Source</div>
              <div className="text-sm font-semibold text-blue-400 font-mono">100% Public Repos</div>
            </div>
            <div className="space-y-1">
              <div className="text-xs font-mono text-zinc-500 uppercase">03 / Directorates</div>
              <div className="text-sm font-semibold text-emerald-400 font-mono">5 Specialized Divisions</div>
            </div>
            <div className="space-y-1">
              <div className="text-xs font-mono text-zinc-500 uppercase">04 / Campus Hub</div>
              <div className="text-sm font-semibold text-white font-mono">RIT Engineering Node</div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
