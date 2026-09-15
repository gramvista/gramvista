import type { LucideIcon } from "lucide-react";
export interface Service {
  slug: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  image: string;
  imageAlt: string;
  statement: string;
  explanation: string;
  approach: string;
  accent:
    | "blue"
    | "indigo"
    | "violet"
    | "steel"
    | "amber"
    | "teal"
    | "emerald"
    | "royal";
  layout: "right" | "left" | "wide" | "product";
  icon: LucideIcon;
  features: string[];
  solutions: string[];
  relatedServices: string[];
}
