import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { getHackathonCommunityResources, getHackathons } from "@/lib/data";
import { ArrowUpRight, MessageCircle, Trophy } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hackathons Hub & Acceleration Engine",
  description:
    "NEXUS Hackathon support hub, SIH guidance, team matchmaking, and developer toolkits at RIT.",
};

export default async function HackathonsPage() {
  const [hackathons, resources] = await Promise.all([
    getHackathons(),
    getHackathonCommunityResources(),
  ]);

  return (
    <div className="flex flex-col w-full py-12 md:py-20 space-y-16">
      {/* 1. Header */}
      <Container size="xl">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/40 border border-emerald-800/40 text-xs font-mono text-emerald-300">
            <Trophy className="h-3.5 w-3.5 text-emerald-400" />
            <span>NEXUS COMPETITIVE ACCELERATOR // SIH READY</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white uppercase">
            Hackathon Support Hub
          </h1>
          <p className="text-base sm:text-lg text-zinc-400 leading-relaxed font-normal">
            Accelerating student teams for Smart India Hackathon (SIH), national collegiate sprints, and open innovation challenges with architecture reviews, team matchmaking, and production starter templates.
          </p>
        </div>

        {/* 2. WhatsApp Support Community Callout */}
        <div className="mt-12 rounded-3xl bg-gradient-to-r from-emerald-950/40 via-[#0c0c14] to-[#050507] border border-emerald-800/40 p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-[0_0_40px_rgba(16,185,129,0.08)]">
          <div className="space-y-2">
            <Badge variant="success">Official WhatsApp Community</Badge>
            <h2 className="text-2xl font-bold text-white tracking-tight">
              Find Teammates & Get Architecture Reviews
            </h2>
            <p className="text-xs sm:text-sm text-zinc-300 max-w-xl leading-relaxed">
              Join the official NEXUS Hackathon Support channel to connect with full-stack devs, AI builders, and designers across RIT, discuss problem statements, and get deck feedback.
            </p>
          </div>
          <Button
            variant="primary"
            size="md"
            href="https://whatsapp.com/channel/0029VbDMvGCIyPtZvvAWLG19"
            className="bg-emerald-600 hover:bg-emerald-500 font-mono text-xs shrink-0"
          >
            <MessageCircle className="h-4 w-4 mr-2" />
            <span>Join WhatsApp Hub</span>
          </Button>
        </div>

        {/* 3. Featured Hackathons */}
        <div className="mt-16 space-y-8">
          <div className="flex items-center justify-between border-b border-[#1c1c27] pb-4">
            <h2 className="text-sm font-mono uppercase tracking-widest text-zinc-400 font-bold">
              Targeted Hackathons & Open Competitions ({hackathons.length})
            </h2>
            <span className="text-xs font-mono text-zinc-600">NATIONAL & REGIONAL TRACKS</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {hackathons.map((hackathon) => (
              <div
                key={hackathon.id}
                className="p-8 rounded-2xl bg-[#08080d] border border-[#1c1c27] hover:border-zinc-700 hover:bg-[#0c0c12] transition-all flex flex-col justify-between space-y-6"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-[#14141c] pb-3">
                    <Badge variant="accent">{hackathon.mode}</Badge>
                    <span className="text-xs font-mono text-zinc-400">{hackathon.dates}</span>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-white tracking-tight">
                      {hackathon.title}
                    </h3>
                    <p className="text-xs font-mono text-blue-400 mt-0.5">By {hackathon.organizer}</p>
                  </div>

                  <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                    {hackathon.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {hackathon.tracks.map((track) => (
                      <span
                        key={track}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#101018] text-zinc-400 border border-zinc-800"
                      >
                        {track}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-[#1c1c27] flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-emerald-400">
                    Prize: {hackathon.prizePool}
                  </span>

                  <Button
                    variant="outline"
                    size="sm"
                    href={hackathon.websiteUrl}
                    className="font-mono text-xs"
                  >
                    <span>Official Portal</span>
                    <ArrowUpRight className="h-3.5 w-3.5 ml-1.5" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 4. Hackathon Starter Kits & Templates */}
        <div className="mt-16 space-y-6">
          <div className="flex items-center justify-between border-b border-[#1c1c27] pb-4">
            <h3 className="text-sm font-mono uppercase tracking-widest text-zinc-400 font-bold">
              Engineering Blueprints & Matchmaking Kits ({resources.length})
            </h3>
            <span className="text-xs font-mono text-zinc-600">CURATED BOILERPLATES</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {resources.map((res, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#08080c] border border-[#1c1c27] space-y-4 flex flex-col justify-between hover:border-zinc-700 transition-colors"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-zinc-600 font-bold">0{idx + 1}</span>
                    <Badge variant="outline">{res.type}</Badge>
                  </div>
                  <h4 className="text-base font-bold text-white">{res.title}</h4>
                  <p className="text-xs text-zinc-400 leading-relaxed">{res.description}</p>
                </div>

                <div className="pt-3 border-t border-[#1c1c27]">
                  <Button
                    variant="secondary"
                    size="sm"
                    href={res.link}
                    className="w-full text-xs font-mono justify-center"
                  >
                    <span>Access Resource</span>
                    <ArrowUpRight className="h-3.5 w-3.5 ml-1.5" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}
