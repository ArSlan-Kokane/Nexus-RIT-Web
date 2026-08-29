import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { getEvents } from "@/lib/data";
import { ArrowRight, Calendar, MapPin } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Events & Workshops",
  description: "Browse upcoming workshops, technical summits, and hackathons hosted by NEXUS RIT.",
};

export default async function EventsPage() {
  const events = await getEvents();

  return (
    <div className="flex flex-col w-full py-12 md:py-20 space-y-12">
      <Container size="lg">
        <div className="max-w-3xl">
          <Badge variant="accent" className="mb-4">
            Initiatives & Programs
          </Badge>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            Events & Workshops
          </h1>
          <p className="mt-6 text-base sm:text-lg text-zinc-400 leading-relaxed">
            Hands-on technical bootcamps, architecture deep-dives, and competitive hackathons organized by NEXUS at Rajarambapu Institute of Technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {events.map((event) => (
            <Card key={event.id} hoverable className="flex flex-col justify-between bg-[#0a0a0e] border-[#1f1f2c]">
              <CardHeader className="space-y-3">
                <div className="flex items-center justify-between">
                  <Badge variant={event.status === "UPCOMING" ? "accent" : "default"}>
                    {event.status}
                  </Badge>
                  <span className="text-xs font-mono text-zinc-400">{event.category}</span>
                </div>
                <CardTitle className="text-xl text-white">{event.title}</CardTitle>
                <p className="text-xs font-mono text-blue-400">{event.tagline}</p>
                <CardDescription className="text-xs text-zinc-300">
                  {event.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-4 pt-2">
                <div className="space-y-1.5 text-xs font-mono text-zinc-400 border-t border-[#1c1c27] pt-3">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-3.5 w-3.5 text-zinc-500" />
                    <span>{event.date} • {event.time}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-3.5 w-3.5 text-zinc-500" />
                    <span>{event.venue}</span>
                  </div>
                </div>

                <div className="pt-2 flex items-center justify-between border-t border-[#1c1c27]">
                  {event.isRegistrationOpen && event.registrationUrl ? (
                    <a
                      href={event.registrationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-blue-400 hover:text-blue-300 font-medium inline-flex items-center gap-1"
                    >
                      Register (Google Form)
                      <ArrowRight className="h-3.5 w-3.5" />
                    </a>
                  ) : (
                    <span className="text-xs text-zinc-500 font-mono">Concluded / Archived</span>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </div>
  );
}
