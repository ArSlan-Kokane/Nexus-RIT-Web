"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { BlueLine } from "@/components/ui/blue-line";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { DepartmentInfo, TeamMember } from "@/types";
import {
  ArrowRight,
  ArrowUpRight,
  Briefcase,
  Code2,
  HeartHandshake,
  Megaphone,
  ShieldCheck,
  User,
} from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface DirectorateListProps {
  departments: DepartmentInfo[];
  members: TeamMember[];
}

const deptIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  ADMINISTRATION: ShieldCheck,
  TECHNOLOGY: Code2,
  MEDIA_AND_MARKETING: Megaphone,
  OPERATIONS: Briefcase,
  PARTNERSHIPS: HeartHandshake,
};

export function DirectorateList({ departments, members }: DirectorateListProps) {
  const [activeDeptKey, setActiveDeptKey] = useState<string>(
    departments[1]?.key || departments[0]?.key || "TECHNOLOGY"
  );
  const headerRef = useScrollReveal();

  const activeDept =
    departments.find((d) => d.key === activeDeptKey) || departments[0];
  const activeLead = members.find(
    (m) => m.department === activeDept?.key && m.isCoreLead
  );
  const DeptIcon = activeDept ? deptIcons[activeDept.key] || Code2 : Code2;

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const currentIndex = departments.findIndex((d) => d.key === activeDeptKey);
      if (e.key === "ArrowDown" || e.key === "ArrowRight") {
        const nextIndex = (currentIndex + 1) % departments.length;
        setActiveDeptKey(departments[nextIndex].key);
      } else if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
        const prevIndex =
          (currentIndex - 1 + departments.length) % departments.length;
        setActiveDeptKey(departments[prevIndex].key);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [departments, activeDeptKey]);

  const contentVariants = {
    enter: {
      x: 0,
      opacity: 1,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 },
      },
    },
    exit: {
      x: -20,
      opacity: 0,
      transition: {
        x: { duration: 0.15 },
        opacity: { duration: 0.15 },
      },
    },
  };

  return (
    <section className="py-24 bg-[#050507] border-b border-[#1c1c27]">
      <Container size="xl">
        <div className="space-y-12">
          {/* Section Header */}
          <motion.div
            ref={headerRef.elementRef}
            className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#1c1c27] pb-8 scroll-reveal"
            initial={{ opacity: 0, y: 20 }}
            animate={headerRef.isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4 }}
          >
            <div className="space-y-3 max-w-2xl">
              <div className="text-xs font-mono text-blue-400 uppercase tracking-widest font-semibold flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                <span>DIRECTORATE SYSTEM</span>
              </div>
              <BlueLine orientation="horizontal" variant="draw" delay={0.2} />
              <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white uppercase">
                The 5 Functional Divisions
              </h2>
              <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
                Structured for technical execution, institutional governance, and
                high-quality creative output across RIT.
              </p>
            </div>

            <Link href="/team">
              <Button variant="outline" size="sm" className="font-mono text-xs">
                <span>View Full Leadership Directory</span>
                <ArrowRight className="h-3.5 w-3.5 ml-1.5" />
              </Button>
            </Link>
          </motion.div>

          {/* Interactive Directorate Layout: Left List, Right Inspector */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left: Numbered Directorate List */}
            <div className="lg:col-span-6 space-y-2">
              {departments.map((dept, index) => {
                const isActive = dept.key === activeDeptKey;
                const numberFormatted = String(index + 1).padStart(2, "0");

                return (
                  <button
                    key={dept.key}
                    onClick={() => setActiveDeptKey(dept.key)}
                    className={`w-full text-left p-5 sm:p-6 rounded-xl border transition-all duration-200 cursor-pointer flex items-center justify-between group ${
                      isActive
                        ? "bg-[#111118] border-blue-500/50 shadow-[0_0_25px_rgba(59,130,246,0.1)]"
                        : "bg-[#08080c] border-[#1c1c27] hover:border-zinc-700 hover:bg-[#0e0e14]"
                    }`}
                    data-interactive="true"
                  >
                    <div className="flex items-center gap-4 sm:gap-6">
                      <span
                        className={`text-lg sm:text-xl font-mono font-bold transition-colors ${
                          isActive
                            ? "text-blue-400"
                            : "text-zinc-600 group-hover:text-zinc-400"
                        }`}
                      >
                        {numberFormatted}
                      </span>
                      <div>
                        <h3
                          className={`text-base sm:text-lg font-bold tracking-tight uppercase transition-colors ${
                            isActive
                              ? "text-white"
                              : "text-zinc-300 group-hover:text-white"
                          }`}
                        >
                          {dept.name}
                        </h3>
                        <p className="text-xs text-zinc-500 font-mono mt-0.5">
                          {dept.leadRole}
                        </p>
                      </div>
                    </div>

                    <div
                      className={`h-8 w-8 rounded-lg flex items-center justify-center transition-all ${
                        isActive
                          ? "bg-blue-500/20 text-blue-400 border border-blue-500/30"
                          : "text-zinc-600 group-hover:text-zinc-300"
                      }`}
                    >
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Right: Live Directorate Inspector Pane */}
            <AnimatePresence mode="wait">
              {activeDept && (
                <motion.div
                  key={activeDept.key}
                  className="lg:col-span-6 bg-[#09090e] border border-[#1f1f2c] rounded-2xl p-8 sm:p-10 space-y-8 relative overflow-hidden"
                  variants={contentVariants}
                  initial="exit"
                  animate="enter"
                  exit="exit"
                >
                  {/* Background glow accent */}
                  <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/5 blur-[90px] rounded-full pointer-events-none" />

                  {/* Division Identity */}
                  <div className="space-y-4 relative z-10">
                    <div className="flex items-center justify-between border-b border-[#1c1c27] pb-4">
                      <div className="flex items-center gap-3">
                        <div className="p-2.5 rounded-xl bg-blue-950/60 border border-blue-800/40 text-blue-400">
                          <DeptIcon className="h-6 w-6" />
                        </div>
                        <div>
                          <span className="text-xs font-mono text-zinc-500 uppercase">
                            Division Inspector
                          </span>
                          <h4 className="text-xl font-bold text-white uppercase">
                            {activeDept.name}
                          </h4>
                        </div>
                      </div>
                      <Badge variant="accent">{activeDept.leadRole}</Badge>
                    </div>

                    <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
                      {activeDept.shortDescription}
                    </p>
                  </div>

                  {/* Leadership Information */}
                  {activeLead && (
                    <div className="p-4 rounded-xl bg-[#101017] border border-[#222230] space-y-2 relative z-10">
                      <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider">
                        Current Directorate Leadership:
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="h-10 w-10 rounded-lg bg-zinc-800 flex items-center justify-center text-zinc-400 font-mono font-bold text-sm">
                            <User className="h-5 w-5 opacity-80" />
                          </div>
                          <div>
                            <div className="text-base font-bold text-white">
                              {activeLead.name}
                            </div>
                            <div className="text-xs text-blue-400 font-mono">
                              {activeLead.role}
                            </div>
                          </div>
                        </div>
                        <span className="text-[11px] font-mono text-zinc-500">
                          {activeLead.tenure}
                        </span>
                      </div>
                    </div>
                  )}

                  {/* Core Responsibilities List */}
                  <div className="space-y-3 relative z-10">
                    <span className="text-xs font-mono uppercase tracking-widest text-zinc-400 font-bold block">
                      Core Operational Mandates:
                    </span>
                    <div className="space-y-2">
                      {activeDept.responsibilities.map((resp, idx) => (
                        <div
                          key={idx}
                          className="p-3 rounded-lg bg-[#0c0c12] border border-[#1c1c27] text-xs text-zinc-300 flex items-start gap-2.5"
                        >
                          <span className="text-blue-400 font-mono font-bold mt-0.5">
                            •
                          </span>
                          <span>{resp}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Direct Action Link */}
                  <div className="pt-2 border-t border-[#1c1c27] flex items-center justify-between relative z-10">
                    <Link
                      href="/team"
                      className="text-xs text-blue-400 hover:text-blue-300 font-mono font-semibold flex items-center gap-1.5"
                    >
                      <span>Explore Division in Team Directory</span>
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </Link>
                    <Link href="/join">
                      <Button size="sm" variant="secondary" className="text-xs h-8">
                        Apply for this Track
                      </Button>
                    </Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </Container>
    </section>
  );
}