export interface HackathonItem {
  id: string;
  slug: string;
  title: string;
  organizer: string;
  mode: "ONLINE" | "IN_PERSON" | "HYBRID";
  dates: string;
  prizePool?: string;
  location?: string;
  description: string;
  tracks: string[];
  websiteUrl: string;
  whatsappGroupUrl?: string;
  isFeatured?: boolean;
  status: "REGISTRATIONS_OPEN" | "ONGOING" | "COMPLETED";
}

export interface HackathonCommunityResource {
  title: string;
  description: string;
  link: string;
  type: "WHATSAPP" | "DISCORD" | "GUIDE" | "TOOL";
}
