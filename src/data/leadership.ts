import lussaPortrait from "../assets/lussa.webp";
import pintoPortrait from "../assets/pinto.webp";

export const leadership: { name: string; role: string; bio: string; image?: string; imagePosition?: string; initials: string }[] = [
  {
    name: "LUSSA MELEMBUKI",
    role: "Founder & Chief Executive Officer (CEO)",
    bio: "Lussa leads Gramvista's overall strategy, business development and commercial operations. As Founder and CEO, he oversees client relationships, business partnerships and the growth of the company's services and products.",
    image: lussaPortrait,
    imagePosition: "center 20%",
    initials: "LM",
  },
  {
    name: "YOEL PINTO",
    role: "Co-Founder & Chief Technology Officer (CTO)",
    bio: "Yoel leads Gramvista's technology strategy, product development and system architecture. As Co-Founder and CTO, he oversees the technical direction of the company's digital platforms and solutions, with a focus on reliability, security and long-term maintainability.",
    image: pintoPortrait,
    imagePosition: "center 45%",
    initials: "YP",
  },
];
