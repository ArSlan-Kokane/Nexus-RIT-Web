import { EventItem } from "@/types";

export const eventsData: EventItem[] = [
  {
    id: "nexus-tech-summit-2026",
    slug: "nexus-tech-summit-2026",
    title: "NEXUS Annual Technical Summit",
    tagline: "Bridging Innovation, Systems Engineering, and Next-Gen Leadership",
    description:
      "A premier flagship gathering of student developers, industry engineers, and innovators at RIT. Featuring tech keynotes, architecture breakdowns, and hands-on tracks.",
    category: "TECH_TALK",
    status: "UPCOMING",
    date: "October 15, 2026",
    time: "10:00 AM - 5:00 PM IST",
    venue: "Main Auditorium, RIT",
    registrationUrl: "https://forms.gle/nexus-summit-placeholder",
    isRegistrationOpen: true,
    featured: true,
    tags: ["Systems", "AI", "Cloud", "Leadership"],
  },
  {
    id: "intro-to-open-source-systems",
    slug: "intro-to-open-source-systems",
    title: "Hands-on Open Source & Modern Web Architectures",
    tagline: "Build scalable full-stack platforms from scratch",
    description:
      "A technical workshop focusing on production-grade TypeScript, Next.js architecture, Git workflows, and contributing to open-source software ecosystems.",
    category: "WORKSHOP",
    status: "UPCOMING",
    date: "November 08, 2026",
    time: "2:00 PM - 6:00 PM IST",
    venue: "CSE Department Lab 3, RIT",
    registrationUrl: "https://forms.gle/nexus-workshop-placeholder",
    isRegistrationOpen: true,
    featured: true,
    tags: ["Web", "TypeScript", "Open Source", "Next.js"],
  },
  {
    id: "hack-nexus-ideathon-2025",
    slug: "hack-nexus-ideathon-2025",
    title: "HackNEXUS: Campus Innovation Sprint",
    tagline: "36-Hour Prototype Challenge for Social & Campus Impact",
    description:
      "A high-energy hackathon bringing together cross-functional teams to solve real-world problems in campus automation, sustainable tech, and AI tools.",
    category: "HACKATHON",
    status: "CONCLUDED",
    date: "November 22, 2025",
    time: "Concluded",
    venue: "RIT Innovation Center",
    isRegistrationOpen: false,
    featured: false,
    tags: ["Hackathon", "Prototyping", "Team Building"],
  },
];
