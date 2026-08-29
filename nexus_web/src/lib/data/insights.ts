import { insightsData } from "@/data/insights";
import { InsightArticle } from "@/types";

export async function getInsights(): Promise<InsightArticle[]> {
  return insightsData;
}

export async function getInsightBySlug(slug: string): Promise<InsightArticle | null> {
  return insightsData.find((i) => i.slug === slug) || null;
}

export async function getFeaturedInsights(): Promise<InsightArticle[]> {
  return insightsData.filter((i) => i.featured);
}
