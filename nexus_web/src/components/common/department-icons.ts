import { Department } from "@/types";
import { Briefcase, Code2, HeartHandshake, Megaphone, ShieldCheck } from "lucide-react";
import type { ComponentType } from "react";

export const departmentIcons: Record<
  Department,
  ComponentType<{ className?: string }>
> = {
  ADMINISTRATION: ShieldCheck,
  TECHNOLOGY: Code2,
  MEDIA_AND_MARKETING: Megaphone,
  OPERATIONS: Briefcase,
  PARTNERSHIPS: HeartHandshake,
};
