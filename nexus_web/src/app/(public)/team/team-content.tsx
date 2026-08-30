"use client";

import { SocialLinks } from "@/components/common/social-links";
import { SectionHeading } from "@/components/common/section-heading";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import type { DepartmentInfo, TeamMember } from "@/types";
import { motion } from "framer-motion";

interface TeamContentProps {
  departments: DepartmentInfo[];
  members: TeamMember[];
}

export default function TeamContent({ departments, members }: TeamContentProps) {
  return (
    <div className="flex w-full flex-col">
      <section className="border-b border-[#1c1c27] py-16 tech-grid-bg md:py-24">
        <Container size="xl">
          <motion.div
            className="max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <SectionHeading
              badge="THE COLLECTIVE"
              title="People with range."
              description="NEXUS is organized as a working collective: small teams, clear ownership, and enough autonomy to turn ambitious ideas into durable outcomes."
            />
          </motion.div>
        </Container>
      </section>

      <section className="py-16 md:py-24">
        <Container size="xl">
          <div className="mb-8 flex items-end justify-between gap-4 border-b border-[#1c1c27] pb-5">
            <div>
              <p className="text-xs font-mono uppercase tracking-[0.2em] text-blue-400">01 / Leadership</p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-white">Core operators</h2>
            </div>
            <span className="hidden text-xs font-mono text-zinc-500 sm:block">{members.length} active leads</span>
          </div>

          <motion.div
            className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {members.map((member) => (
              <Card key={member.id} hoverable className="flex h-full flex-col">
                <CardHeader>
                  <div className="mb-2 flex items-start justify-between gap-3">
                    <Badge variant="accent">{member.department.replaceAll("_", " ")}</Badge>
                    <span className="text-[10px] font-mono uppercase tracking-[0.16em] text-zinc-500">{member.tenure}</span>
                  </div>
                  <CardTitle>{member.name}</CardTitle>
                  <p className="text-sm font-mono text-blue-400">{member.role}</p>
                </CardHeader>
                <CardContent className="flex flex-1 flex-col justify-between gap-5">
                  <div className="space-y-3 text-sm leading-relaxed text-zinc-400">
                    <p>{member.bio}</p>
                    {member.responsibilities && <p className="text-xs text-zinc-500">{member.responsibilities}</p>}
                  </div>
                  <div className="border-t border-[#1c1c27] pt-4">
                    <SocialLinks
                      socials={member.socials}
                      iconClassName="text-zinc-500 hover:text-white"
                    />
                  </div>
                </CardContent>
              </Card>
            ))}
          </motion.div>
        </Container>
      </section>

      <section className="border-t border-[#1c1c27] py-16 md:py-24">
        <Container size="xl">
          <div className="mb-8 flex items-end justify-between gap-4 border-b border-[#1c1c27] pb-5">
            <div>
              <p className="text-xs font-mono uppercase tracking-[0.2em] text-blue-400">02 / Divisions</p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-white">How we operate</h2>
            </div>
          </div>

          <motion.div
            className="grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-[#1c1c27] bg-[#1c1c27] md:grid-cols-2 lg:grid-cols-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {departments.map((department, index) => (
              <article key={department.key} className="bg-[#0c0c10] p-6 transition-colors hover:bg-[#111117] sm:p-8">
                <p className="text-xs font-mono text-zinc-600">0{index + 1}</p>
                <h3 className="mt-5 text-lg font-semibold text-white">{department.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-zinc-400">{department.shortDescription}</p>
                <p className="mt-5 text-xs font-mono uppercase tracking-[0.16em] text-blue-400">{department.leadRole}</p>
                <ul className="mt-4 space-y-2 text-xs leading-relaxed text-zinc-500">
                  {department.responsibilities.map((responsibility) => (
                    <li key={responsibility} className="flex gap-2">
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-zinc-600" />
                      <span>{responsibility}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </motion.div>
        </Container>
      </section>
    </div>
  );
}
