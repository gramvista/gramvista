export interface Product {
  id: string;
  slug: string;
  name: string;
  shortName: string;
  category: string;
  tagline: string;
  description: string;
  status: "live";
  portalUrl: string;
  cta: string;
  capabilities: string[];
  featured: boolean;
}
