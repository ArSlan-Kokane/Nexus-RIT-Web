import { departments, teamMembers } from "@/data/team";
import { Department, DepartmentInfo, TeamMember } from "@/types";

export async function getDepartments(): Promise<DepartmentInfo[]> {
  return departments;
}

export async function getDepartmentByKey(key: Department): Promise<DepartmentInfo | null> {
  return departments.find((d) => d.key === key) || null;
}

export async function getTeamMembers(): Promise<TeamMember[]> {
  return [...teamMembers].sort((a, b) => a.order - b.order);
}

export async function getTeamMembersByDepartment(department: Department): Promise<TeamMember[]> {
  return teamMembers
    .filter((m) => m.department === department)
    .sort((a, b) => a.order - b.order);
}

export async function getCoreLeadership(): Promise<TeamMember[]> {
  return teamMembers
    .filter((m) => m.isCoreLead)
    .sort((a, b) => a.order - b.order);
}
