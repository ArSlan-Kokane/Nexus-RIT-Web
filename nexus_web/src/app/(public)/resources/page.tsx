import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { getResources } from "@/lib/data";
import { ArrowUpRight, Terminal } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resource Terminal & Engineering Toolkits",
  description:
    "Curated technical roadmaps, production starter templates, and cheat sheets for student engineers at RIT.",
};

export default async function ResourcesPage() {
  const resources = await getResources();

  // Group by category
  const categories = Array.from(new Set(resources.map((r) => r.category)));

  return (
    <div className="flex flex-col w-full py-12 md:py-20 space-y-16">
      {/* 1. Header */}
      <Container size="xl">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 border-b border-[#1c1c27] pb-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/40 border border-blue-800/40 text-xs font-mono text-blue-300">
              <Terminal className="h-3.5 w-3.5 text-blue-400" />
              <span>NEXUS KNOWLEDGE TERMINAL // TOOLKITS</span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white uppercase">
              Resource Terminal
            </h1>
            <p className="text-base sm:text-lg text-zinc-400 leading-relaxed font-normal">
              High-leverage engineering roadmaps, distributed system patterns, hackathon production scaffolds, and machine learning toolkits curated for RIT builders.
            </p>
          </div>

          <div className="flex items-center gap-4 text-xs font-mono text-zinc-400 shrink-0">
            <div className="p-3 rounded-xl bg-[#0a0a0f] border border-[#1c1c27] text-center min-w-[110px]">
              <div className="text-xl font-bold text-white">{resources.length}</div>
              <div className="text-[10px] text-zinc-500 uppercase mt-0.5">Indexed Toolkits</div>
            </div>
          </div>
        </div>

        {/* 2. Resource Terminal Ledger by Category */}
        <div className="mt-12 space-y-12">
          {categories.map((category) => {
            const categoryResources = resources.filter((r) => r.category === category);

            return (
              <div key={category} className="space-y-4">
                <div className="flex items-center justify-between border-b border-[#1c1c27] pb-3">
                  <div className="flex items-center gap-2.5">
                    <span className="h-2 w-2 rounded-full bg-blue-400" />
                    <h2 className="text-sm font-mono font-bold text-white uppercase tracking-wider">
                      {category}
                    </h2>
                  </div>
                  <span className="text-xs font-mono text-zinc-500">
                    {categoryResources.length} ITEMS
                  </span>
                </div>

                <div className="divide-y divide-[#1c1c27] border border-[#1c1c27] rounded-2xl overflow-hidden bg-[#07070b]">
                  {categoryResources.map((res, idx) => (
                    <div
                      key={res.id}
                      className="p-6 sm:p-8 hover:bg-[#0c0c14] transition-colors flex flex-col lg:flex-row lg:items-center justify-between gap-6"
                    >
                      <div className="space-y-2 lg:max-w-3xl">
                        <div className="flex items-center gap-3">
                          <span className="text-xs font-mono text-zinc-600 font-bold">
                            0{idx + 1}
                          </span>
                          <Badge variant="accent">{res.type}</Badge>
                        </div>

                        <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                          {res.title}
                        </h3>

                        <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                          {res.description}
                        </p>

                        <div className="flex flex-wrap gap-1.5 pt-2">
                          {res.tags.map((tag) => (
                            <span
                              key={tag}
                              className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#101018] text-zinc-400 border border-zinc-800"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="shrink-0 flex items-center">
                        <Button
                          variant="primary"
                          size="sm"
                          href={res.url}
                          className="font-mono text-xs h-9 px-4"
                        >
                          <span>Access Toolkit</span>
                          <ArrowUpRight className="h-3.5 w-3.5 ml-1.5" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </div>
  );
}
