export type ResourceType =
  | "ROADMAP"
  | "DOCUMENTATION"
  | "CHEATSHEET"
  | "TOOL"
  | "STARTER_KIT";

export interface ResourceItem {
  id: string;
  title: string;
  description: string;
  category: "WEB_DEV" | "AI_DATA" | "DEVOPS_CLOUD" | "SYSTEMS_CORE" | "HACKATHONS";
  type: ResourceType;
  url: string;
  isExternal: boolean;
  tags: string[];
}
