import { projectsData } from "@/data/projects";
import { ProjectCategory, ProjectItem } from "@/types";

export async function getProjects(): Promise<ProjectItem[]> {
  return projectsData;
}

export async function getProjectBySlug(slug: string): Promise<ProjectItem | null> {
  return projectsData.find((p) => p.slug === slug) || null;
}

export async function getFeaturedProjects(): Promise<ProjectItem[]> {
  return projectsData.filter((p) => p.featured);
}

export async function getProjectsByCategory(category: ProjectCategory): Promise<ProjectItem[]> {
  return projectsData.filter((p) => p.category === category);
}
