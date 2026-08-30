"use client";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/data/site-config";
import { ArrowRight, Terminal, Trophy } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function HeroSection() {
  const [hasVisited, setHasVisited] = useState(false);
  const [isSkipped, setIsSkipped] = useState(false);

  useEffect(() => {
    // Check if user has visited before
    const visited = localStorage.getItem("nexus-hero-visited");
    if (visited) {
      setHasVisited(true);
    }
    localStorage.setItem("nexus-hero-visited", "true");

    // Allow skipping with Escape key
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsSkipped(true);
      }
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  // Skip animation if visited or skipped
  const shouldAnimate = !hasVisited && !isSkipped;

  return (
    <section className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-28 border-b border-[#1c1c27] tech-grid-bg">
      {/* Ambient Lighting Gradient */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-600/10 blur-[140px] rounded-full pointer-events-none" />

      {/* Hero Entrance Line */}
      {shouldAnimate && (
        <motion.div
          className="absolute top-0 left-0 right-0 h-[1px] bg-blue-500"
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 0.2, ease: "easeOut" }}
        />
      )}

      <Container size="xl" className="relative z-10">
        <div className="flex flex-col space-y-12">
          {/* Top Metadata & Co-Branding Bar */}
          <motion.div
            className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-[#1c1c27] pb-6"
            initial={shouldAnimate ? { opacity: 0, y: 20 } : undefined}
            animate={shouldAnimate ? { opacity: 1, y: 0 } : undefined}
            transition={shouldAnimate ? { duration: 0.3, delay: 1.6 } : undefined}
          >
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
                <span className="text-zinc-200">
                  RAJARAMBAPU INSTITUTE OF TECHNOLOGY
                </span>
              </div>
              <span className="hidden md:inline text-zinc-600">
                LOC: 17.04°N, 74.26°E
              </span>
            </div>
          </motion.div>

          {/* Monolithic Editorial Typography */}
          <div className="space-y-6 max-w-5xl">
            <div className="space-y-2">
              <motion.div
                className="text-xs font-mono text-blue-400 uppercase tracking-widest font-semibold"
                initial={shouldAnimate ? { opacity: 0 } : undefined}
                animate={shouldAnimate ? { opacity: 1 } : undefined}
                transition={
                  shouldAnimate ? { duration: 0.2, delay: 0.2 } : undefined
                }
              >
                Innovation & Technical Leadership Ecosystem
              </motion.div>

              <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tighter text-white uppercase leading-[0.95]">
                <motion.span
                  className="block text-zinc-100"
                  initial={shouldAnimate ? { opacity: 0, scale: 0.95 } : undefined}
                  animate={shouldAnimate ? { opacity: 1, scale: 1 } : undefined}
                  transition={
                    shouldAnimate ? { duration: 0.2, delay: 0.4 } : undefined
                  }
                >
                  BUILD.
                </motion.span>
                <motion.span
                  className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-300 to-zinc-500"
                  initial={shouldAnimate ? { opacity: 0, scale: 0.95 } : undefined}
                  animate={shouldAnimate ? { opacity: 1, scale: 1 } : undefined}
                  transition={
                    shouldAnimate ? { duration: 0.2, delay: 0.6 } : undefined
                  }
                >
                  LEAD. CONNECT.
                </motion.span>
              </h1>
            </div>

            <motion.p
              className="text-lg sm:text-2xl text-zinc-400 max-w-3xl font-normal leading-relaxed"
              initial={shouldAnimate ? { opacity: 0, y: 10 } : undefined}
              animate={shouldAnimate ? { opacity: 1, y: 0 } : undefined}
              transition={
                shouldAnimate ? { duration: 0.3, delay: 0.8 } : undefined
              }
            >
              We are the premier engineering collective of RIT. Building
              production-grade software, competing in national hackathons, and
              establishing student technical sovereignty.
            </motion.p>
          </div>

          {/* Action Strip */}
          <motion.div
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4"
            initial={shouldAnimate ? { opacity: 0, y: 20 } : undefined}
            animate={shouldAnimate ? { opacity: 1, y: 0 } : undefined}
            transition={
              shouldAnimate ? { duration: 0.3, delay: 2.0 } : undefined
            }
          >
            <Link href="/join">
              <Button
                size="lg"
                variant="primary"
                className="h-14 px-8 text-base font-semibold justify-center"
              >
                <span>
                  {siteConfig.recruitment.isOpen
                    ? "Apply to NEXUS"
                    : "Explore NEXUS"}
                </span>
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </Link>

            <Link href="/hackathons">
              <Button
                size="lg"
                variant="secondary"
                className="h-14 px-8 text-base justify-center"
              >
                <Trophy className="h-4 w-4 mr-2 text-blue-400" />
                <span>Hackathon Support Hub</span>
              </Button>
            </Link>

            <Link href="/projects">
              <Button
                size="lg"
                variant="outline"
                className="h-14 px-8 text-base justify-center"
              >
                <Terminal className="h-4 w-4 mr-2 text-zinc-400" />
                <span>Project Archive</span>
              </Button>
            </Link>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}