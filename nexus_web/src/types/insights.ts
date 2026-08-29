export interface InsightArticle {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content?: string;
  category: "TECH_DEEP_DIVE" | "CASE_STUDY" | "HACKATHON_STORY" | "COMMUNITY";
  author: {
    name: string;
    role: string;
    avatarUrl?: string;
  };
  publishedAt: string;
  readTime: string;
  tags: string[];
  featured?: boolean;
}
