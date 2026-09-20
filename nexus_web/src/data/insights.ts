import { InsightArticle } from "@/types";

export const insightsData: InsightArticle[] = [
  {
    id: "engineering-leadership-at-rit",
    slug: "engineering-leadership-at-rit",
    title: "The Architecture of Student Leadership: Scaling Technical Impact",
    excerpt:
      "How student clubs can move beyond ceremonial events to establish rigorous engineering standards, open-source culture, and real-world problem solving.",
    content: `
### The Premise: Beyond Ceremonial Student Clubs

In collegiate ecosystems across the country, student technical clubs frequently fall into a predictable trap: spending months orchestrating ceremonial events, seminar lectures, and certificate distributions, while producing near-zero production software or durable engineering culture.

At NEXUS, we decided from day one to treat the organization as an engineering collective and product laboratory rather than an event committee.

### 1. Functional Directorate Governance

Instead of a flat committee where everyone is nominally responsible for everything, NEXUS operates across five distinct divisions:
- **Administration**: Strategic alignment, governance, and institutional accountability with RIT leadership.
- **Technology**: System architecture, code reviews, automated CI/CD pipelines, and hackathon technical acceleration.
- **Media & Social Marketing**: Narrative design, technical documentation dissemination, and brand integrity.
- **Operations**: Physical hackathon sprint logistics, equipment scheduling, and fiscal budgeting.
- **Partnerships**: Ecosystem relations, corporate sponsorships, and inter-collegiate technical alliances.

### 2. High-Ownership Engineering Standards

Every project under NEXUS must meet three non-negotiable criteria:
1. **Public Repository Transparency**: All code is version-controlled and open to inspection.
2. **Deterministic Architecture**: Strict TypeScript typing, lint enforcement, and modular Data Access Layers (DAL).
3. **Institutional Durability**: Codebases must be structured so that graduating cohorts transfer maintainable systems to incoming engineering apprentices.

### 3. The Hackathon Engine

Rather than waiting for college-sponsored hackathons once a year, the NEXUS Hackathon Engine operates continuously: scouting national problem statements (SIH), conducting cross-disciplinary matchmaking (AI + Embedded + UI), and running 36-hour sprint simulations.

Leadership is not conferred by title; it is demonstrated through what your teams ship.
    `.trim(),
    category: "COMMUNITY",
    author: {
      name: "Siddharth Pawar",
      role: "President, NEXUS",
    },
    publishedAt: "August 2026",
    readTime: "5 min read",
    tags: ["Leadership", "Community", "Strategy", "Institutional Impact"],
    featured: true,
  },
  {
    id: "building-zero-overhead-web-architectures",
    slug: "building-zero-overhead-web-architectures",
    title: "Building Resilient, Low-Latency Web Platforms with Next.js & Server Components",
    excerpt:
      "A technical walkthrough of data decoupling, CSS-first micro-interactions, and maintainability strategies for modern full-stack web applications.",
    content: `
### The Challenge: Performance vs. Interactivity

Modern web platforms often suffer from bloated client bundles, unnecessary client components, and cascading layout shifts. In building the official NEXUS digital platform, our engineering directorate mandated a strict architectural standard:

> "The platform must feel like an institutional innovation ecosystem: futuristic, editorial, and technically impeccable—with minimal client bundle overhead."

### 1. Data Access Layer (DAL) Abstraction

Rather than allowing UI components to directly import raw data or execute ad-hoc fetches, every query passes through a strongly typed Data Access Layer in \`src/lib/data/\`:

\`\`\`typescript
// src/lib/data/team.ts
export async function getDepartments(): Promise<DepartmentInfo[]> {
  return departments;
}

export async function getTeamMembers(): Promise<TeamMember[]> {
  return [...teamMembers].sort((a, b) => a.order - b.order);
}
\`\`\`

This decoupling offers multiple architectural advantages:
- Pages remain Server Components by default.
- Static pre-rendering generates 100% static HTML at build time.
- Migrating to an external headless CMS or database requires modifying only the DAL boundary without touching UI render logic.

### 2. Pushing Client Boundaries to the Periphery

Only components requiring browser event listeners, keyboard navigation, or interactive tabs carry the \`"use client"\` directive:
- **DirectorateList**: Interactive division inspector with keyboard arrow navigation.
- **ExploreOverlay**: High-performance full-viewport directory modal with focus trapping and ESC listeners.
- **CursorSparkles**: Lightweight canvas rendering engine decoupled from React state updates.

### 3. CSS-First Micro-Interactions

Instead of introducing heavy JavaScript physics engines for simple card hovers and borders:
- Hardware-accelerated CSS transforms (\`translate3d\`, \`scale\`, \`opacity\`).
- CSS variables for spatial cursor glow: \`--cursor-x\` and \`--cursor-y\`.
- \`prefers-reduced-motion\` media queries to ensure accessible, zero-motion degradation on demanding devices.

By adhering to these principles, the entire platform delivers instantaneous sub-100ms navigation with 100% static generation.
    `.trim(),
    category: "TECH_DEEP_DIVE",
    author: {
      name: "Arslan Kokane",
      role: "Tech Director, NEXUS",
    },
    publishedAt: "August 2026",
    readTime: "7 min read",
    tags: ["Next.js", "TypeScript", "Architecture", "Web Performance"],
    featured: true,
  },
];
