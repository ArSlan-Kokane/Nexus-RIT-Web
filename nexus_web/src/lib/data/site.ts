import { siteConfig } from "@/data/site-config";
import { SiteConfig } from "@/types";

export async function getSiteConfig(): Promise<SiteConfig> {
  return siteConfig;
}
