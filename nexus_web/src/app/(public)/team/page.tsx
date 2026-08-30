import type { Metadata } from "next";
import { getDepartments, getTeamMembers } from "@/lib/data";
import TeamContent from "./team-content";

export const metadata: Metadata = {
  title: "Team & Leadership",
  description:
    "Meet the executive board and departmental directors of NEXUS — Innovation & Leadership Collective at RIT.",
};

export default async function TeamPage() {
  const [departments, members] = await Promise.all([
    getDepartments(),
    getTeamMembers(),
  ]);

  return <TeamContent departments={departments} members={members} />;
}
