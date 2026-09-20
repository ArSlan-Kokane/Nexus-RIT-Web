import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { getInsights } from "@/lib/data";
import { ArrowRight, BookOpen, Clock, Sparkles, User } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Technical Insights & Architectural Papers",
  description:
    "Engineering write-ups, architecture case studies, and leadership insights from NEXUS members at RIT.",
};

export default async function InsightsPage() {
  const articles = await getInsights();
  const [featured, ...rest] = articles;

  return (
    <div className="flex flex-col w-full py-12 md:py-20 space-y-16">
      {/* Header */}
      <Container size="xl">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/40 border border-blue-800/40 text-xs font-mono text-blue-300">
            <BookOpen className="h-3.5 w-3.5 text-blue-400" />
            <span>NEXUS EDITORIAL DISPATCHES</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white uppercase">
            Technical Insights
          </h1>
          <p className="text-base sm:text-lg text-zinc-400 leading-relaxed font-normal">
            Architectural blueprints, low-latency web strategies, hackathon post-mortems, and engineering leadership essays written by NEXUS builders at RIT.
          </p>
        </div>

        {/* 1. Featured Lead Article */}
        {featured && (
          <div className="mt-12">
            <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-[#0c0c14] to-[#07070a] border border-[#1f1f2e] hover:border-blue-500/40 transition-all duration-300 group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600/10 blur-[100px] rounded-full pointer-events-none" />

              <div className="space-y-6 relative z-10">
                <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#1c1c27] pb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono font-bold text-blue-400 uppercase tracking-widest flex items-center gap-1.5">
                      <Sparkles className="h-3 w-3" />
                      FEATURED PUBLICATION
                    </span>
                    <span className="text-zinc-600 font-mono">/</span>
                    <Badge variant="accent">{featured.category.replace(/_/g, " ")}</Badge>
                  </div>
                  <div className="flex items-center gap-3 text-xs font-mono text-zinc-400">
                    <div className="flex items-center gap-1.5">
                      <Clock className="h-3.5 w-3.5 text-zinc-500" />
                      <span>{featured.readTime}</span>
                    </div>
                    <span>•</span>
                    <span>{featured.publishedAt}</span>
                  </div>
                </div>

                <div className="max-w-4xl space-y-3">
                  <Link href={`/insights/${featured.slug}`}>
                    <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight group-hover:text-blue-200 transition-colors">
                      {featured.title}
                    </h2>
                  </Link>
                  <p className="text-sm sm:text-base text-zinc-300 leading-relaxed max-w-3xl">
                    {featured.excerpt}
                  </p>
                </div>

                <div className="pt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-6 border-t border-[#1c1c27]">
                  <div className="flex items-center gap-3">
                    <div className="h-9 w-9 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-300 font-mono text-xs">
                      <User className="h-4 w-4" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-white">{featured.author.name}</div>
                      <div className="text-xs font-mono text-blue-400">{featured.author.role}</div>
                    </div>
                  </div>

                  <Link href={`/insights/${featured.slug}`}>
                    <Button variant="primary" size="md" className="font-mono text-xs">
                      <span>Read Technical Paper</span>
                      <ArrowRight className="h-3.5 w-3.5 ml-2" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 2. Editorial Index List */}
        <div className="mt-16 space-y-6">
          <div className="flex items-center justify-between border-b border-[#1c1c27] pb-4">
            <h3 className="text-sm font-mono uppercase tracking-widest text-zinc-400 font-bold">
              Archived Publications ({rest.length})
            </h3>
            <span className="text-xs font-mono text-zinc-600">SORTED BY CHRONOLOGICAL RECENCY</span>
          </div>

          <div className="divide-y divide-[#1c1c27] border-y border-[#1c1c27]">
            {rest.map((article, idx) => (
              <Link
                key={article.id}
                href={`/insights/${article.slug}`}
                className="py-8 block group hover:bg-[#0c0c12]/60 px-4 sm:px-6 -mx-4 sm:-mx-6 rounded-xl transition-all"
              >
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                  <div className="space-y-2 lg:max-w-3xl">
                    <div className="flex items-center gap-3 text-xs font-mono text-zinc-400">
                      <span className="text-blue-400 font-bold">0{idx + 2}</span>
                      <Badge variant="outline">{article.category.replace(/_/g, " ")}</Badge>
                      <span>•</span>
                      <span>{article.readTime}</span>
                      <span>•</span>
                      <span>{article.publishedAt}</span>
                    </div>

                    <h4 className="text-xl sm:text-2xl font-bold text-white group-hover:text-blue-300 transition-colors">
                      {article.title}
                    </h4>

                    <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                      {article.excerpt}
                    </p>
                  </div>

                  <div className="flex items-center justify-between lg:justify-end gap-6 shrink-0">
                    <div className="text-left lg:text-right">
                      <div className="text-xs font-semibold text-white">{article.author.name}</div>
                      <div className="text-[11px] font-mono text-zinc-500">{article.author.role}</div>
                    </div>

                    <div className="h-9 w-9 rounded-lg border border-[#222230] group-hover:border-blue-500/50 bg-[#101016] flex items-center justify-center text-zinc-400 group-hover:text-blue-300 transition-all">
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}
