import { DirectorateList } from "@/components/sections/home/directorate-list";
import { EventTimeline } from "@/components/sections/home/event-timeline";
import { HackathonPipeline } from "@/components/sections/home/hackathon-pipeline";
import { HeroSection } from "@/components/sections/home/hero-section";
import { ManifestoSection } from "@/components/sections/home/manifesto-section";
import { ProjectGallery } from "@/components/sections/home/project-gallery";
import { RecruitmentCallout } from "@/components/sections/home/recruitment-callout";
import { getDepartments, getEvents, getProjects, getTeamMembers } from "@/lib/data";

export default async function HomePage() {
  const [departments, members, projects, events] = await Promise.all([
    getDepartments(),
    getTeamMembers(),
    getProjects(),
    getEvents(),
  ]);

  return (
    <div className="flex flex-col w-full">
      {/* 1. Monolithic Hero */}
      <HeroSection />

      {/* 2. Typographic Manifesto (BUILD • LEAD • CONNECT) */}
      <ManifestoSection />

      {/* 3. The 5 Divisions — Interactive Directorate List */}
      <DirectorateList departments={departments} members={members} />

      {/* 4. Hackathon Acceleration Pipeline */}
      <HackathonPipeline />

      {/* 5. Editorial Project Gallery */}
      <ProjectGallery projects={projects} />

      {/* 6. Chronological Event Horizon */}
      <EventTimeline events={events} />

      {/* 7. Recruitment Callout */}
      <RecruitmentCallout />
    </div>
  );
}
