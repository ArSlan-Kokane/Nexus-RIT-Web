"use client";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { BlueLine } from "@/components/ui/blue-line";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { ArrowRight, MessageCircle, Send, Trophy } from "lucide-react";
import { motion } from "framer-motion";

export function HackathonPipeline() {
  const {
    elementRef: headerElementRef,
    isVisible: isHeaderVisible,
  } = useScrollReveal();
  const {
    elementRef: gridElementRef,
    isVisible: isGridVisible,
  } = useScrollReveal();

  const steps = [
    {
      number: "01",
      title: "DISCOVER",
      subtitle: "Problem Scouting",
      desc: "We analyze national problem statements (SIH, AI challenges) and evaluate technical viability.",
    },
    {
      number: "02",
      title: "JOIN",
      subtitle: "WhatsApp Hub",
      desc: "Students join the official NEXUS Hackathon Support WhatsApp channel for announcements and coordination.",
    },
    {
      number: "03",
      title: "FORM TEAM",
      subtitle: "Skill Matchmaking",
      desc: "We bridge full-stack devs, AI practitioners, hardware specialists, and UI designers into balanced squads.",
    },
    {
      number: "04",
      title: "MENTOR",
      subtitle: "Architecture Review",
      desc: "Tech directors and senior alumni review system blueprints, pitch decks, and feasibility models.",
    },
    {
      number: "05",
      title: "BUILD",
      subtitle: "36h Sprint",
      desc: "Intensive prototype engineering utilizing production scaffolds, pre-built auth, and deployment pipelines.",
    },
    {
      number: "06",
      title: "SUBMIT",
      subtitle: "Live Demo & Win",
      desc: "Polished presentations, architecture walkthroughs, and submission governance for podium finishes.",
    },
  ];

  return (
    <section className="py-24 bg-[#07070a] border-b border-[#1c1c27]">
      <Container size="xl">
        <div className="space-y-16">
          {/* Section Header */}
          <motion.div
            ref={headerElementRef}
            className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#1c1c27] pb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={isHeaderVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4 }}
          >
            <div className="space-y-3 max-w-3xl">
              <div className="text-xs font-mono text-emerald-400 uppercase tracking-widest font-semibold flex items-center gap-2">
                <Trophy className="h-4 w-4" />
                <span>COMPETITIVE ACCELERATOR</span>
              </div>
              <BlueLine
                orientation="horizontal"
                variant="draw"
                delay={0.2}
                className="!bg-emerald-500"
              />
              <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white uppercase">
                The Hackathon Engine
              </h2>
              <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
                How NEXUS systematically accelerates RIT student teams to
                formulate, build, and win national-tier hackathons.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <Button
                href="https://whatsapp.com/channel/0029VbDMvGCIyPtZvvAWLG19"
                external
                variant="primary"
                size="sm"
                className="bg-emerald-600 hover:bg-emerald-500 text-xs font-mono"
              >
                <MessageCircle className="h-4 w-4 mr-2" />
                <span>Join WhatsApp Hub</span>
              </Button>
              <Button
                href="https://t.me/+Qwumk5Ux15JmMTg9"
                external
                variant="secondary"
                size="sm"
                className="border-sky-500/30 bg-sky-500/10 text-sky-200 hover:bg-sky-500/20 hover:border-sky-400/60"
              >
                <Send className="h-4 w-4 mr-2 text-sky-400" />
                <span>Join Telegram</span>
              </Button>
            </div>
          </motion.div>

          {/* 6-Stage Process Pipeline with Connected Horizontal Rail */}
          <div className="relative">
            {/* Desktop Connecting Rail */}
            <div 
              className="hidden lg:block absolute top-10 left-8 right-8 h-[2px] bg-gradient-to-r from-emerald-500/20 via-emerald-400/50 to-emerald-500/20 pointer-events-none z-0"
              aria-hidden="true"
            >
              {/* Rail Pulse Motion */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-emerald-400 to-transparent w-32 animate-[pulse_3s_ease-in-out_infinite]" />
            </div>

            <motion.div
              ref={gridElementRef}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4 relative z-10"
              initial={{ opacity: 0, y: 20 }}
              animate={isGridVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              {steps.map((step, index) => (
                <motion.div
                  key={step.number}
                  className="p-6 rounded-xl bg-[#0a0a0f] border border-[#1c1c27] hover:border-emerald-500/40 hover:bg-[#0e0e16] transition-all flex flex-col justify-between space-y-4 group relative shadow-sm"
                  initial={{ opacity: 0, y: 10 }}
                  animate={isGridVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  {/* Step Node Connection */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xl font-mono font-bold text-emerald-400">
                        {step.number}
                      </span>
                      <span className="relative flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-20 group-hover:opacity-75" />
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-zinc-700 group-hover:bg-emerald-400 transition-colors" />
                      </span>
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white uppercase tracking-tight group-hover:text-emerald-300 transition-colors">
                        {step.title}
                      </h3>
                      <p className="text-[11px] font-mono text-zinc-500 mt-0.5 uppercase">
                        {step.subtitle}
                      </p>
                    </div>
                  </div>

                  <p className="text-xs text-zinc-400 leading-relaxed pt-2 border-t border-[#1c1c27]">
                    {step.desc}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Bottom Resource Callout */}
          <div className="p-8 rounded-2xl bg-gradient-to-r from-emerald-950/20 via-[#0c0c10] to-[#050507] border border-emerald-900/30 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-1 text-center md:text-left">
              <h4 className="text-lg font-bold text-white">
                Need Teammates for SIH 2026 or Regional Sprints?
              </h4>
              <p className="text-xs text-zinc-400">
                Access verified problem statements, pitch templates, and student
                engineering talent.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Button
                href="/hackathons"
                variant="outline"
                size="sm"
                className="text-xs font-mono border-emerald-800/40 text-emerald-300 hover:bg-emerald-950/40"
              >
                <span>Explore Hackathon Portal</span>
                <ArrowRight className="h-3.5 w-3.5 ml-1.5" />
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
