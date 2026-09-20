import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { getInsightBySlug, getInsights } from "@/lib/data";
import { ArrowLeft, Clock, Tag, User } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

interface InsightPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const articles = await getInsights();
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({
  params,
}: InsightPageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = await getInsightBySlug(slug);

  if (!article) {
    return {
      title: "Insight Not Found",
    };
  }

  return {
    title: `${article.title} | NEXUS Insights`,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: "article",
    },
  };
}

export default async function InsightDetailPage({ params }: InsightPageProps) {
  const { slug } = await params;
  const article = await getInsightBySlug(slug);

  if (!article) {
    notFound();
  }

  return (
    <article className="flex flex-col w-full py-12 md:py-20">
      <Container size="lg">
        {/* Back navigation */}
        <div className="mb-8">
          <Link
            href="/insights"
            className="inline-flex items-center gap-2 text-xs font-mono text-zinc-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            <span>RETURN TO INSIGHTS ARCHIVE</span>
          </Link>
        </div>

        {/* Header Block */}
        <div className="space-y-6 max-w-3xl border-b border-[#1c1c27] pb-10">
          <div className="flex flex-wrap items-center gap-3">
            <Badge variant="accent">{article.category.replace(/_/g, " ")}</Badge>
            <div className="flex items-center gap-1.5 text-xs font-mono text-zinc-500">
              <Clock className="h-3.5 w-3.5" />
              <span>{article.readTime}</span>
            </div>
            <span className="text-zinc-600 font-mono">•</span>
            <span className="text-xs font-mono text-zinc-400">{article.publishedAt}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
            {article.title}
          </h1>

          <p className="text-base sm:text-lg text-zinc-400 leading-relaxed font-normal">
            {article.excerpt}
          </p>

          {/* Author Strip */}
          <div className="pt-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-blue-950/60 border border-blue-800/40 flex items-center justify-center text-blue-400">
                <User className="h-5 w-5" />
              </div>
              <div>
                <div className="text-sm font-semibold text-white">{article.author.name}</div>
                <div className="text-xs font-mono text-blue-400">{article.author.role}</div>
              </div>
            </div>

            <div className="hidden sm:flex items-center gap-1.5 text-xs font-mono text-zinc-500">
              <span>NEXUS EDITORIAL</span>
            </div>
          </div>
        </div>

        {/* Article Body */}
        <div className="max-w-3xl py-10">
          <div className="prose prose-invert prose-zinc max-w-none text-zinc-300 leading-relaxed space-y-6 text-base">
            {article.content?.split("\n\n").map((paragraph, idx) => {
              const trimmed = paragraph.trim();
              if (trimmed.startsWith("### ")) {
                return (
                  <h2
                    key={idx}
                    className="text-2xl font-bold text-white pt-6 pb-2 border-b border-[#1c1c27] tracking-tight"
                  >
                    {trimmed.replace("### ", "")}
                  </h2>
                );
              }
              if (trimmed.startsWith("> ")) {
                return (
                  <blockquote
                    key={idx}
                    className="border-l-2 border-blue-500 pl-4 italic text-zinc-300 my-4 bg-blue-950/10 py-2 rounded-r"
                  >
                    {trimmed.replace("> ", "")}
                  </blockquote>
                );
              }
              if (trimmed.startsWith("```")) {
                const codeLines = trimmed.replace(/^```[a-z]*\n?/, "").replace(/\n?```$/, "");
                return (
                  <pre
                    key={idx}
                    className="p-4 rounded-xl bg-[#0a0a0f] border border-[#1c1c27] font-mono text-xs text-blue-300 overflow-x-auto my-4"
                  >
                    <code>{codeLines}</code>
                  </pre>
                );
              }
              if (trimmed.startsWith("- ")) {
                const items = trimmed.split("\n").filter((l) => l.startsWith("- "));
                return (
                  <ul key={idx} className="space-y-2 pl-4 list-disc marker:text-blue-400 text-sm">
                    {items.map((item, itemIdx) => (
                      <li key={itemIdx}>{item.replace("- ", "")}</li>
                    ))}
                  </ul>
                );
              }
              if (/^\d+\.\s/.test(trimmed)) {
                const items = trimmed.split("\n").filter((l) => /^\d+\.\s/.test(l));
                return (
                  <ol key={idx} className="space-y-2 pl-4 list-decimal marker:text-blue-400 text-sm">
                    {items.map((item, itemIdx) => (
                      <li key={itemIdx}>{item.replace(/^\d+\.\s/, "")}</li>
                    ))}
                  </ol>
                );
              }
              return (
                <p key={idx} className="text-zinc-300 leading-relaxed">
                  {trimmed}
                </p>
              );
            })}
          </div>

          {/* Tags & Footer Navigation */}
          <div className="mt-12 pt-8 border-t border-[#1c1c27] space-y-6">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-mono text-zinc-500 flex items-center gap-1.5 mr-2">
                <Tag className="h-3 w-3" />
                INDEXED TAGS:
              </span>
              {article.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 rounded bg-[#0c0c12] border border-[#1c1c27] text-[11px] font-mono text-zinc-400"
                >
                  #{tag}
                </span>
              ))}
            </div>

            <div className="p-6 rounded-2xl bg-[#09090e] border border-[#1f1f2c] flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h4 className="text-sm font-bold text-white">Have feedback or want to publish?</h4>
                <p className="text-xs text-zinc-400 mt-0.5">
                  NEXUS welcomes technical write-ups and hackathon post-mortems from RIT students.
                </p>
              </div>
              <Link href="/contact">
                <Button variant="outline" size="sm" className="text-xs font-mono">
                  Pitch an Article
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </article>
  );
}
