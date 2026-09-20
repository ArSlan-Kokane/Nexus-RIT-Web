import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { getEvents } from "@/lib/data";
import { ArrowUpRight, Calendar, MapPin, Sparkles } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Event Horizon & Technical Sprints",
  description:
    "Upcoming architecture bootcamps, open innovation hackathons, and technical workshops hosted by NEXUS at RIT.",
};

export default async function EventsPage() {
  const events = await getEvents();
  const upcomingEvents = events.filter((e) => e.status === "UPCOMING");
  const featuredEvent = upcomingEvents[0] || events[0];

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

        {/* 2. Featured Upcoming Spotlight */}
        {featuredEvent && (
          <div className="mt-12 space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono text-blue-400 uppercase tracking-widest font-semibold">
              <Sparkles className="h-3.5 w-3.5" />
              <span>FEATURED SPRINT SPOTLIGHT</span>
            </div>

            <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-[#0e0e18] via-[#09090e] to-[#050507] border border-blue-500/40 shadow-[0_0_40px_rgba(59,130,246,0.1)] relative overflow-hidden space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#1c1c27] pb-4">
                <div className="flex items-center gap-3">
                  <span className="flex h-2.5 w-2.5 relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-500" />
                  </span>
                  <Badge variant="accent">{featuredEvent.status}</Badge>
                  <span className="text-zinc-600 font-mono">/</span>
                  <span className="text-xs font-mono text-zinc-400">{featuredEvent.category}</span>
                </div>

                <div className="flex items-center gap-2 text-xs font-mono text-blue-300">
                  <Calendar className="h-3.5 w-3.5" />
                  <span>{featuredEvent.date}</span>
                  <span>•</span>
                  <span>{featuredEvent.time}</span>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-8 space-y-3">
                  <h2 className="text-3xl sm:text-5xl font-extrabold text-white uppercase tracking-tight">
                    {featuredEvent.title}
                  </h2>
                  <p className="text-xs sm:text-sm font-mono text-blue-400">{featuredEvent.tagline}</p>
                  <p className="text-sm sm:text-base text-zinc-300 leading-relaxed pt-2">
                    {featuredEvent.description}
                  </p>

                  <div className="flex items-center gap-2 text-xs font-mono text-zinc-400 pt-2">
                    <MapPin className="h-4 w-4 text-zinc-400" />
                    <span>Venue: {featuredEvent.venue}</span>
                  </div>
                </div>

                <div className="lg:col-span-4 flex flex-col items-start lg:items-end justify-center gap-3 shrink-0">
                  {featuredEvent.isRegistrationOpen && featuredEvent.registrationUrl ? (
                    <Button
                      variant="primary"
                      size="lg"
                      href={featuredEvent.registrationUrl}
                      className="w-full sm:w-auto font-mono text-xs h-12 px-8"
                    >
                      <span>Register on Portal</span>
                      <ArrowUpRight className="h-4 w-4 ml-2" />
                    </Button>
                  ) : (
                    <div className="p-4 rounded-xl bg-[#08080c] border border-[#1c1c27] text-xs font-mono text-zinc-400 text-center w-full">
                      Sprint Concluded / Awaiting Session Media
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 3. Chronological Sprint Horizon Timeline */}
        <div className="mt-16 space-y-8">
          <div className="flex items-center justify-between border-b border-[#1c1c27] pb-4">
            <h3 className="text-sm font-mono uppercase tracking-widest text-zinc-400 font-bold">
              Upcoming & Recent Sessions ({events.length})
            </h3>
            <span className="text-xs font-mono text-zinc-600">CHRONOLOGICAL SPRINT LOG</span>
          </div>

          <div className="space-y-4">
            {events.map((event) => {
              const isUpcoming = event.status === "UPCOMING";

              return (
                <div
                  key={event.id}
                  className={`p-6 sm:p-8 rounded-2xl border transition-all ${
                    isUpcoming
                      ? "bg-[#09090f] border-blue-900/40 hover:border-blue-700/60 shadow-[0_0_25px_rgba(59,130,246,0.05)]"
                      : "bg-[#060608] border-[#1c1c27] opacity-80 hover:opacity-100"
                  }`}
                >
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                    {/* Time cell */}
                    <div className="lg:w-1/4 space-y-1 shrink-0">
                      <div className="flex items-center gap-2">
                        <span
                          className={`h-2 w-2 rounded-full ${
                            isUpcoming ? "bg-blue-400 animate-pulse" : "bg-zinc-600"
                          }`}
                        />
                        <Badge variant={isUpcoming ? "accent" : "outline"}>
                          {event.status}
                        </Badge>
                      </div>
                      <div className="text-sm font-mono font-bold text-white pt-1">
                        {event.date}
                      </div>
                      <div className="text-xs font-mono text-zinc-500">
                        {event.time}
                      </div>
                    </div>

                    {/* Content cell */}
                    <div className="lg:w-1/2 space-y-2">
                      <h4 className="text-xl font-bold text-white tracking-tight">
                        {event.title}
                      </h4>
                      <p className="text-xs font-mono text-blue-400">{event.tagline}</p>
                      <p className="text-xs text-zinc-300 leading-relaxed">
                        {event.description}
                      </p>
                      <div className="flex items-center gap-2 text-xs font-mono text-zinc-500 pt-1">
                        <MapPin className="h-3.5 w-3.5 text-zinc-400" />
                        <span>{event.venue}</span>
                      </div>
                    </div>

                    {/* Action cell */}
                    <div className="lg:w-1/4 flex flex-col items-start lg:items-end justify-center shrink-0">
                      {event.isRegistrationOpen && event.registrationUrl ? (
                        <Button
                          variant="primary"
                          size="sm"
                          href={event.registrationUrl}
                          className="font-mono text-xs"
                        >
                          <span>Register</span>
                          <ArrowUpRight className="h-3 w-3 ml-1.5" />
                        </Button>
                      ) : (
                        <span className="text-xs font-mono text-zinc-500 px-3 py-1.5 rounded bg-zinc-900 border border-zinc-800">
                          Sprint Concluded
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </div>
  );
}
