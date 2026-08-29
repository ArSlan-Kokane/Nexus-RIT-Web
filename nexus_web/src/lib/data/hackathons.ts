import { hackathonCommunityResources, hackathonsData } from "@/data/hackathons";
import { HackathonCommunityResource, HackathonItem } from "@/types";

export async function getHackathons(): Promise<HackathonItem[]> {
  return hackathonsData;
}

export async function getFeaturedHackathons(): Promise<HackathonItem[]> {
  return hackathonsData.filter((h) => h.isFeatured);
}

export async function getHackathonCommunityResources(): Promise<HackathonCommunityResource[]> {
  return hackathonCommunityResources;
}
