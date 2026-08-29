import { ResourceItem } from "@/types";

export const resourcesData: ResourceItem[] = [
  {
    id: "system-design-roadmap",
    title: "Pragmatic System Design for Engineering Students",
    description: "Curated collection of distributed systems fundamentals, caching patterns, database indexing, and scaling blueprints.",
    category: "SYSTEMS_CORE",
    type: "ROADMAP",
    url: "https://github.com/nexus-rit/system-design-guide",
    isExternal: true,
    tags: ["Systems", "Architecture", "Distributed"],
  },
  {
    id: "fullstack-ts-starter",
    title: "Next.js & TypeScript Production Scaffold",
    description: "Battle-tested template with Tailwind CSS, strict type validation, and pre-configured linting rules for collegiate hackathons.",
    category: "WEB_DEV",
    type: "STARTER_KIT",
    url: "https://github.com/nexus-rit/nextjs-starter",
    isExternal: true,
    tags: ["TypeScript", "Next.js", "Tailwind"],
  },
  {
    id: "applied-ml-curriculum",
    title: "Practical Machine Learning & Generative AI Toolkit",
    description: "Hands-on notebooks covering embeddings, retrieval augmentation, PyTorch basics, and model deployment on cloud runtimes.",
    category: "AI_DATA",
    type: "DOCUMENTATION",
    url: "https://github.com/nexus-rit/applied-ml-guide",
    isExternal: true,
    tags: ["AI", "PyTorch", "LLM", "Python"],
  },
];
