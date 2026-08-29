import React from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { SocialLinks } from "@/components/common/social-links";
import { getDepartments, getTeamMembers } from "@/lib/data";
import { Department } from "@/types";
import { Briefcase, Code2, HeartHandshake, Layers, Megaphone, ShieldCheck, User } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Team & Leadership",
  description: "Meet the executive board and departmental directors of NEXUS — Innovation & Leadership Collective at RIT.",
};

const departmentIcons: Record<Department, React.ComponentType<{ className?: string }>> = {
  ADMINISTRATION: ShieldCheck,
  TECHNOLOGY: Code2,
  MEDIA_AND_MARKETING: Megaphone,
  OPERATIONS: Briefcase,
  PARTNERSHIPS: HeartHandshake,
};

export default async function TeamPage() {
  const [departments, members] = await Promise.all([
    getDepartments(),
    getTeamMembers(),
  ]);

  return (
    <div className="flex flex-col w-full py-12 md:py-20 space-y-16">
      {/* 1. HEADER */}
      <section>
        <Container size="lg">
          <div className="max-w-3xl">
            <Badge variant="accent" className="mb-4">
              Governance & Structure
            </Badge>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
              Executive Leadership & Board
            </h1>
            <p className="mt-6 text-base sm:text-lg text-zinc-400 leading-relaxed">
              NEXUS is organized into five specialized divisions led by student directors committed to technical excellence, community impact, and institutional leadership.
            </p>
          </div>
        </Container>
      </section>

      {/* 2. EXECUTIVE BOARD DIRECTORY */}
      <section>
        <Container size="lg">
          <div className="space-y-16">
            {departments.map((dept) => {
              const deptMembers = members.filter((m) => m.department === dept.key);
              const DeptIcon = departmentIcons[dept.key] || Layers;

              return (
                <div key={dept.key} className="space-y-8">
                  {/* Department Banner Header */}
                  <div className="border-b border-[#1c1c27] pb-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-lg bg-[#14141b] border border-[#262635] flex items-center justify-center text-blue-400">
                        <DeptIcon className="h-5 w-5" />
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold text-white tracking-tight">
                          {dept.name}
                        </h2>
                        <p className="text-xs text-zinc-400 mt-0.5">
                          {dept.shortDescription}
                        </p>
                      </div>
                    </div>
                    <Badge variant="outline" className="self-start md:self-auto">
                      Lead Role: {dept.leadRole}
                    </Badge>
                  </div>

                  {/* Members Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {deptMembers.map((member) => (
                      <Card key={member.id} hoverable className="flex flex-col justify-between bg-[#0a0a0e] border-[#1f1f2c]">
                        <CardHeader className="space-y-3">
                          <div className="flex items-start justify-between">
                            <div className="h-14 w-14 rounded-xl bg-gradient-to-br from-zinc-800 to-zinc-900 border border-zinc-700/60 flex items-center justify-center text-zinc-400">
                              <User className="h-7 w-7 opacity-70" />
                            </div>
                            <div className="flex flex-col items-end">
                              <Badge variant={member.name.includes("TBD") ? "outline" : "accent"}>
                                {member.role}
                              </Badge>
                              <span className="text-[10px] font-mono text-zinc-500 mt-1">
                                {member.tenure}
                              </span>
                            </div>
                          </div>

                          <div>
                            <CardTitle className="text-xl text-white">
                              {member.name}
                            </CardTitle>
                            <p className="text-xs font-mono text-blue-400 mt-0.5">
                              {dept.name}
                            </p>
                          </div>

                          {member.bio && (
                            <CardDescription className="text-xs text-zinc-300 leading-relaxed pt-1">
                              {member.bio}
                            </CardDescription>
                          )}
                        </CardHeader>

                        <CardContent className="space-y-3 pt-2">
                          {member.responsibilities && (
                            <div className="p-2.5 rounded-lg bg-zinc-900/60 border border-zinc-800/80 text-[11px] text-zinc-400">
                              <span className="text-zinc-500 font-mono block uppercase text-[9px] mb-0.5">
                                Responsibilities:
                              </span>
                              <span>{member.responsibilities}</span>
                            </div>
                          )}

                          <div className="pt-2 flex items-center justify-between border-t border-[#1c1c27]">
                            <span className="text-[11px] font-mono text-zinc-500">
                              {member.isCoreLead ? "Board Member" : "Core Team"}
                            </span>
                            <SocialLinks socials={member.socials} variant="ghost" />
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>
    </div>
  );
}
