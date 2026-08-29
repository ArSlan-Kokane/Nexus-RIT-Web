export type EventCategory =
  | "WORKSHOP"
  | "HACKATHON"
  | "TECH_TALK"
  | "COMPETITION"
  | "BOOTCAMP"
  | "NETWORKING";

export type EventStatus = "UPCOMING" | "LIVE" | "CONCLUDED";

export interface EventItem {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  description: string;
  category: EventCategory;
  status: EventStatus;
  date: string;
  time: string;
  venue: string;
  bannerUrl?: string;
  registrationUrl?: string;
  isRegistrationOpen: boolean;
  featured?: boolean;
  speakers?: Array<{
    name: string;
    role: string;
    company?: string;
    avatarUrl?: string;
  }>;
  tags: string[];
}
