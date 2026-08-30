import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/common/section-heading";
import { siteConfig } from "@/data/site-config";
import { CheckCircle2, Compass, Sparkles } from "lucide-react";
import type { Metadata } from "next";
import AboutContent from "./about-content";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about the mission, vision, and leadership pillars of NEXUS Club at RIT.",
};

export default function AboutPage() {
  return <AboutContent />;
}