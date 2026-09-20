"use client";

import { Container } from "@/components/ui/container";
import { BlueLine } from "@/components/ui/blue-line";
import { Code2, ShieldCheck, Zap } from "lucide-react";
import { motion } from "framer-motion";

export function ManifestoSection() {
  return (
    <section className="py-24 bg-[#07070a] border-b border-[#1c1c27] relative overflow-hidden">
      {/* Subtle background ambient mesh */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(59, 130, 246, 0.2) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(59, 130, 246, 0.2) 1px, transparent 1px)
          `,
          backgroundSize: "64px 64px",
        }}
      />

      <Container size="xl">
        <div className="space-y-16 relative z-10">
          {/* Large Typographic Manifesto Header */}
          <motion.div
            className="space-y-4 max-w-4xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-xs font-mono text-blue-400 uppercase tracking-widest font-semibold flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-500 animate-pulse" />
              <span>THE NEXUS CREED // CORE DIRECTIVE</span>
            </div>
            <BlueLine orientation="horizontal" variant="draw" delay={0.2} />
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white uppercase leading-tight">
              We don&apos;t just participate.
              <span className="block bg-gradient-to-r from-blue-400 via-indigo-300 to-emerald-400 bg-clip-text text-transparent">
                We Build. We Lead. We Connect.
              </span>
            </h2>
            <p className="text-base sm:text-lg text-zinc-400 max-w-2xl leading-relaxed">
              NEXUS is where curious minds turn bold ideas into real builds. We learn in public, ship together, and push each other to become the kind of engineers who leave every room, repo, and community stronger than we found it.
            </p>
          </motion.div>

          {/* 3 Full-Width Asymmetric Columns: BUILD • LEAD • CONNECT */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 border border-[#1c1c27] rounded-3xl overflow-hidden divide-y lg:divide-y-0 lg:divide-x divide-[#1c1c27] bg-[#050507] shadow-2xl">
            {/* 01 / BUILD */}
            <motion.div
              className="p-8 sm:p-12 space-y-8 flex flex-col justify-between hover:bg-[#090912] transition-colors relative group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-3xl sm:text-4xl font-mono font-black text-blue-400">
                    01
                  </span>
                  <div className="p-3 rounded-xl bg-blue-950/60 border border-blue-800/40 text-blue-400 shadow-[0_0_15px_rgba(59,130,246,0.2)]">
                    <Code2 className="h-6 w-6" />
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-black text-white tracking-tight uppercase">
                    BUILD
                  </h3>
                  <p className="text-xs font-mono text-blue-400 uppercase tracking-widest mt-1">
                    Engineering Sovereignty
                  </p>
                </div>
                <p className="text-sm text-zinc-300 leading-relaxed">
                  We believe engineering credibility is earned exclusively through
                  production code. We architect full-stack distributed systems,
                  embedded IoT telemetry grids, and intelligent AI models that
                  solve national-scale challenges.
                </p>
              </div>

              <div className="pt-6 border-t border-[#1c1c27] space-y-3 text-xs font-mono text-zinc-400">
                <div className="flex items-center gap-2">
                  <span className="text-blue-400 font-bold">•</span>
                  <span>Modern Next.js, Go & TypeScript Scaffolds</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-blue-400 font-bold">•</span>
                  <span>SIH National Hackathon Preparation</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-blue-400 font-bold">•</span>
                  <span>100% Open-Source Code Repositories</span>
                </div>
              </div>
            </motion.div>

            {/* 02 / LEAD */}
            <motion.div
              className="p-8 sm:p-12 space-y-8 flex flex-col justify-between hover:bg-[#0a0a14] transition-colors relative group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-3xl sm:text-4xl font-mono font-black text-indigo-400">
                    02
                  </span>
                  <div className="p-3 rounded-xl bg-indigo-950/60 border border-indigo-800/40 text-indigo-400 shadow-[0_0_15px_rgba(99,102,241,0.2)]">
                    <ShieldCheck className="h-6 w-6" />
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-black text-white tracking-tight uppercase">
                    LEAD
                  </h3>
                  <p className="text-xs font-mono text-indigo-400 uppercase tracking-widest mt-1">
                    Institutional Ownership
                  </p>
                </div>
                <p className="text-sm text-zinc-300 leading-relaxed">
                  Technical brilliance without leadership lacks systemic leverage. We
                  develop student directors who manage club budgets, orchestrate
                  multi-track tech sprints, write architectural specifications, and
                  lead high-stakes decisions.
                </p>
              </div>

              <div className="pt-6 border-t border-[#1c1c27] space-y-3 text-xs font-mono text-zinc-400">
                <div className="flex items-center gap-2">
                  <span className="text-indigo-400 font-bold">•</span>
                  <span>Autonomous Directorate Governance</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-indigo-400 font-bold">•</span>
                  <span>Engineering Keynotes & Technical Writing</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-indigo-400 font-bold">•</span>
                  <span>Structured Leadership Lineage & Succession</span>
                </div>
              </div>
            </motion.div>

            {/* 03 / CONNECT */}
            <motion.div
              className="p-8 sm:p-12 space-y-8 flex flex-col justify-between hover:bg-[#070e0a] transition-colors relative group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-3xl sm:text-4xl font-mono font-black text-emerald-400">
                    03
                  </span>
                  <div className="p-3 rounded-xl bg-emerald-950/60 border border-emerald-800/40 text-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.2)]">
                    <Zap className="h-6 w-6" />
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-black text-white tracking-tight uppercase">
                    CONNECT
                  </h3>
                  <p className="text-xs font-mono text-emerald-400 uppercase tracking-widest mt-1">
                    Ecosystem Scale
                  </p>
                </div>
                <p className="text-sm text-zinc-300 leading-relaxed">
                  No engineer builds in a silo. NEXUS unites student developers,
                  faculty advisors, industry engineers, and alumni to accelerate
                  opportunities and bring world-class engineering standards directly
                  into the RIT campus.
                </p>
              </div>

              <div className="pt-6 border-t border-[#1c1c27] space-y-3 text-xs font-mono text-zinc-400">
                <div className="flex items-center gap-2">
                  <span className="text-emerald-400 font-bold">•</span>
                  <span>Verified WhatsApp & Telegram Community Hubs</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-emerald-400 font-bold">•</span>
                  <span>Inter-Collegiate Hackathon Squad Alliances</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-emerald-400 font-bold">•</span>
                  <span>Lifelong Alumni Mentorship & Referrals</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}
