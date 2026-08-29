import { eventsData } from "@/data/events";
import { EventItem, EventStatus } from "@/types";

export async function getEvents(): Promise<EventItem[]> {
  return eventsData;
}

export async function getEventBySlug(slug: string): Promise<EventItem | null> {
  return eventsData.find((e) => e.slug === slug) || null;
}

export async function getEventsByStatus(status: EventStatus): Promise<EventItem[]> {
  return eventsData.filter((e) => e.status === status);
}

export async function getFeaturedEvents(): Promise<EventItem[]> {
  return eventsData.filter((e) => e.featured);
}
