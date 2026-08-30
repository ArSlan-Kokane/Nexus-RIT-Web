"use client";

import { ExternalLink } from "@/components/common/external-link";
import { SectionHeading } from "@/components/common/section-heading";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import type { ProjectItem } from "@/types";
import { Code2 } from "lucide-react";
import { motion } from "framer-motion";

interface ProjectsContentProps {
  projects: ProjectItem[];
}

const categoryLabels: Record<ProjectItem["category"], string> = {
  WEB: "Web",
  AI_ML: "AI / ML",
  IOT_EMBEDDED: "IoT / Embedded",
  MOBILE_APP: "Mobile",
  OPEN_SOURCE: "Open Source",
  SYSTEMS: "Systems",
};

export default function ProjectsContent({ projects }: ProjectsContentProps) {
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
              badge="PROJECT ARCHIVE"
              title="Built to ship."
              description="A living record of the software, hardware, and applied research initiatives moving from NEXUS into the real world."
            />
          </motion.div>
        </Container>
      </section>

      <section className="py-16 md:py-24">
        <Container size="xl">
          <motion.div
            className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {projects.map((project) => (
              <Card key={project.id} hoverable glow={project.featured} className="flex h-full flex-col">
                <CardHeader className="space-y-3">
                  <div className="flex items-center justify-between gap-3">
                    <Badge variant="accent">{categoryLabels[project.category]}</Badge>
                    <span className="text-xs font-mono text-zinc-500">{project.completedYear}</span>
                  </div>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <p className="text-xs font-mono text-blue-400">{project.tagline}</p>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>

                <CardContent className="flex flex-1 flex-col justify-between gap-6">
                  <div className="space-y-3">
                    <p className="text-[10px] font-mono uppercase tracking-[0.18em] text-zinc-500">Highlights</p>
                    <ul className="space-y-2 text-sm text-zinc-300">
                      {project.highlights.map((highlight) => (
                        <li key={highlight} className="flex gap-2">
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-blue-400" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-1.5">
                    {project.techStack.map((tech) => (
                      <span key={tech} className="rounded border border-zinc-800 bg-zinc-900 px-2 py-0.5 text-[10px] font-mono text-zinc-300">
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>

                <CardFooter className="justify-between gap-3 text-xs">
                  <span className="text-[11px] font-mono text-zinc-500">
                    {project.contributors.length} contributor{project.contributors.length === 1 ? "" : "s"}
                  </span>
                  <div className="flex items-center gap-3">
                    {project.githubUrl && (
                      <ExternalLink href={project.githubUrl} className="flex items-center gap-1 text-zinc-400 hover:text-white">
                        <Code2 className="h-3.5 w-3.5" />
                        Code
                      </ExternalLink>
                    )}
                    {project.liveUrl && (
                      <ExternalLink href={project.liveUrl} className="text-blue-400 hover:text-blue-300">
                        Live
                      </ExternalLink>
                    )}
                  </div>
                </CardFooter>
              </Card>
            ))}
          </motion.div>
        </Container>
      </section>
    </div>
  );
}
