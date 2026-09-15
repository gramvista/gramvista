import {
  Code2,
  Database,
  Megaphone,
  MonitorSmartphone,
  ShieldCheck,
  Network,
  Radio,
  Headphones,
} from "lucide-react";
import type { Service } from "../types/service";

export const services: Service[] = [
  {
    slug: "software-solutions",
    title: "Software Solutions",
    shortDescription:
      "Custom websites, business systems, web applications and digital platforms designed around how your organization actually works.",
    longDescription:
      "Gramvista designs and develops practical software solutions for businesses, organizations and institutions that need reliable digital tools tailored to their operations. From professional company websites to internal management platforms, dashboards, APIs and web-based business systems, our focus is on building technology that solves a clear operational problem and remains maintainable as the organization grows.",
    statement: "Software built around the way you work.",
    image: "/images/services/software-solutions.webp",
    imageAlt: "Developer workspace with laptop and business dashboard",
    accent: "blue",
    layout: "right",
    features: [
      "Corporate websites",
      "Business web applications",
      "Management systems",
      "Internal dashboards",
      "Customer portals",
      "API integrations",
      "Workflow automation",
      "Custom digital platforms",
      "System modernization",
      "Technical consultation",
    ],
    solutions: [
      "A corporate website that clearly presents services and captures inquiries.",
      "An internal system for managing records, approvals and day-to-day workflows.",
      "A customer portal connected to existing business tools.",
    ],
    approach:
      "We begin with the process, users and objectives, then agree on scope, architecture and a practical delivery plan. Working features are reviewed along the way, with testing, documentation and handover planned from the start.",
    relatedServices: [
      "database-management",
      "technical-support",
      "social-media-management",
    ],
    explanation:
      "We do not believe every organization should be forced into the same software. Gramvista begins by understanding the process, users and objectives before selecting the right architecture and implementation approach.",
    icon: Code2,
  },
  {
    slug: "database-management",
    title: "Database Management",
    shortDescription:
      "Reliable database architecture, migration, optimization, backup and data-management solutions for modern applications and organizations.",
    longDescription:
      "Business systems depend on reliable data. Gramvista helps organizations design, organize and maintain database infrastructure that supports secure, consistent and efficient application performance. Our database services cover planning, implementation, migration, optimization, backup strategies and ongoing technical support.",
    statement: "Your systems are only as reliable as the data behind them.",
    image: "/images/services/database-management.webp",
    imageAlt: "Database workstation beside organized server infrastructure",
    accent: "indigo",
    layout: "left",
    features: [
      "Database architecture",
      "PostgreSQL",
      "MySQL",
      "Database migration",
      "Backup planning",
      "Data organization",
      "Query optimization",
      "Security configuration",
      "Performance troubleshooting",
      "Application database integration",
      "Business reporting support",
    ],
    solutions: [
      "A database foundation for a new business application.",
      "Migration from an existing database with a tested recovery plan.",
      "Diagnosis and improvement of slow application queries.",
    ],
    approach:
      "We assess the current data model, access requirements and workload before proposing changes. Migration and backup plans include verification and recovery steps, with sensitive changes tested before deployment.",
    relatedServices: ["software-solutions", "technical-support", "networking"],
    explanation:
      "We assess the current data model, access requirements and workload before proposing changes. Migration and backup plans include verification and recovery steps, with sensitive changes tested before deployment.",
    icon: Database,
  },
  {
    slug: "social-media-management",
    title: "Social Media & Digital Management",
    shortDescription:
      "Professional management of digital channels, content, brand presence and audience communication for businesses and organizations.",
    longDescription:
      "Gramvista helps businesses and organizations maintain a consistent and professional online presence. We support content planning, social-media account management, digital branding, campaign coordination, audience engagement and performance monitoring so that clients can focus on running their organizations while maintaining an active digital presence.",
    statement:
      "A stronger digital presence without the daily management burden.",
    image: "/images/services/social-media-management.webp",
    imageAlt: "Digital content manager working at dual monitors",
    accent: "violet",
    layout: "wide",
    features: [
      "Social-media account management",
      "Content planning",
      "Content publishing",
      "Digital branding",
      "Campaign support",
      "Audience engagement",
      "Page optimization",
      "Performance reporting",
      "Digital communication support",
    ],
    solutions: [
      "A consistent publishing schedule across business channels.",
      "Content and communication support for a product or service campaign.",
      "Regular reporting to understand how audiences engage with your content.",
    ],
    approach:
      "We agree on the audience, brand voice, publishing responsibilities and approval process before creating a content plan. Reporting informs subsequent content and campaign decisions.",
    relatedServices: [
      "software-solutions",
      "database-management",
      "technical-support",
    ],
    explanation:
      "We agree on the audience, brand voice, publishing responsibilities and approval process before creating a content plan. Reporting informs subsequent content and campaign decisions.",
    icon: Megaphone,
  },
  {
    slug: "computers-electronics",
    title: "Computers & Electronics",
    shortDescription:
      "Technology devices, computer equipment, mobile devices and accessories selected for business and personal requirements.",
    longDescription:
      "Gramvista supports computer supply, setup, maintenance and related business technology equipment for individuals, businesses and organizations. Our approach is not simply to sell devicesâ€”we help customers select technology that matches their intended use, performance requirements and budget.",
    statement: "The right equipment for the work you need to do.",
    image: "/images/services/computers-electronics.webp",
    imageAlt: "Laptop, mobile devices and accessories on a clean display table",
    accent: "steel",
    layout: "product",
    features: ["Computer supply", "Business technology equipment", "Setup", "Maintenance", "Accessories", "Electronics", "Troubleshooting"],
    solutions: [
      "Computers and peripherals for an office or school lab.",
      "Mobile devices selected for field teams and everyday business use.",
      "Equipment upgrades that match existing systems and available budgets.",
    ],
    approach:
      "We discuss the intended work, software requirements, compatibility and budget before recommending equipment. Availability, specifications, setup and warranty arrangements are confirmed in the quotation.",
    relatedServices: ["networking", "cctv-security", "technical-support"],
    explanation:
      "We discuss the intended work, software requirements, compatibility and budget before recommending equipment. Availability, specifications, setup and warranty arrangements are confirmed in the quotation.",
    icon: MonitorSmartphone,
  },
  {
    slug: "cctv-security",
    title: "CCTV & Security Systems",
    shortDescription:
      "Professional CCTV planning, equipment supply, installation, configuration and monitoring solutions for homes and organizations.",
    longDescription:
      "Gramvista provides CCTV and technology-based security solutions designed around the layout and monitoring requirements of each site. We support customers from equipment selection and camera placement through installation, configuration, remote viewing and ongoing technical support.",
    statement:
      "Security systems designed around what you actually need to monitor.",
    image: "/images/services/cctv-security.webp",
    imageAlt: "Technician installing a security camera on a building",
    accent: "amber",
    layout: "right",
    features: [
      "CCTV site assessment",
      "Camera selection",
      "Camera installation",
      "DVR/NVR setup",
      "Storage configuration",
      "Remote monitoring setup",
      "Network integration",
      "Maintenance",
      "Troubleshooting",
      "System upgrades",
    ],
    solutions: [
      "Camera coverage for entrances, shared spaces and business premises.",
      "Remote viewing configured for authorized users.",
      "An upgrade to an existing camera, recording or storage system.",
    ],
    approach:
      "We assess the site and monitoring goals, then plan camera locations, recording capacity and connectivity. Installation includes testing the coverage and helping authorized users understand the system.",
    relatedServices: ["networking", "wireless-internet", "technical-support"],
    explanation:
      "We assess the site and monitoring goals, then plan camera locations, recording capacity and connectivity. Installation includes testing the coverage and helping authorized users understand the system.",
    icon: ShieldCheck,
  },
  {
    slug: "networking",
    title: "Networking & Connectivity",
    shortDescription:
      "Reliable wired and wireless networks designed, installed and configured for homes, offices and organizations.",
    longDescription:
      "Gramvista designs and implements network infrastructure that connects users, devices and systems reliably. From office Wi-Fi to routers, switches and structured local networks, we help clients improve coverage, performance and manageability.",
    statement: "Connectivity that supports the way your organization operates.",
    image: "/images/services/networking.webp",
    imageAlt: "Network engineer inspecting a switch and structured cabling",
    accent: "teal",
    layout: "left",
    features: [
      "Router configuration",
      "Wi-Fi deployment",
      "LAN design",
      "Switch installation",
      "Access points",
      "Network expansion",
      "Device connectivity",
      "Office networks",
      "Troubleshooting",
      "Network optimization",
    ],
    solutions: [
      "Reliable Wi-Fi across an office, school or hospitality property.",
      "A structured wired network for shared devices and business systems.",
      "Improved coverage and capacity as a team or site grows.",
    ],
    approach:
      "We review the layout, number of users and connected devices before designing the network. Configuration and installation are followed by coverage and connectivity checks, with documentation for ongoing support.",
    relatedServices: [
      "wireless-internet",
      "cctv-security",
      "technical-support",
    ],
    explanation:
      "We review the layout, number of users and connected devices before designing the network. Configuration and installation are followed by coverage and connectivity checks, with documentation for ongoing support.",
    icon: Network,
  },
  {
    slug: "wireless-internet",
    title: "Wireless & Radio Internet",
    shortDescription:
      "Routers, outdoor radios, antennas and wireless links for extending reliable internet connectivity across locations.",
    longDescription:
      "Gramvista provides wireless connectivity solutions for situations where conventional cabling is impractical or greater coverage is required. We support router setup, outdoor radio equipment, antennas, wireless bridges and point-to-point or point-to-multipoint connectivity solutions based on the environment and intended use.",
    statement: "Extend connectivity beyond the limits of ordinary Wi-Fi.",
    image: "/images/services/wireless-internet.webp",
    imageAlt: "Technician configuring outdoor radio equipment on a rooftop",
    accent: "emerald",
    layout: "wide",
    features: [
      "Internet router setup",
      "Outdoor radios",
      "Wireless bridges",
      "Point-to-point links",
      "Point-to-multipoint solutions",
      "Antenna installation",
      "Network extension",
      "Internet distribution",
      "Connectivity assessment",
      "Troubleshooting",
    ],
    solutions: [
      "A point-to-point connection between nearby buildings.",
      "Internet distribution across a site where cabling is impractical.",
      "A network extension planned around distance, obstacles and capacity.",
    ],
    approach:
      "We assess the site, distance, line of sight and capacity requirements before recommending radio equipment. The installation is aligned, configured and tested in the actual environment.",
    relatedServices: ["networking", "cctv-security", "technical-support"],
    explanation:
      "We assess the site, distance, line of sight and capacity requirements before recommending radio equipment. The installation is aligned, configured and tested in the actual environment.",
    icon: Radio,
  },
  {
    slug: "technical-support",
    title: "Technical Support",
    shortDescription:
      "Practical support for installation, configuration, maintenance, troubleshooting and everyday technology challenges.",
    longDescription:
      "Technology becomes valuable when it works reliably. Gramvista provides technical support to help customers install, configure, maintain and troubleshoot the devices, networks and systems they depend on. Support can cover individual technology issues as well as ongoing organizational requirements.",
    statement:
      "Technology support when something needs to workâ€”not just when it needs to be sold.",
    image: "/images/services/technical-support.webp",
    imageAlt: "IT technician assisting a business user with a laptop",
    accent: "royal",
    layout: "right",
    features: [
      "Installation",
      "Configuration",
      "Troubleshooting",
      "System maintenance",
      "Device setup",
      "Network support",
      "Software support",
      "Hardware diagnosis",
      "Technical consultation",
      "System upgrades",
    ],
    solutions: [
      "Diagnosis of a recurring computer, software or connectivity problem.",
      "Setup and configuration of newly purchased equipment.",
      "An agreed maintenance plan for an organizationâ€™s devices and systems.",
    ],
    approach:
      "We start by understanding the symptoms and the affected equipment. We diagnose the cause, explain the recommended action and verify the result, with ongoing support agreed according to your needs.",
    relatedServices: [
      "software-solutions",
      "networking",
      "computers-electronics",
    ],
    explanation:
      "We start by understanding the symptoms and the affected equipment. We diagnose the cause, explain the recommended action and verify the result, with ongoing support agreed according to your needs.",
    icon: Headphones,
  },
];
