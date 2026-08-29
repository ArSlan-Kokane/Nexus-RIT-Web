import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { getAlumni } from "@/lib/data";
import { GraduationCap } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Alumni Network",
  description: "NEXUS alumni, founding members, and legacy leadership board at Rajarambapu Institute of Technology (RIT).",
};

export default async function AlumniPage() {
  const alumni = await getAlumni();

  return (
    <div className="flex flex-col w-full py-12 md:py-20 space-y-12">
      <Container size="lg">
        <div className="max-w-3xl">
          <Badge variant="accent" className="mb-4">
            Legacy & Heritage
          </Badge>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            Alumni & Founding Network
          </h1>
          <p className="mt-6 text-base sm:text-lg text-zinc-400 leading-relaxed">
            Honoring past directors, core leads, and student innovators who established the foundations of NEXUS at Rajarambapu Institute of Technology (RIT).
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          {alumni.map((member) => (
            <Card key={member.id} className="bg-[#0a0a0e] border-[#1f1f2c] p-6 space-y-4">
              <div className="flex items-start justify-between">
                <div className="space-y-1">
                  <Badge variant="outline">{member.batch}</Badge>
                  <h3 className="text-xl font-bold text-white pt-1">{member.name}</h3>
                  <p className="text-xs font-mono text-blue-400">{member.previousRole}</p>
                </div>
                <div className="h-10 w-10 rounded-lg bg-zinc-800 flex items-center justify-center text-zinc-400">
                  <GraduationCap className="h-5 w-5" />
                </div>
              </div>

              {member.bio && (
                <p className="text-xs text-zinc-300 leading-relaxed">{member.bio}</p>
              )}

              {member.achievements && (
                <div className="pt-3 border-t border-[#1c1c27] space-y-1.5">
                  <span className="text-[10px] font-mono uppercase text-zinc-500">Key Contributions:</span>
                  <ul className="text-xs text-zinc-400 space-y-1">
                    {member.achievements.map((ach, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                        <span>{ach}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </Card>
          ))}
        </div>
      </Container>
    </div>
  );
}
