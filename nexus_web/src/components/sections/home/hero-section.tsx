"use client";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/data/site-config";
import { ArrowRight, Terminal, Trophy } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

type EntryState = "checking" | "intro" | "ready" | "skipped";

const revealVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
};

const titleVariants = {
  hidden: { opacity: 0, y: 44 },
  visible: { opacity: 1, y: 0 },
};

export function HeroSection() {
  const [entryState, setEntryState] = useState<EntryState>("checking");
  const isIntro = entryState === "intro";
  const isSkipped = entryState === "skipped";
  const isEntryActive = entryState === "checking" || isIntro;
  const isContentVisible = entryState === "ready" || isSkipped;
  const transitionOverride = isSkipped ? { duration: 0 } : undefined;

  useEffect(() => {
    let hasVisited = false;
    try {
      hasVisited = Boolean(window.localStorage.getItem("nexus-hero-visited"));
      window.localStorage.setItem("nexus-hero-visited", "true");
    } catch {
      // Private browsing modes can deny storage access; the animation still works.
    }

    const shouldReduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const shouldIntro = !hasVisited && !shouldReduceMotion;
    let revealTimer: number | undefined;

    window.requestAnimationFrame(() => {
      setEntryState(shouldIntro ? "intro" : "ready");
    });

    if (shouldIntro) {
      revealTimer = window.setTimeout(() => {
        setEntryState("ready");
      }, 1900);
    }

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        if (revealTimer) window.clearTimeout(revealTimer);
        setEntryState("skipped");
      }
    };

    window.addEventListener("keydown", handleEscape);
    return () => {
      if (revealTimer) window.clearTimeout(revealTimer);
      window.removeEventListener("keydown", handleEscape);
    };
  }, []);

  return (
    <section className="relative overflow-hidden border-b border-[#1c1c27] pt-12 pb-20 tech-grid-bg md:pt-20 md:pb-28">
      {(entryState === "checking" || isIntro) && (
        <motion.div
          className="hero-entry-veil"
          initial={{ opacity: 1 }}
          animate={{ opacity: isIntro ? 0 : 1 }}
          transition={
            isIntro
              ? { delay: 1.35, duration: 0.55, ease: [0.77, 0, 0.175, 1] }
              : { duration: 0 }
          }
          aria-hidden="true"
        >
          <div className="hero-entry-mark">
            <span className="hero-entry-kicker">RIT / 2026</span>
            <span className="hero-entry-wordmark">NEXUS</span>
            <span className="hero-entry-rule" />
          </div>
        </motion.div>
      )}

      <motion.div
        className="hero-entry-line"
        initial={isEntryActive ? { scaleX: 0 } : false}
        animate={{ scaleX: entryState === "checking" ? 0 : 1 }}
        transition={
          transitionOverride ?? {
            duration: 0.9,
            delay: 0.08,
            ease: [0.77, 0, 0.175, 1],
          }
        }
        aria-hidden="true"
      />

      <div className="absolute top-1/3 left-1/2 h-[400px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/10 blur-[140px] pointer-events-none" />

      <Container size="xl" className="relative z-10">
        <div className="flex flex-col space-y-12">
          <motion.div
            className="flex flex-col items-start justify-between gap-4 border-b border-[#1c1c27] pb-6 sm:flex-row sm:items-center"
            variants={revealVariants}
            initial={isEntryActive ? "hidden" : false}
            animate={isContentVisible ? "visible" : "hidden"}
            transition={
              transitionOverride ?? { duration: 0.55, delay: 0.24, ease: [0.23, 1, 0.32, 1] }
            }
          >
            <div className="inline-flex items-center gap-2.5 rounded-full border border-zinc-800 bg-zinc-900/90 px-3 py-1 text-xs font-mono text-zinc-300 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="font-semibold text-white">NEXUS COLLECTIVE</span>
              <span className="text-zinc-600">/</span>
              <span>RIT CHAPTER</span>
            </div>

            <div className="flex items-center gap-3 text-xs font-mono text-zinc-400">
              <div className="flex items-center gap-2 rounded-md border border-[#1c1c27] bg-[#0c0c10] px-3 py-1">
                <Image
                  src="/images/rit_logo.jpg"
                  alt="RIT Logo"
                  width={16}
                  height={16}
                  className="rounded-full"
                />
                <span className="text-zinc-200">
                  RAJARAMBAPU INSTITUTE OF TECHNOLOGY
                </span>
              </div>
              <span className="hidden text-zinc-600 md:inline">
                LOC: 17.04°N, 74.26°E
              </span>
            </div>
          </motion.div>

          <div className="max-w-5xl space-y-6">
            <motion.div
              className="text-xs font-mono font-semibold uppercase tracking-widest text-blue-400"
              variants={revealVariants}
              initial={isEntryActive ? "hidden" : false}
              animate={isContentVisible ? "visible" : "hidden"}
              transition={
                transitionOverride ?? { duration: 0.45, delay: 0.43, ease: [0.23, 1, 0.32, 1] }
              }
            >
              Innovation & Technical Leadership Ecosystem
            </motion.div>

            <h1 className="text-5xl font-black uppercase leading-[0.95] tracking-tighter text-white sm:text-7xl lg:text-8xl">
              <motion.span
                className="block text-zinc-100"
                variants={titleVariants}
                initial={isEntryActive ? "hidden" : false}
                animate={isContentVisible ? "visible" : "hidden"}
                transition={
                  transitionOverride ?? { duration: 0.7, delay: 0.52, ease: [0.23, 1, 0.32, 1] }
                }
              >
                BUILD.
              </motion.span>
              <motion.span
                className="block bg-gradient-to-r from-white via-zinc-300 to-zinc-500 bg-clip-text text-transparent"
                variants={titleVariants}
                initial={isEntryActive ? "hidden" : false}
                animate={isContentVisible ? "visible" : "hidden"}
                transition={
                  transitionOverride ?? { duration: 0.7, delay: 0.64, ease: [0.23, 1, 0.32, 1] }
                }
              >
                LEAD. CONNECT.
              </motion.span>
            </h1>

            <motion.p
              className="max-w-3xl text-lg font-normal leading-relaxed text-zinc-400 sm:text-2xl"
              variants={revealVariants}
              initial={isEntryActive ? "hidden" : false}
              animate={isContentVisible ? "visible" : "hidden"}
              transition={
                transitionOverride ?? { duration: 0.6, delay: 0.9, ease: [0.23, 1, 0.32, 1] }
              }
            >
              We are the premier engineering collective of RIT. Building
              production-grade software, competing in national hackathons, and
              establishing student technical sovereignty.
            </motion.p>
          </div>

          <motion.div
            className="flex flex-col items-stretch gap-4 pt-4 sm:flex-row sm:items-center"
            variants={revealVariants}
            initial={isEntryActive ? "hidden" : false}
            animate={isContentVisible ? "visible" : "hidden"}
            transition={
              transitionOverride ?? { duration: 0.6, delay: 1.08, ease: [0.23, 1, 0.32, 1] }
            }
          >
            <Link href="/join">
              <Button
                size="lg"
                variant="primary"
                className="h-14 justify-center px-8 text-base font-semibold"
              >
                <span>
                  {siteConfig.recruitment.isOpen
                    ? "Apply to NEXUS"
                    : "Explore NEXUS"}
                </span>
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>

            <Link href="/hackathons">
              <Button
                size="lg"
                variant="secondary"
                className="h-14 justify-center px-8 text-base"
              >
                <Trophy className="mr-2 h-4 w-4 text-blue-400" />
                <span>Hackathon Support Hub</span>
              </Button>
            </Link>

            <Link href="/projects">
              <Button
                size="lg"
                variant="outline"
                className="h-14 justify-center px-8 text-base"
              >
                <Terminal className="mr-2 h-4 w-4 text-zinc-400" />
                <span>Project Archive</span>
              </Button>
            </Link>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
