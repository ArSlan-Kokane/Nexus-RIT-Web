import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { getResources } from "@/lib/data";
import { ArrowUpRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resources & Roadmaps",
  description: "Curated learning roadmaps, starter templates, and cheat sheets for student engineers at RIT.",
};

export default async function ResourcesPage() {
  const resources = await getResources();

  return (
    <div className="flex flex-col w-full py-12 md:py-20 space-y-12">
      <Container size="lg">
        <div className="max-w-3xl">
          <Badge variant="accent" className="mb-4">
            Curated Knowledge Base
          </Badge>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            Developer Resources
          </h1>
          <p className="mt-6 text-base sm:text-lg text-zinc-400 leading-relaxed">
            High-leverage roadmaps, distributed systems fundamentals, hackathon boilerplate scaffolds, and applied AI toolkits curated by NEXUS.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {resources.map((res) => (
            <Card key={res.id} hoverable className="bg-[#0a0a0e] border-[#1f1f2c] flex flex-col justify-between">
              <CardHeader className="space-y-3">
                <div className="flex items-center justify-between">
                  <Badge variant="accent">{res.type}</Badge>
                  <span className="text-xs font-mono text-zinc-500">{res.category}</span>
                </div>
                <CardTitle className="text-xl text-white">{res.title}</CardTitle>
                <CardDescription className="text-xs text-zinc-300 leading-relaxed">
                  {res.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 pt-2">
                <div className="flex flex-wrap gap-1.5">
                  {res.tags.map((tag) => (
                    <span key={tag} className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-900 text-zinc-400 border border-zinc-800">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="pt-3 border-t border-[#1c1c27]">
                  <a
                    href={res.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-blue-400 hover:text-blue-300 font-medium inline-flex items-center gap-1.5"
                  >
                    Access Resource
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </div>
  );
}
