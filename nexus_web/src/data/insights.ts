import { InsightArticle } from "@/types";

export const insightsData: InsightArticle[] = [
  {
    id: "engineering-leadership-at-rit",
    slug: "engineering-leadership-at-rit",
    title: "The Architecture of Student Leadership: Scaling Technical Impact",
    excerpt:
      "How student clubs can move beyond ceremonial events to establish rigorous engineering standards, open-source culture, and real-world problem solving.",
    category: "COMMUNITY",
    author: {
      name: "Siddharth Pawar",
      role: "President, NEXUS",
    },
    publishedAt: "August 2026",
    readTime: "5 min read",
    tags: ["Leadership", "Community", "Strategy"],
    featured: true,
  },
  {
    id: "building-zero-overhead-web-architectures",
    slug: "building-zero-overhead-web-architectures",
    title: "Building Resilient, Low-Latency Web Platforms with Next.js & Server Components",
    excerpt:
      "A technical walkthrough of data decoupling, CSS-first micro-interactions, and maintainability strategies for modern full-stack web applications.",
    category: "TECH_DEEP_DIVE",
    author: {
      name: "Arslan Kokane",
      role: "Tech Director, NEXUS",
    },
    publishedAt: "August 2026",
    readTime: "7 min read",
    tags: ["Next.js", "TypeScript", "Architecture", "Web Performance"],
    featured: true,
  },
];
