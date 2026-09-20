import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/ui/container";
import { getAlumni } from "@/lib/data";
import { CheckCircle2, GraduationCap, History, UserCheck } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Legacy & Alumni Timeline",
  description:
    "NEXUS alumni, founding members, and legacy leadership board at Rajarambapu Institute of Technology (RIT).",
};

export default async function AlumniPage() {
  const alumni = await getAlumni();

  return (
    <div className="flex flex-col w-full py-12 md:py-20 space-y-16">
      {/* 1. Header */}
      <Container size="xl">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/40 border border-blue-800/40 text-xs font-mono text-blue-300">
            <History className="h-3.5 w-3.5 text-blue-400" />
            <span>NEXUS INSTITUTIONAL HERITAGE & LINEAGE</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white uppercase">
            Legacy Timeline
          </h1>
          <p className="text-base sm:text-lg text-zinc-400 leading-relaxed font-normal">
            Honoring the past directors, founding architects, and student innovators who established the core foundations of NEXUS at Rajarambapu Institute of Technology (RIT).
          </p>
        </div>

        {/* 2. Chronological Legacy Timeline */}
        <div className="mt-16 space-y-8">
          <div className="flex items-center justify-between border-b border-[#1c1c27] pb-4">
            <h2 className="text-sm font-mono uppercase tracking-widest text-zinc-400 font-bold">
              Founding Cohorts & Leadership Alumni ({alumni.length})
            </h2>
            <span className="text-xs font-mono text-zinc-600">RIT CHAPTER LINEAGE</span>
          </div>

          <div className="relative border-l border-[#1c1c27] ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-12">
            {alumni.map((member) => (
              <div key={member.id} className="relative group">
                {/* Timeline node */}
                <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 h-6 w-6 rounded-full bg-[#050507] border-2 border-blue-500 flex items-center justify-center">
                  <div className="h-2 w-2 rounded-full bg-blue-400" />
                </div>

                <div className="p-8 rounded-3xl bg-[#09090f] border border-[#1c1c27] hover:border-zinc-700 hover:bg-[#0d0d16] transition-all space-y-6">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#14141c] pb-4">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-xl bg-blue-950/40 border border-blue-800/30 flex items-center justify-center text-blue-400 font-mono text-xs font-bold">
                        <GraduationCap className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                          {member.name}
                        </h3>
                        <p className="text-xs font-mono text-blue-400">{member.previousRole}</p>
                      </div>
                    </div>

                    <Badge variant="accent">{member.batch}</Badge>
                  </div>

                  {member.bio && (
                    <p className="text-sm text-zinc-300 leading-relaxed max-w-3xl">
                      {member.bio}
                    </p>
                  )}

                  {member.achievements && member.achievements.length > 0 && (
                    <div className="space-y-3 pt-4 border-t border-[#14141c]">
                      <span className="text-xs font-mono uppercase tracking-widest text-zinc-500 block">
                        Institutional Milestones & Contributions:
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {member.achievements.map((ach, achIdx) => (
                          <div
                            key={achIdx}
                            className="p-3 rounded-xl bg-[#06060a] border border-[#161622] text-xs text-zinc-300 flex items-start gap-2.5"
                          >
                            <CheckCircle2 className="h-3.5 w-3.5 text-blue-400 shrink-0 mt-0.5" />
                            <span>{ach}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3. Institutional Mentorship Pledge */}
        <div className="mt-16 p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-blue-950/20 via-[#0a0a0f] to-[#050507] border border-blue-900/30 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono text-blue-400 uppercase tracking-widest font-semibold">
              <UserCheck className="h-4 w-4" />
              <span>NEXUS ALUMNI ADVISORY COUNCIL</span>
            </div>
            <h3 className="text-xl font-bold text-white">
              Transferring Knowledge Across Student Cohorts
            </h3>
            <p className="text-xs sm:text-sm text-zinc-400 max-w-2xl leading-relaxed">
              Our alumni actively return as hackathon evaluators, architecture sounding boards, and career mentors for current undergraduate members.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
}
