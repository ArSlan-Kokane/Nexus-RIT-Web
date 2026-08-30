import type { Metadata } from "next";
import AboutContent from "./about-content";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about the mission, vision, and leadership pillars of NEXUS Club at RIT.",
};

export default function AboutPage() {
  return <AboutContent />;
}
