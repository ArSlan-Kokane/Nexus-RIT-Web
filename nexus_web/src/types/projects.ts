export type ProjectCategory =
  | "WEB"
  | "AI_ML"
  | "IOT_EMBEDDED"
  | "MOBILE_APP"
  | "OPEN_SOURCE"
  | "SYSTEMS";

export interface ProjectContributor {
  name: string;
  role: string;
  github?: string;
  avatarUrl?: string;
}

export interface ProjectItem {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  description: string;
  category: ProjectCategory;
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  contributors: ProjectContributor[];
  featured?: boolean;
  completedYear: string;
  highlights: string[];
}
