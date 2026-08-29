import { resourcesData } from "@/data/resources";
import { ResourceItem } from "@/types";

export async function getResources(): Promise<ResourceItem[]> {
  return resourcesData;
}
