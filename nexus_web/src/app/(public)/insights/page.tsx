import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { getInsights } from "@/lib/data";
import { Clock, User } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Technical Insights",
  description: "Engineering write-ups, architecture case studies, and leadership insights from NEXUS members.",
};

export default async function InsightsPage() {
  const articles = await getInsights();

  return (
    <div className="flex flex-col w-full py-12 md:py-20 space-y-12">
      <Container size="lg">
        <div className="max-w-3xl">
          <Badge variant="accent" className="mb-4">
            Publications & Engineering Notes
          </Badge>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            Technical Insights
          </h1>
          <p className="mt-6 text-base sm:text-lg text-zinc-400 leading-relaxed">
            Technical articles, architectural post-mortems, hackathon retrospectives, and engineering leadership essays written by NEXUS members.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          {articles.map((article) => (
            <Card key={article.id} hoverable className="bg-[#0a0a0e] border-[#1f1f2c] flex flex-col justify-between">
              <CardHeader className="space-y-3">
                <div className="flex items-center justify-between">
                  <Badge variant="outline">{article.category}</Badge>
                  <div className="flex items-center gap-1.5 text-xs font-mono text-zinc-500">
                    <Clock className="h-3 w-3" />
                    <span>{article.readTime}</span>
                  </div>
                </div>
                <CardTitle className="text-xl text-white">{article.title}</CardTitle>
                <CardDescription className="text-xs text-zinc-300 leading-relaxed">
                  {article.excerpt}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-2">
                <div className="flex items-center justify-between pt-4 border-t border-[#1c1c27] text-xs">
                  <div className="flex items-center gap-2">
                    <div className="h-6 w-6 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-400">
                      <User className="h-3.5 w-3.5" />
                    </div>
                    <span className="text-zinc-300 font-medium">{article.author.name}</span>
                  </div>
                  <span className="text-zinc-500 font-mono text-[11px]">{article.publishedAt}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </div>
  );
}
