import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { getHackathons } from "@/lib/data";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hackathons Hub",
  description: "NEXUS Hackathon support hub, SIH guidance, team matchmaking, and WhatsApp communities.",
};

export default async function HackathonsPage() {
  const hackathons = await getHackathons();

  return (
    <div className="flex flex-col w-full py-12 md:py-20 space-y-16">
      <Container size="lg">
        <div className="max-w-3xl">
          <Badge variant="accent" className="mb-4">
            Competitive Engineering
          </Badge>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            Hackathon Support Hub
          </h1>
          <p className="mt-6 text-base sm:text-lg text-zinc-400 leading-relaxed">
            Accelerating student teams for Smart India Hackathon (SIH), regional hackathons, and global open innovation challenges with mentorship, matchmaking, and dev templates.
          </p>
        </div>

        {/* Community WhatsApp Support Card */}
        <div className="mt-10 rounded-2xl bg-gradient-to-r from-emerald-950/40 via-[#0c0c10] to-blue-950/40 border border-emerald-800/40 p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <Badge variant="success">Active WhatsApp Community</Badge>
            <h2 className="text-xl font-bold text-white">Find Teammates & Hackathon Mentors</h2>
            <p className="text-xs text-zinc-300 max-w-xl">
              Join the dedicated NEXUS Hackathon Support WhatsApp group to form cross-functional teams, get architecture reviews, and receive pitch deck feedback.
            </p>
          </div>
          <a
            href="https://chat.whatsapp.com/nexus-hackathon-hub-placeholder"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0"
          >
            <Button variant="primary" size="md" className="bg-emerald-600 hover:bg-emerald-500 text-xs">
              <MessageCircle className="h-4 w-4 mr-2" />
              Join WhatsApp Hub
            </Button>
          </a>
        </div>

        {/* Active Hackathons Grid */}
        <div className="mt-16 space-y-8">
          <h2 className="text-2xl font-bold text-white">Featured Hackathons & Challenges</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {hackathons.map((hackathon) => (
              <Card key={hackathon.id} hoverable className="bg-[#0a0a0e] border-[#1f1f2c] flex flex-col justify-between">
                <CardHeader className="space-y-3">
                  <div className="flex items-center justify-between">
                    <Badge variant="accent">{hackathon.mode}</Badge>
                    <span className="text-xs font-mono text-zinc-400">{hackathon.dates}</span>
                  </div>
                  <CardTitle className="text-xl text-white">{hackathon.title}</CardTitle>
                  <p className="text-xs font-mono text-zinc-400">By {hackathon.organizer}</p>
                  <CardDescription className="text-xs text-zinc-300 leading-relaxed">
                    {hackathon.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4 pt-2">
                  <div className="flex flex-wrap gap-1.5">
                    {hackathon.tracks.map((track) => (
                      <span key={track} className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-900 text-zinc-400 border border-zinc-800">
                        {track}
                      </span>
                    ))}
                  </div>

                  <div className="pt-3 border-t border-[#1c1c27] flex items-center justify-between text-xs">
                    <span className="text-emerald-400 font-mono font-semibold">{hackathon.prizePool}</span>
                    <a
                      href={hackathon.websiteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 font-medium inline-flex items-center gap-1"
                    >
                      Official Portal
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}
