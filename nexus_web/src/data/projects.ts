import { ProjectItem } from "@/types";

export const projectsData: ProjectItem[] = [
  {
    id: "nexus-official-web",
    slug: "nexus-official-web",
    title: "NEXUS Digital Web Platform",
    tagline: "High-performance institutional hub for innovation and leadership",
    description:
      "The official web infrastructure of NEXUS club built with Next.js 16 App Router, TypeScript, and Tailwind CSS v4. Designed for clean aesthetics, speed, and long-term maintainability across Tech Directors.",
    category: "WEB",
    techStack: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS v4"],
    githubUrl: "https://github.com/nexus-rit/NEXUS",
    liveUrl: "https://nexusrit.org",
    contributors: [
      { name: "Arslan Kokane", role: "Tech Director", github: "https://github.com/ArSlan-Kokane" },
      { name: "Siddharth Pawar", role: "President" },
    ],
    featured: true,
    completedYear: "2026",
    highlights: [
      "Dark-first institutional design language",
      "Strictly typed data access layer",
      "Sub-100ms server component response times",
    ],
  },
  {
    id: "campus-mesh-iot",
    slug: "campus-mesh-iot",
    title: "Campus Environment Telemetry Mesh",
    tagline: "Low-power environmental sensing grid across campus nodes",
    description:
      "An IoT sensor network monitoring lab temperatures, acoustic levels, and air quality across RIT academic blocks, transmitting metrics via ESP32 mesh networks.",
    category: "IOT_EMBEDDED",
    techStack: ["C++ / Arduino", "ESP-NOW", "MQTT", "Grafana", "Node.js"],
    githubUrl: "https://github.com/nexus-rit/campus-mesh",
    contributors: [
      { name: "NEXUS Hardware Guild", role: "IoT Team" },
    ],
    featured: true,
    completedYear: "2025",
    highlights: [
      "Mesh network resilience over 500m radius",
      "Real-time telemetry dashboard",
    ],
  },
  {
    id: "rag-curriculum-assistant",
    slug: "rag-curriculum-assistant",
    title: "Intelligent Syllabus & Lab Assistant",
    tagline: "Retrieval-augmented AI for academic course references",
    description:
      "A semantic question-answering system grounded in engineering syllabi and previous question papers to aid undergraduate exam preparation.",
    category: "AI_ML",
    techStack: ["Python", "LangChain", "FastAPI", "Vector DB", "React"],
    githubUrl: "https://github.com/nexus-rit/academic-rag",
    contributors: [
      { name: "NEXUS AI Guild", role: "ML Team" },
    ],
    featured: true,
    completedYear: "2025",
    highlights: [
      "Strict citation of textbook sources",
      "Zero hallucinations on numerical derivations",
    ],
  },
];
