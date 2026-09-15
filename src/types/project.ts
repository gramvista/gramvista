export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  location?: string;
  year?: number;
  featured: boolean;
  technologies: string[];
  clientName?: string;
  clientPermission?: boolean;
  challenge?: string;
  solution?: string;
  outcome?: string;
  gallery?: { src: string; alt: string }[];
}
