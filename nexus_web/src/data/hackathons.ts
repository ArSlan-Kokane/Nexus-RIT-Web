import { HackathonCommunityResource, HackathonItem } from "@/types";

export const hackathonsData: HackathonItem[] = [
  {
    id: "smart-india-hackathon-2026",
    slug: "smart-india-hackathon-2026",
    title: "Smart India Hackathon (SIH 2026)",
    organizer: "Ministry of Education & AICTE",
    mode: "HYBRID",
    dates: "August - December 2026",
    prizePool: "₹1,00,000 per problem statement",
    location: "National Level / Regional Centers",
    description:
      "World's biggest open innovation model supporting students to solve pressing challenges of ministries, departments, and industries.",
    tracks: ["Smart Automation", "Clean Tech", "Healthcare", "Agriculture", "AI & Robotics"],
    websiteUrl: "https://sih.gov.in",
    whatsappGroupUrl: "https://chat.whatsapp.com/nexus-sih-support-placeholder",
    isFeatured: true,
    status: "REGISTRATIONS_OPEN",
  },
  {
    id: "hackoverflow-2026",
    slug: "hackoverflow-2026",
    title: "HackOverflow 4.0",
    organizer: "Student Tech Network",
    mode: "IN_PERSON",
    dates: "September 18-20, 2026",
    prizePool: "₹1,50,000",
    location: "Maharashtra Regional Node",
    description:
      "36-hour hackathon focused on building high-performance decentralized systems, intelligent agents, and developer tooling.",
    tracks: ["Web3 / Systems", "Autonomous AI", "Open Innovation"],
    websiteUrl: "https://hackoverflow.tech",
    whatsappGroupUrl: "https://chat.whatsapp.com/nexus-hackoverflow-placeholder",
    isFeatured: true,
    status: "REGISTRATIONS_OPEN",
  },
];

export const hackathonCommunityResources: HackathonCommunityResource[] = [
  {
    title: "NEXUS Hackathon WhatsApp Support Hub",
    description: "Connect with fellow developers, find teammates, discuss problem statements, and get mentor assistance.",
    link: "https://chat.whatsapp.com/nexus-hackathon-hub-placeholder",
    type: "WHATSAPP",
  },
  {
    title: "Hackathon Pitch & Deck Template",
    description: "Standard presentation blueprint tested in national-level hackathons for problem validation and demo structure.",
    link: "https://github.com/nexus-rit/hackathon-starter-kit",
    type: "GUIDE",
  },
  {
    title: "Production Tech Stack Boilerplate",
    description: "Next.js + TypeScript + Tailwind template pre-configured for lightning-fast 24h hackathon prototyping.",
    link: "https://github.com/nexus-rit/hackathon-starter-kit",
    type: "STARTER_KIT" as unknown as "TOOL",
  },
];
