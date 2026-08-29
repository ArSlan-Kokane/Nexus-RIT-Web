import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/common/section-heading";
import { siteConfig } from "@/data/site-config";
import { getDepartments } from "@/lib/data";
import { ArrowUpRight, CheckCircle2, HelpCircle } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Join NEXUS",
  description: "Apply for NEXUS membership, core board positions, and technical guild roles at Rajarambapu Institute of Technology (RIT).",
};

export default async function JoinPage() {
  const departments = await getDepartments();

  const recruitmentSteps = [
    {
      step: "01",
      title: "Submit Application",
      description: "Complete the official Google Form application indicating your preferred department, background, and past projects.",
    },
    {
      step: "02",
      title: "Task / Review",
      description: "Short technical task (for Tech/Media) or problem-statement breakdown (for Ops/Partnerships/Admin).",
    },
    {
      step: "03",
      title: "Leadership Interview",
      description: "Discussion with the President, Tech Director, and Department Leads on vision alignment and team fit.",
    },
    {
      step: "04",
      title: "Onboarding & Induction",
      description: "Welcome to the NEXUS guild, repository access, project assignment, and commencement of tenure.",
    },
  ];

  const faqs = [
    {
      question: "Who is eligible to apply for NEXUS?",
      answer: "All undergraduate engineering students of Rajarambapu Institute of Technology (RIT) across all branches and academic years are eligible to apply.",
    },
    {
      question: "Do I need prior hackathon or software engineering experience?",
      answer: "For Technology roles, familiarity with programming fundamentals is helpful. For other divisions (Media, Ops, Partnerships), we prioritize hunger to learn, dedication, and organizational integrity over credentials.",
    },
    {
      question: "Can I apply to multiple departments?",
      answer: "Yes. In the application form, you can select your primary and secondary department preferences.",
    },
    {
      question: "How are recruitment applications processed?",
      answer: "Applications are submitted directly through the official NEXUS Google Form and evaluated by the core leadership board.",
    },
  ];

  return (
    <div className="flex flex-col w-full py-12 md:py-20 space-y-20">
      {/* 1. HERO RECRUITMENT BANNER */}
      <section>
        <Container size="lg">
          <div className="rounded-2xl bg-gradient-to-br from-blue-950/40 via-[#0c0c10] to-[#050507] border border-blue-900/40 p-8 sm:p-14 relative overflow-hidden">
            <div className="max-w-3xl space-y-6">
              <div className="flex flex-wrap items-center gap-2">
                <Badge variant="glow">Official Recruitment</Badge>
                <span className="text-xs font-mono text-zinc-400">
                  {siteConfig.recruitment.deadline}
                </span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
                Join the NEXUS Collective
              </h1>

              <p className="text-base sm:text-lg text-zinc-300 leading-relaxed">
                Step into a high-ownership student ecosystem. Whether you build full-stack software, design compelling media, negotiate partnerships, or coordinate campus hackathons — there is a track for you.
              </p>

              <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
                <a
                  href={siteConfig.recruitment.googleFormUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto"
                >
                  <Button size="lg" variant="primary" className="w-full sm:w-auto text-sm font-semibold h-12 px-8">
                    Open Google Form Application
                    <ArrowUpRight className="h-4 w-4 ml-2" />
                  </Button>
                </a>
                <Link href="#departments" className="w-full sm:w-auto">
                  <Button size="lg" variant="secondary" className="w-full sm:w-auto text-sm h-12 px-6">
                    View Open Tracks
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 2. FIVE DIVISION TRACKS */}
      <section id="departments">
        <Container size="lg">
          <SectionHeading
            badge="Tracks & Divisions"
            title="Choose Your Functional Focus"
            description="Explore our five core areas of contribution and select where your skills create the highest leverage."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {departments.map((dept) => (
              <Card key={dept.key} className="flex flex-col justify-between bg-[#0a0a0e] border-[#1f1f2c]">
                <CardHeader className="space-y-2">
                  <Badge variant="outline">{dept.leadRole}</Badge>
                  <CardTitle className="text-xl text-white">{dept.name}</CardTitle>
                  <CardDescription className="text-xs text-zinc-400">
                    {dept.shortDescription}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3 pt-2">
                  <p className="text-[11px] font-mono uppercase text-zinc-500">Core Responsibilities:</p>
                  <ul className="text-xs text-zinc-400 space-y-1.5">
                    {dept.responsibilities.map((resp, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="h-3.5 w-3.5 text-blue-400 shrink-0 mt-0.5" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* 3. SELECTION PROCESS TIMELINE */}
      <section className="bg-[#07070a] py-16 border-y border-[#1c1c27]">
        <Container size="lg">
          <SectionHeading
            badge="Selection Flow"
            title="How We Select Members"
            description="Our transparent, merit-driven induction workflow designed to assess curiosity, drive, and execution capability."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {recruitmentSteps.map((step) => (
              <div key={step.step} className="p-6 rounded-xl bg-[#0c0c10] border border-[#1c1c27] space-y-3">
                <div className="text-2xl font-bold font-mono text-blue-400">{step.step}</div>
                <h3 className="text-base font-bold text-white">{step.title}</h3>
                <p className="text-xs text-zinc-400 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 4. FAQ SECTION */}
      <section>
        <Container size="lg">
          <SectionHeading
            badge="Clarifications"
            title="Frequently Asked Questions"
            description="Common questions regarding NEXUS membership, commitments, and recruitment."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {faqs.map((faq, idx) => (
              <Card key={idx} className="bg-[#0c0c10] border-[#1c1c27]">
                <CardHeader>
                  <CardTitle className="text-base text-white flex items-start gap-2">
                    <HelpCircle className="h-4 w-4 text-blue-400 shrink-0 mt-1" />
                    <span>{faq.question}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-xs text-zinc-400 leading-relaxed">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Bottom Application Callout */}
          <div className="text-center pt-12">
            <a
              href={siteConfig.recruitment.googleFormUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <Button size="lg" variant="primary" className="text-sm font-semibold h-12 px-8">
                Submit Your Application (Google Form)
                <ArrowUpRight className="h-4 w-4 ml-2" />
              </Button>
            </a>
          </div>
        </Container>
      </section>
    </div>
  );
}
