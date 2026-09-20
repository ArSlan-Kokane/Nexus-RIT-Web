"use client";

import { SocialLinks } from "@/components/common/social-links";
import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/ui/container";
import type { DepartmentInfo, TeamMember } from "@/types";
import {
  Briefcase,
  CheckCircle2,
  Code2,
  HeartHandshake,
  Megaphone,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import { motion } from "framer-motion";

interface TeamContentProps {
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

export default function TeamContent({ departments, members }: TeamContentProps) {
  const [selectedDept, setSelectedDept] = useState<string>("ALL");

  const filteredMembers =
    selectedDept === "ALL"
      ? members
      : members.filter((m) => m.department === selectedDept);

  return (
    <div className="flex w-full flex-col py-12 md:py-20 space-y-16">
      {/* 1. Page Header */}
      <section>
        <Container size="xl">
          <div className="max-w-4xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/40 border border-blue-800/40 text-xs font-mono text-blue-300">
              <ShieldCheck className="h-3.5 w-3.5 text-blue-400" />
              <span>DIRECTORATE GOVERNANCE // RIT CHAPTER</span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white uppercase">
              The Directorate
            </h1>
            <p className="text-base sm:text-lg text-zinc-400 leading-relaxed max-w-3xl">
              NEXUS is governed through high-autonomy functional divisions. Our directors and leads oversee software architecture, hackathon acceleration, media narrative, and campus operations at Rajarambapu Institute of Technology.
            </p>
          </div>

          {/* Department Navigation Bar */}
          <div className="mt-10 flex flex-wrap gap-2 border-b border-[#1c1c27] pb-4">
            <button
              onClick={() => setSelectedDept("ALL")}
              className={`px-4 py-2 rounded-lg text-xs font-mono font-medium transition-all ${
                selectedDept === "ALL"
                  ? "bg-blue-600 text-white shadow-[0_0_15px_rgba(59,130,246,0.25)]"
                  : "bg-[#0a0a0f] border border-[#1c1c27] text-zinc-400 hover:text-white hover:border-zinc-700"
              }`}
            >
              ALL DIVISIONS ({members.length})
            </button>
            {departments.map((dept) => {
              const Icon = deptIcons[dept.key] || Code2;
              const isSelected = selectedDept === dept.key;
              return (
                <button
                  key={dept.key}
                  onClick={() => setSelectedDept(dept.key)}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-mono font-medium transition-all ${
                    isSelected
                      ? "bg-blue-600 text-white shadow-[0_0_15px_rgba(59,130,246,0.25)]"
                      : "bg-[#0a0a0f] border border-[#1c1c27] text-zinc-400 hover:text-white hover:border-zinc-700"
                  }`}
                >
                  <Icon className="h-3.5 w-3.5" />
                  <span>{dept.name}</span>
                </button>
              );
            })}
          </div>
        </Container>
      </section>

      {/* 2. Directorate Leadership Dossiers */}
      <section>
        <Container size="xl">
          <div className="space-y-8">
            <div className="flex items-center justify-between border-b border-[#1c1c27] pb-4">
              <h2 className="text-sm font-mono uppercase tracking-widest text-zinc-400 font-bold">
                Directorate Roster ({filteredMembers.length})
              </h2>
              <span className="text-xs font-mono text-zinc-600">ACADEMIC SESSION 2025–2026</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredMembers.map((member) => {
                const isTBD = member.name.includes("TBD");
                const DeptIcon = deptIcons[member.department] || Code2;

                return (
                  <motion.div
                    key={member.id}
                    className={`p-8 rounded-2xl border transition-all duration-300 relative overflow-hidden flex flex-col justify-between ${
                      isTBD
                        ? "bg-[#07070a] border-[#1a1a24] opacity-90"
                        : "bg-[#0c0c14] border-[#1f1f2e] hover:border-blue-500/40 shadow-sm"
                    }`}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <div className="space-y-6">
                      <div className="flex items-start justify-between gap-4 border-b border-[#1c1c27] pb-4">
                        <div className="flex items-center gap-3">
                          <div className="h-12 w-12 rounded-xl bg-blue-950/40 border border-blue-800/30 flex items-center justify-center text-blue-400">
                            {isTBD ? (
                              <Sparkles className="h-6 w-6 text-zinc-500" />
                            ) : (
                              <DeptIcon className="h-6 w-6" />
                            )}
                          </div>
                          <div>
                            <span className="text-[11px] font-mono uppercase tracking-widest text-zinc-500">
                              {member.department.replace(/_/g, " ")}
                            </span>
                            <h3 className="text-xl font-bold text-white tracking-tight">
                              {isTBD ? "Executive Appointee Pending" : member.name}
                            </h3>
                          </div>
                        </div>

                        <Badge variant={isTBD ? "outline" : "accent"}>
                          {isTBD ? "Induction Pending" : member.role}
                        </Badge>
                      </div>

                      <div className="space-y-3">
                        <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                          {member.bio}
                        </p>

                        {member.responsibilities && (
                          <div className="p-3 rounded-lg bg-[#07070c] border border-[#1a1a24] text-xs font-mono text-zinc-400 flex items-start gap-2">
                            <span className="text-blue-400 mt-0.5">►</span>
                            <span>Mandate: {member.responsibilities}</span>
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="pt-6 mt-6 border-t border-[#1c1c27] flex items-center justify-between">
                      <span className="text-xs font-mono text-zinc-500">
                        {isTBD ? "Spring 2026 Confirmation" : member.tenure}
                      </span>

                      {!isTBD && <SocialLinks socials={member.socials} />}
                      {isTBD && (
                        <Link href="/join">
                          <span className="text-xs font-mono text-blue-400 hover:text-blue-300">
                            Apply for Directorate Role →
                          </span>
                        </Link>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </Container>
      </section>

      {/* 3. Operational Division Mandates */}
      <section className="border-t border-[#1c1c27] pt-16">
        <Container size="xl">
          <div className="space-y-8">
            <div className="max-w-2xl space-y-2">
              <span className="text-xs font-mono text-blue-400 uppercase tracking-widest font-semibold">
                ORGANIZATIONAL CHARTER
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Division Responsibilities
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {departments.map((dept, idx) => {
                const Icon = deptIcons[dept.key] || Code2;
                return (
                  <div
                    key={dept.key}
                    className="p-6 rounded-2xl bg-[#08080c] border border-[#1c1c27] space-y-4 hover:border-zinc-700 transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono text-zinc-600 font-bold">
                        0{idx + 1}
                      </span>
                      <Icon className="h-4 w-4 text-blue-400" />
                    </div>

                    <div>
                      <h3 className="text-lg font-bold text-white">{dept.name}</h3>
                      <p className="text-xs font-mono text-blue-400 mt-0.5">{dept.leadRole}</p>
                    </div>

                    <p className="text-xs text-zinc-400 leading-relaxed">
                      {dept.shortDescription}
                    </p>

                    <div className="pt-3 border-t border-[#1c1c27] space-y-1.5">
                      {dept.responsibilities.map((r, rIdx) => (
                        <div key={rIdx} className="flex items-start gap-2 text-[11px] text-zinc-400">
                          <CheckCircle2 className="h-3 w-3 text-blue-500/70 shrink-0 mt-0.5" />
                          <span>{r}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
