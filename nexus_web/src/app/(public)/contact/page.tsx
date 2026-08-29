import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { SocialLinks } from "@/components/common/social-links";
import { siteConfig } from "@/data/site-config";
import { ArrowUpRight, Mail, MapPin, MessageCircle, Sparkles, User } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with NEXUS — Innovation & Leadership Collective at Rajarambapu Institute of Technology (RIT).",
};

export default function ContactPage() {
  return (
    <div className="flex flex-col w-full py-12 md:py-20 space-y-16">
      {/* 1. HEADER */}
      <section>
        <Container size="lg">
          <div className="max-w-3xl">
            <Badge variant="accent" className="mb-4">
              Get in Touch
            </Badge>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
              Connect with NEXUS
            </h1>
            <p className="mt-6 text-base sm:text-lg text-zinc-400 leading-relaxed">
              Have questions about upcoming hackathons, collaborations, workshops, or club recruitment? Reach out to our leadership board or visit us at RIT.
            </p>
          </div>
        </Container>
      </section>

      {/* 2. CONTACT DETAILS & CAMPUS INFO */}
      <section>
        <Container size="lg">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Direct Channels */}
            <div className="space-y-6 lg:col-span-2">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Official Email */}
                <Card className="bg-[#09090d] border-[#1f1f2c]">
                  <CardHeader className="space-y-2">
                    <div className="h-10 w-10 rounded-lg bg-blue-950/60 border border-blue-800/50 flex items-center justify-center text-blue-400">
                      <Mail className="h-5 w-5" />
                    </div>
                    <CardTitle className="text-lg text-white">Official Email</CardTitle>
                    <CardDescription className="text-xs text-zinc-400">
                      For sponsorships, institutional inquiries & official communications.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="p-3 rounded-lg bg-zinc-900/60 border border-zinc-800 font-mono text-xs text-zinc-300">
                      {siteConfig.contact.email}
                    </div>
                  </CardContent>
                </Card>

                {/* Faculty Coordinator */}
                <Card className="bg-[#09090d] border-[#1f1f2c]">
                  <CardHeader className="space-y-2">
                    <div className="h-10 w-10 rounded-lg bg-indigo-950/60 border border-indigo-800/50 flex items-center justify-center text-indigo-400">
                      <User className="h-5 w-5" />
                    </div>
                    <CardTitle className="text-lg text-white">Faculty Coordinator</CardTitle>
                    <CardDescription className="text-xs text-zinc-400">
                      Academic advisor and institutional coordinator at RIT.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="p-3 rounded-lg bg-zinc-900/60 border border-zinc-800 font-mono text-xs text-zinc-300">
                      {siteConfig.contact.facultyCoordinator}
                    </div>
                  </CardContent>
                </Card>

                {/* WhatsApp Community */}
                <Card className="bg-[#09090d] border-[#1f1f2c]">
                  <CardHeader className="space-y-2">
                    <div className="h-10 w-10 rounded-lg bg-emerald-950/60 border border-emerald-800/50 flex items-center justify-center text-emerald-400">
                      <MessageCircle className="h-5 w-5" />
                    </div>
                    <CardTitle className="text-lg text-white">WhatsApp Community</CardTitle>
                    <CardDescription className="text-xs text-zinc-400">
                      Direct discussion channel for hackathon updates and dev matchmaking.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <a
                      href={siteConfig.contact.whatsappCommunity}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-emerald-400 hover:text-emerald-300 font-mono flex items-center gap-1.5 underline-offset-4 hover:underline"
                    >
                      Join Community Hub
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </a>
                  </CardContent>
                </Card>

                {/* Instagram Channel */}
                <Card className="bg-[#09090d] border-[#1f1f2c]">
                  <CardHeader className="space-y-2">
                    <div className="h-10 w-10 rounded-lg bg-purple-950/60 border border-purple-800/50 flex items-center justify-center text-purple-400">
                      <Sparkles className="h-5 w-5" />
                    </div>
                    <CardTitle className="text-lg text-white">Instagram Channel</CardTitle>
                    <CardDescription className="text-xs text-zinc-400">
                      Event recaps, announcement posters, and story highlights.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="p-3 rounded-lg bg-zinc-900/60 border border-zinc-800 font-mono text-xs text-zinc-300">
                      {siteConfig.contact.instagram}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Social Channels Strip */}
              <div className="p-6 rounded-xl bg-[#0c0c10] border border-[#1c1c27] flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <h3 className="text-sm font-semibold text-white">Connect Across Digital Handles</h3>
                  <p className="text-xs text-zinc-400">GitHub codebases, LinkedIn updates, and developer networks.</p>
                </div>
                <SocialLinks socials={siteConfig.contact} variant="card" />
              </div>
            </div>

            {/* Campus & Location Box */}
            <div className="space-y-6">
              <Card className="bg-[#09090d] border-[#1f1f2c] h-full flex flex-col justify-between">
                <CardHeader className="space-y-3">
                  <div className="h-10 w-10 rounded-lg bg-zinc-800 border border-zinc-700 flex items-center justify-center text-zinc-300">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <CardTitle className="text-xl text-white">Campus Location</CardTitle>
                  <CardDescription className="text-xs text-zinc-300 leading-relaxed">
                    {siteConfig.institution.name}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-4 text-xs">
                  <div className="p-3 rounded-lg bg-zinc-900/80 border border-zinc-800 font-mono text-zinc-400 space-y-1">
                    <p className="text-zinc-200">{siteConfig.institution.address}</p>
                    <p className="text-zinc-500 pt-1">Sangli District, Maharashtra, India</p>
                  </div>

                  <div className="pt-2">
                    <a
                      href="https://maps.google.com/?q=Rajarambapu+Institute+of+Technology+Islampur"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-block"
                    >
                      <Button variant="outline" size="sm" className="w-full text-xs justify-center">
                        View on Google Maps
                        <ArrowUpRight className="h-3.5 w-3.5 ml-1.5" />
                      </Button>
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
