export type Department =
  | "ADMINISTRATION"
  | "TECHNOLOGY"
  | "MEDIA_AND_MARKETING"
  | "OPERATIONS"
  | "PARTNERSHIPS";

export interface DepartmentInfo {
  key: Department;
  name: string;
  shortDescription: string;
  leadRole: string;
  responsibilities: string[];
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  department: Department;
  bio?: string;
  responsibilities?: string;
  avatarUrl?: string;
  socials: {
    github?: string;
    linkedin?: string;
    twitter?: string;
    instagram?: string;
    email?: string;
  };
  tenure: string;
  isCoreLead: boolean;
  order: number;
}
