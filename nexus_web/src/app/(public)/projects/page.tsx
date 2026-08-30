import type { Metadata } from "next";
import { getProjects } from "@/lib/data";
import ProjectsContent from "./projects-content";

export const metadata: Metadata = {
  title: "Projects Showcase",
  description:
    "Explore software platforms, IoT hardware, and AI tools built by NEXUS members at RIT.",
};

export default async function ProjectsPage() {
  const projects = await getProjects();
  return <ProjectsContent projects={projects} />;
}
