import { alumniData } from "@/data/alumni";
import { AlumniMember } from "@/types";

export async function getAlumni(): Promise<AlumniMember[]> {
  return alumniData;
}
