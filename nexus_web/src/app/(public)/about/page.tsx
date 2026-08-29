import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/common/section-heading";
import { siteConfig } from "@/data/site-config";
import { CheckCircle2, Compass, Sparkles } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about the mission, vision, and leadership pillars of NEXUS Club at RIT.",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col w-full py-12 md:py-20 space-y-20">
      {/* 1. HEADER SECTION */}
      <section>
        <Container size="lg">
          <div className="max-w-3xl">
            <Badge variant="accent" className="mb-4">
              Our Identity & Mission
            </Badge>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
              Cultivating High-Caliber Builders & Technical Leaders at RIT.
            </h1>
            <p className="mt-6 text-base sm:text-lg text-zinc-400 leading-relaxed">
              NEXUS is the official Innovation & Leadership Collective at Rajarambapu Institute of Technology (RIT).
              We operate at the intersection of rigorous engineering, student governance, and ecosystem collaboration.
            </p>
          </div>
        </Container>
      </section>

      {/* 2. MISSION & VISION GRID */}
      <section className="bg-[#07070a] py-16 border-y border-[#1c1c27]">
        <Container size="lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-[#1f1f2c] bg-[#09090d] p-8 space-y-4">
              <div className="h-10 w-10 rounded-lg bg-blue-950/60 border border-blue-800/50 flex items-center justify-center text-blue-400">
                <Compass className="h-5 w-5" />
              </div>
              <h2 className="text-2xl font-bold text-white">Our Mission</h2>
              <p className="text-sm text-zinc-300 leading-relaxed">
                To empower undergraduate engineers with real-world technical execution, architectural thinking, and leadership autonomy. We bridge classroom theory with production-grade engineering, national hackathons, and collaborative problem-solving.
              </p>
              <div className="pt-4 border-t border-[#1c1c27] space-y-2 text-xs text-zinc-400">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-blue-400 shrink-0" />
                  <span>Hands-on software, hardware, and AI development</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-blue-400 shrink-0" />
                  <span>National hackathon acceleration and team mentorship</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-blue-400 shrink-0" />
                  <span>Autonomous project governance across five departments</span>
                </div>
              </div>
            </Card>

            <Card className="border-[#1f1f2c] bg-[#09090d] p-8 space-y-4">
              <div className="h-10 w-10 rounded-lg bg-emerald-950/60 border border-emerald-800/50 flex items-center justify-center text-emerald-400">
                <Sparkles className="h-5 w-5" />
              </div>
              <h2 className="text-2xl font-bold text-white">Our Vision</h2>
              <p className="text-sm text-zinc-300 leading-relaxed">
                To establish RIT as a recognized hub of elite student engineering and innovative leadership, producing graduates who build scalable software systems, lead technical organizations, and solve pressing societal challenges.
              </p>
              <div className="pt-4 border-t border-[#1c1c27] space-y-2 text-xs text-zinc-400">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                  <span>Institutional excellence and technical credibility</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                  <span>Inter-collegiate partnerships and industry integration</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                  <span>Lifelong alumni mentorship and engineering legacy</span>
                </div>
              </div>
            </Card>
          </div>
        </Container>
      </section>

      {/* 3. THE 3 PILLARS DEEP-DIVE */}
      <section>
        <Container size="lg">
          <SectionHeading
            badge="Guiding Creed"
            title="The Three Tenets"
            description="Every initiative, hackathon, and workshop organized by NEXUS aligns with our tri-fold motto: BUILD. LEAD. CONNECT."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-xl bg-[#0c0c10] border border-[#1c1c27] space-y-4">
              <div className="text-xs font-mono text-blue-400 font-bold uppercase tracking-wider">Pillar 01</div>
              <h3 className="text-xl font-bold text-white">BUILD</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                We believe engineering is learned through construction. Our members write code, design circuits, train models, and ship production platforms rather than consuming passive lectures.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-[#0c0c10] border border-[#1c1c27] space-y-4">
              <div className="text-xs font-mono text-indigo-400 font-bold uppercase tracking-wider">Pillar 02</div>
              <h3 className="text-xl font-bold text-white">LEAD</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Technical skill is amplified by leadership. We train directors, project managers, and coordinators to run complex operations, manage budgets, communicate clearly, and take ownership.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-[#0c0c10] border border-[#1c1c27] space-y-4">
              <div className="text-xs font-mono text-emerald-400 font-bold uppercase tracking-wider">Pillar 03</div>
              <h3 className="text-xl font-bold text-white">CONNECT</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                No engineer builds alone. NEXUS establishes collaborative bridges with other college clubs, open-source communities, hackathon organizers, and our growing alumni network.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* 4. INSTITUTIONAL CONTEXT */}
      <section className="bg-[#07070a] py-16 border-t border-[#1c1c27]">
        <Container size="lg">
          <div className="rounded-xl bg-[#0c0c10] border border-[#1c1c27] p-8 sm:p-12 space-y-6">
            <Badge variant="outline">Institutional Alignment</Badge>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Proudly Rooted at Rajarambapu Institute of Technology (RIT)
            </h2>
            <p className="text-sm text-zinc-300 leading-relaxed max-w-3xl">
              NEXUS operates as an officially recognized student collective under the patronage of Rajarambapu Institute of Technology (RIT). We uphold the institution&apos;s commitment to academic rigor, research innovation, and community contribution.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-4 text-xs font-mono text-zinc-400">
              <div className="p-3 rounded-lg bg-zinc-900/60 border border-zinc-800">
                <span className="text-zinc-500 block">Institution:</span>
                <span className="text-zinc-200 font-semibold">{siteConfig.institution.name}</span>
              </div>
              <div className="p-3 rounded-lg bg-zinc-900/60 border border-zinc-800">
                <span className="text-zinc-500 block">Location:</span>
                <span className="text-zinc-200 font-semibold">{siteConfig.institution.city}, {siteConfig.institution.state}</span>
              </div>
              <div className="p-3 rounded-lg bg-zinc-900/60 border border-zinc-800">
                <span className="text-zinc-500 block">Faculty Coordinator:</span>
                <span className="text-zinc-200 font-semibold">{siteConfig.contact.facultyCoordinator}</span>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
