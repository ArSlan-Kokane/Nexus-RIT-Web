import { Container } from "@/components/ui/container";
import { getEvents } from "@/lib/data";
import { Calendar } from "lucide-react";
import type { Metadata } from "next";
import { EventsCurtain } from "./events-curtain";

export const metadata: Metadata = {
  title: "Event Horizon & Technical Sprints",
  description:
    "Upcoming architecture bootcamps, open innovation hackathons, and technical workshops hosted by NEXUS at RIT.",
};

export default async function EventsPage() {
  await getEvents();

  return (
    <div className="flex flex-col w-full py-12 md:py-20 space-y-16">
      {/* 1. Header */}
      <Container size="xl">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/40 border border-blue-800/40 text-xs font-mono text-blue-300">
            <Calendar className="h-3.5 w-3.5 text-blue-400" />
            <span>NEXUS CHRONOLOGICAL SPRINT HORIZON</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white uppercase">
            Event Horizon
          </h1>
          <p className="text-base sm:text-lg text-zinc-400 leading-relaxed font-normal">
            Hands-on technical bootcamps, architecture deep-dives, and competitive hackathons organized by NEXUS at Rajarambapu Institute of Technology.
          </p>
        </div>

        {/* 2. Curtain Effect Section */}
        <EventsCurtain />
      </Container>
    </div>
  );
}
