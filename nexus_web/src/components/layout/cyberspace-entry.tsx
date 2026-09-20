"use client";

import { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export function CyberspaceEntry() {
  const [isVisible, setIsVisible] = useState(false);
  const [phase, setPhase] = useState<"boot" | "scan" | "resolve" | "warp" | "done">("boot");
  const [progress, setProgress] = useState(0);

  const dismiss = useCallback(() => {
    if (typeof window !== "undefined") {
      sessionStorage.setItem("nexus-boot-sequence-seen", "true");
    }
    setPhase("warp");
    setTimeout(() => {
      setIsVisible(false);
      setPhase("done");
    }, 600);
  }, []);

  useEffect(() => {
    // Check if user already saw the boot sequence this session
    const seen = sessionStorage.getItem("nexus-boot-sequence-seen");
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (seen === "true" || prefersReducedMotion) {
      return;
    }

    const t0 = setTimeout(() => setIsVisible(true), 0);

    // Progress bar counter animation
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + Math.floor(Math.random() * 8 + 4);
      });
    }, 90);

    // Timeline phases
    const t1 = setTimeout(() => setPhase("scan"), 800);
    const t2 = setTimeout(() => setPhase("resolve"), 2100);
    const t3 = setTimeout(() => dismiss(), 3800);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        dismiss();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      clearTimeout(t0);
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearInterval(progressInterval);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [dismiss]);

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      {phase !== "done" && (
        <motion.div
          key="cyberspace-entry-overlay"
          initial={{ opacity: 1 }}
          animate={{
            opacity: phase === "warp" ? 0 : 1,
            scale: phase === "warp" ? 1.05 : 1,
            filter: phase === "warp" ? "blur(8px)" : "blur(0px)",
          }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[99999] bg-[#030306] flex flex-col items-center justify-center overflow-hidden select-none"
        >
          {/* Ambient Cyber Grid & Radial Space Glow */}
          <div
            className="absolute inset-0 pointer-events-none opacity-25"
            style={{
              backgroundImage: `
                linear-gradient(to right, rgba(99, 102, 241, 0.15) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(99, 102, 241, 0.15) 1px, transparent 1px)
              `,
              backgroundSize: "48px 48px",
              maskImage: "radial-gradient(circle at center, black 40%, transparent 85%)",
            }}
          />

          {/* Deep Ambient Energy Orbs */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-purple-600/15 via-blue-600/15 to-cyan-400/10 rounded-full blur-[120px] pointer-events-none" />

          {/* Top Telemetry Header */}
          <div className="absolute top-6 left-6 right-6 flex items-center justify-between text-[11px] font-mono tracking-widest text-zinc-400 z-10">
            <div className="flex items-center gap-3">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="text-white font-semibold tracking-wider">
                NEXUS // RIT.NODE.2026
              </span>
              <span className="hidden sm:inline text-zinc-600">|</span>
              <span className="hidden sm:inline text-zinc-500">
                LAT 17.0458° N, LONG 74.2638° E
              </span>
            </div>

            <button
              onClick={dismiss}
              className="px-3.5 py-1.5 rounded-lg bg-zinc-900/80 border border-zinc-700/60 text-zinc-300 hover:text-white hover:border-purple-400 hover:bg-purple-950/40 transition-all cursor-pointer font-mono text-[11px] font-semibold tracking-wider shadow-sm"
              aria-label="Skip initialization sequence"
            >
              SKIP [ESC]
            </button>
          </div>

          {/* Center Stage: High-Fidelity Emblem and Holographic Cage */}
          <div className="relative flex flex-col items-center justify-center max-w-lg w-full px-6 z-10">
            {/* Holographic Concentric Pulse Rings */}
            <div className="relative flex items-center justify-center">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{
                  scale: phase === "scan" || phase === "resolve" ? [1, 1.25, 1.45] : 0.8,
                  opacity: phase === "scan" || phase === "resolve" ? [0.4, 0.2, 0] : 0,
                }}
                transition={{ duration: 2.4, repeat: Infinity, ease: "easeOut" }}
                className="absolute w-64 h-64 rounded-full border border-cyan-500/30 pointer-events-none"
              />
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{
                  scale: phase === "scan" || phase === "resolve" ? [1, 1.35, 1.6] : 0.8,
                  opacity: phase === "scan" || phase === "resolve" ? [0.3, 0.1, 0] : 0,
                }}
                transition={{ duration: 2.4, delay: 0.6, repeat: Infinity, ease: "easeOut" }}
                className="absolute w-64 h-64 rounded-full border border-purple-500/30 pointer-events-none"
              />

              {/* Emblem Container with Cyber Border */}
              <motion.div
                initial={{ scale: 0.85, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-2xl p-2 bg-[#090912] border-2 border-purple-500/40 shadow-[0_0_50px_rgba(99,102,241,0.25)] flex items-center justify-center overflow-hidden"
              >
                {/* Official Crisp 3D Isometric Emblem */}
                <div className="relative w-full h-full rounded-xl overflow-hidden bg-black flex items-center justify-center">
                  <Image
                    src="/images/nexus-official-mark.jpg"
                    alt="Official NEXUS Emblem"
                    width={176}
                    height={176}
                    priority
                    className="w-full h-full object-cover rounded-xl"
                  />

                  {/* High-Tech Sweep Scanline */}
                  {phase === "scan" && (
                    <motion.div
                      initial={{ top: "-20%" }}
                      animate={{ top: "120%" }}
                      transition={{ duration: 1.2, ease: "easeInOut" }}
                      className="absolute left-0 right-0 h-2 bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_20px_#38bdf8,0_0_40px_#a855f7] pointer-events-none"
                    />
                  )}
                </div>

                {/* Corner Tech Accents */}
                <span className="absolute top-1 left-1 w-2 h-2 border-t-2 border-l-2 border-cyan-400" />
                <span className="absolute top-1 right-1 w-2 h-2 border-t-2 border-r-2 border-cyan-400" />
                <span className="absolute bottom-1 left-1 w-2 h-2 border-b-2 border-l-2 border-cyan-400" />
                <span className="absolute bottom-1 right-1 w-2 h-2 border-b-2 border-r-2 border-cyan-400" />
              </motion.div>
            </div>

            {/* Audio/Frequency Equalizer Waves */}
            <div className="flex items-center gap-1 mt-6 h-6">
              {[18, 28, 14, 32, 20, 36, 12, 24, 30, 16, 26, 10].map((height, i) => (
                <motion.span
                  key={i}
                  animate={{
                    height: phase === "scan" || phase === "resolve" ? [height * 0.4, height, height * 0.3] : 4,
                  }}
                  transition={{
                    duration: 0.6 + (i % 3) * 0.2,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut",
                  }}
                  className="w-1 rounded-full bg-gradient-to-t from-purple-600 to-cyan-400"
                />
              ))}
            </div>

            {/* Typographic Resolution */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{
                opacity: phase === "resolve" || phase === "warp" ? 1 : 0.4,
                y: phase === "resolve" || phase === "warp" ? 0 : 10,
              }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="mt-6 text-center space-y-2"
            >
              <div className="flex items-center justify-center gap-2">
                <span className="text-2xl sm:text-3xl font-black tracking-[0.2em] text-white font-mono uppercase drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]">
                  NEXUS
                </span>
                <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
              </div>

              <div className="text-xs font-mono tracking-[0.18em] text-zinc-300 uppercase font-semibold">
                INNOVATION &amp; LEADERSHIP COLLECTIVE
              </div>

              <div className="text-[11px] font-mono tracking-widest text-purple-400/90 uppercase">
                Rajarambapu Institute of Technology
              </div>

              <div className="pt-2 text-xs font-mono tracking-[0.25em] text-cyan-300 font-bold">
                BUILD. LEAD. CONNECT.
              </div>
            </motion.div>

            {/* Initializing Progress Indicator */}
            <div className="w-48 sm:w-64 mt-6 space-y-2">
              <div className="flex justify-between text-[10px] font-mono text-zinc-500">
                <span>SYSTEM SYNCHRONIZATION</span>
                <span className="text-cyan-400 font-bold">{Math.min(progress, 100)}%</span>
              </div>
              <div className="h-1 w-full bg-zinc-900 rounded-full overflow-hidden border border-zinc-800">
                <div
                  className="h-full bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-400 transition-all duration-150 rounded-full"
                  style={{ width: `${Math.min(progress, 100)}%` }}
                />
              </div>
            </div>
          </div>

          {/* Bottom Telemetry Footer */}
          <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-[10px] font-mono tracking-widest text-zinc-500 z-10">
            <span className="hidden sm:inline">ARCHITECTURE: NEXT.JS // REACT 19 // RIT GUILD</span>
            <span className="text-purple-400/80">ISLAMPUR CAMPUS CORE ACTIVE</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
