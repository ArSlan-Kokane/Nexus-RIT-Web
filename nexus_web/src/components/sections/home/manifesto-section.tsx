"use client";

import { Container } from "@/components/ui/container";
import { BlueLine } from "@/components/ui/blue-line";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { Code2, ShieldCheck, Zap } from "lucide-react";
import { motion } from "framer-motion";

export function ManifestoSection() {
  const { elementRef: headerElementRef } = useScrollReveal();
  const {
    elementRef: column1ElementRef,
    isVisible: isColumn1Visible,
  } = useScrollReveal();
  const {
    elementRef: column2ElementRef,
    isVisible: isColumn2Visible,
  } = useScrollReveal();
  const {
    elementRef: column3ElementRef,
    isVisible: isColumn3Visible,
  } = useScrollReveal();

  return (
    <section className="py-24 bg-[#07070a] border-b border-[#1c1c27]">
      <Container size="xl">
        <div className="space-y-16">
          {/* Large Typographic Manifesto Header */}
          <div
            ref={headerElementRef}
            className="space-y-4 max-w-4xl scroll-reveal"
          >
            <div className="text-xs font-mono text-blue-400 uppercase tracking-widest font-semibold flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
              <span>THE NEXUS CREED</span>
            </div>
            <BlueLine orientation="horizontal" variant="draw" delay={0.3} />
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white uppercase leading-tight">
              We don&apos;t just participate.
              <span className="block text-zinc-500">
                We Build. We Lead. We Connect.
              </span>
            </h2>
            <p className="text-base sm:text-lg text-zinc-400 max-w-2xl leading-relaxed">
              Our operating system rejects shallow hackathons and passive
              lectures. We cultivate engineers who design resilient software,
              govern high-ownership teams, and create lasting institutional
              value for RIT.
            </p>
          </div>

          {/* 3 Full-Width Asymmetric Columns */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 border border-[#1c1c27] rounded-2xl overflow-hidden divide-y lg:divide-y-0 lg:divide-x divide-[#1c1c27] bg-[#050507]">
            {/* 01 / BUILD */}
            <motion.div
              ref={column1ElementRef}
              className="p-8 sm:p-12 space-y-6 flex flex-col justify-between hover:bg-[#0a0a0f] transition-colors scroll-reveal"
              initial={{ opacity: 0, x: -20 }}
              animate={isColumn1Visible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-2xl sm:text-3xl font-mono font-bold text-blue-400">
                    01
                  </span>
                  <div className="p-2 rounded-lg bg-blue-950/60 border border-blue-800/40 text-blue-400">
                    <Code2 className="h-5 w-5" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white tracking-tight uppercase">
                  BUILD
                </h3>
                <p className="text-xs font-mono text-zinc-400 uppercase tracking-wider">
                  Engineering Sovereignty
                </p>
                <p className="text-sm text-zinc-300 leading-relaxed">
                  We believe engineering credibility is earned through
                  production code. We architect full-stack distributed systems,
                  IoT telemetry grids, and intelligent agent frameworks that
                  solve real-world problems.
                </p>
              </div>

              <div className="pt-6 border-t border-[#1c1c27] space-y-2 text-xs font-mono text-zinc-400">
                <div className="flex items-center gap-2">
                  <span className="text-blue-400">•</span>
                  <span>Modern TypeScript & Next.js Stacks</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-blue-400">•</span>
                  <span>National Hackathon Preparation (SIH)</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-blue-400">•</span>
                  <span>100% Open-Source Code Repositories</span>
                </div>
              </div>
            </motion.div>

            {/* 02 / LEAD */}
            <motion.div
              ref={column2ElementRef}
              className="p-8 sm:p-12 space-y-6 flex flex-col justify-between hover:bg-[#0a0a0f] transition-colors scroll-reveal"
              initial={{ opacity: 0, y: 20 }}
              animate={isColumn2Visible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-2xl sm:text-3xl font-mono font-bold text-indigo-400">
                    02
                  </span>
                  <div className="p-2 rounded-lg bg-indigo-950/60 border border-indigo-800/40 text-indigo-400">
                    <ShieldCheck className="h-5 w-5" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white tracking-tight uppercase">
                  LEAD
                </h3>
                <p className="text-xs font-mono text-zinc-400 uppercase tracking-wider">
                  Institutional Ownership
                </p>
                <p className="text-sm text-zinc-300 leading-relaxed">
                  Technical brilliance without leadership lacks leverage. We
                  develop student directors who manage club budgets, orchestrate
                  multi-track tech summits, and lead high-stakes technical
                  decisions.
                </p>
              </div>

              <div className="pt-6 border-t border-[#1c1c27] space-y-2 text-xs font-mono text-zinc-400">
                <div className="flex items-center gap-2">
                  <span className="text-indigo-400">•</span>
                  <span>Autonomous Division Governance</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-indigo-400">•</span>
                  <span>Technical Writing & Keynotes</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-indigo-400">•</span>
                  <span>Succession Across Tech Directors</span>
                </div>
              </div>
            </motion.div>

            {/* 03 / CONNECT */}
            <motion.div
              ref={column3ElementRef}
              className="p-8 sm:p-12 space-y-6 flex flex-col justify-between hover:bg-[#0a0a0f] transition-colors scroll-reveal"
              initial={{ opacity: 0, x: 20 }}
              animate={isColumn3Visible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-2xl sm:text-3xl font-mono font-bold text-emerald-400">
                    03
                  </span>
                  <div className="p-2 rounded-lg bg-emerald-950/60 border border-emerald-800/40 text-emerald-400">
                    <Zap className="h-5 w-5" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white tracking-tight uppercase">
                  CONNECT
                </h3>
                <p className="text-xs font-mono text-zinc-400 uppercase tracking-wider">
                  Ecosystem Scale
                </p>
                <p className="text-sm text-zinc-300 leading-relaxed">
                  No builder creates in a silo. NEXUS unites student developers,
                  mentors, industry engineers, and alumni to accelerate
                  opportunities and bring cutting-edge ideas into RIT.
                </p>
              </div>

              <div className="pt-6 border-t border-[#1c1c27] space-y-2 text-xs font-mono text-zinc-400">
                <div className="flex items-center gap-2">
                  <span className="text-emerald-400">•</span>
                  <span>WhatsApp Hackathon Community Hub</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-emerald-400">•</span>
                  <span>Inter-Collegiate Club Alliances</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-emerald-400">•</span>
                  <span>Lifelong Alumni Mentorship Network</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}