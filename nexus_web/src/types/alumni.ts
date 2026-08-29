export interface AlumniMember {
  id: string;
  name: string;
  previousRole: string;
  batch: string; // e.g. "Batch of 2025"
  currentPosition?: string;
  currentCompany?: string;
  bio?: string;
  avatarUrl?: string;
  linkedin?: string;
  github?: string;
  achievements?: string[];
}
