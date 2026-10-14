/**
 * Central content store for the whole portfolio.
 *
 * Every value below is a PLACEHOLDER — replace it with your own details.
 * Nothing in this file is real personal information.
 *
 * Tip: keep all copy, links and dates here so the components never need editing.
 */

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com";

export const site = {
  /** Used for <title>, Open Graph, JSON-LD and the footer. */
  name: "Bhagyalaxmi",
  /** Short professional headline shown in the hero, metadata and footer. */
  headline: "Your Professional Headline",
  /** Sentence used for meta description / social previews. */
  description:
    "Personal portfolio of Your Name — projects, experience, skills and ways to get in touch.",
  /** Absolute site URL, used for sitemap, robots and canonical links. */
  url: SITE_URL,
  email: "you@example.com",
  location: "City, Country",
  github: "https://github.com/your-username",
  linkedin: "https://www.linkedin.com/in/your-handle",
  /** Drop a PDF in `public/` with this exact name, or change the path. */
  resumeUrl: "/resume.pdf",
  availability: "Open to new opportunities",
} as const;

/** Navigation + page sections, in display order. */
export const sections = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "certifications", label: "Certifications" },
  { id: "education", label: "Education" },
  { id: "achievements", label: "Achievements" },
  { id: "contact", label: "Contact" },
] as const;

export type SectionId = (typeof sections)[number]["id"];

export const hero = {
  greeting: "Hi, I'm",
  badge: "Welcome to my portfolio",
  /** Supporting line under the name — e.g. what you do and where. */
  subheadline: "I build reliable, accessible and thoughtfully designed software.",
  /** Longer introduction paragraph. */
  intro:
    "Iam Developer in T-SPARK, Telangana Police Department, enjoy to learn the new tech and things.",
  primaryCta: { label: "Get in touch", href: "#contact" },
  secondaryCta: { label: "View projects", href: "#projects" },
} as const;

export const about = {
  paragraphs: [
    "Start with a short overview of your background — the field you work in, the roles you have held, and the technologies or methods you rely on.",
    "Then add a sentence about what you care about in your work: maintainability, performance, accessibility, clean design, or helping a team move faster.",
    "Finish with what you are looking for next — an opportunity, a collaboration, or a problem worth solving.",
  ],
  /** Rendered as a definition list of quick facts. */
  facts: [
    { label: "Location", value: "City, Country" },
    { label: "Email", value: "you@example.com" },
    { label: "Focus", value: "Your main area of expertise" },
    { label: "Status", value: "Open to new opportunities" },
  ],
} as const;

export type ExperienceItem = {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  summary: string;
  highlights: string[];
};

export const experience: ExperienceItem[] = [
  {
    id: "exp-1",
    role: "Job Title",
    company: "Company Name",
    location: "City, Country",
    period: "Jan 2023 – Present",
    summary:
      "One sentence describing your scope of work, the team you are part of, and the products you support.",
    highlights: [
      "Replace with an achievement — include a number or measurable outcome where you can.",
      "Replace with a responsibility that shows the kind of ownership you took.",
      "Replace with an improvement you introduced: performance, quality, process or tooling.",
    ],
  },
  {
    id: "exp-2",
    role: "Previous Job Title",
    company: "Previous Company",
    location: "City, Country",
    period: "Jun 2021 – Dec 2022",
    summary:
      "One sentence describing the role, the people you worked with, and the problems you solved.",
    highlights: [
      "Replace with a highlight of a project you delivered and your specific contribution.",
      "Replace with a collaboration, mentoring or cross-team effort you were part of.",
    ],
  },
  {
    id: "exp-3",
    role: "Earlier Job Title",
    company: "Earlier Company",
    location: "City, Country",
    period: "Jul 2019 – May 2021",
    summary: "One sentence summarising your responsibilities in this role.",
    highlights: [
      "Replace with a result, a delivered feature, or a responsibility you owned.",
    ],
  },
];

export type SkillGroup = {
  id: string;
  title: string;
  items: string[];
};

/** Example skill set — replace with the tools you actually use. */
export const skillGroups: SkillGroup[] = [
  {
    id: "languages",
    title: "Languages",
    items: ["TypeScript", "JavaScript", "Python", "SQL"],
  },
  {
    id: "frontend",
    title: "Frontend",
    items: ["React", "Next.js", "Tailwind CSS", "HTML", "CSS"],
  },
  {
    id: "backend",
    title: "Backend",
    items: ["Node.js", "REST APIs", "GraphQL"],
  },
  {
    id: "data",
    title: "Databases & Data",
    items: ["PostgreSQL", "MySQL", "Redis"],
  },
  {
    id: "tools",
    title: "Tools & Platforms",
    items: ["Git", "GitHub", "Vercel", "AWS"],
  },
  {
    id: "practices",
    title: "Practices",
    items: ["Testing", "Accessibility", "CI/CD", "Code review", "Agile"],
  },
];

export type Project = {
  id: string;
  title: string;
  description: string;
  tags: string[];
  repoUrl: string;
  liveUrl: string;
};

export const projects: Project[] = [
  {
    id: "project-1",
    title: "Project Name",
    description:
      "Replace with a short description: the problem it solves, your role, and the outcome you are happiest with.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    repoUrl: "https://github.com/your-username/project-name",
    liveUrl: "https://example.com",
  },
  {
    id: "project-2",
    title: "Project Name",
    description:
      "Replace with a short description of the project, the stack you chose, and one interesting technical trade-off.",
    tags: ["React", "Node.js", "PostgreSQL"],
    repoUrl: "https://github.com/your-username/project-name",
    liveUrl: "https://example.com",
  },
  {
    id: "project-3",
    title: "Project Name",
    description:
      "Replace with a short description — keep it to two or three sentences and focus on results.",
    tags: ["TypeScript", "Testing", "CI/CD"],
    repoUrl: "https://github.com/your-username/project-name",
    liveUrl: "https://example.com",
  },
];

export type Certification = {
  id: string;
  name: string;
  issuer: string;
  year: string;
  credentialUrl: string;
};

export const certifications: Certification[] = [
  {
    id: "cert-1",
    name: "Certification Name",
    issuer: "Issuing Organization",
    year: "2024",
    credentialUrl: "https://example.com/credential",
  },
  {
    id: "cert-2",
    name: "Certification Name",
    issuer: "Issuing Organization",
    year: "2023",
    credentialUrl: "https://example.com/credential",
  },
  {
    id: "cert-3",
    name: "Certification Name",
    issuer: "Issuing Organization",
    year: "2022",
    credentialUrl: "https://example.com/credential",
  },
];

export type EducationItem = {
  id: string;
  degree: string;
  institution: string;
  period: string;
  details: string[];
};

export const education: EducationItem[] = [
  {
    id: "edu-1",
    degree: "Degree or Program",
    institution: "Institution Name",
    period: "2019 – 2023",
    details: ["Optional: honours, thesis topic, or relevant coursework."],
  },
  {
    id: "edu-2",
    degree: "Earlier Qualification",
    institution: "Institution Name",
    period: "2017 – 2019",
    details: ["Optional: a short note about this stage of your education."],
  },
];

export type Achievement = {
  id: string;
  title: string;
  description: string;
  year: string;
};

export const achievements: Achievement[] = [
  {
    id: "ach-1",
    title: "Achievement Title",
    description: "Replace with an award, scholarship, publication or recognition you received.",
    year: "2024",
  },
  {
    id: "ach-2",
    title: "Achievement Title",
    description: "Replace with a competition, hackathon, open-source contribution or leadership role.",
    year: "2023",
  },
  {
    id: "ach-3",
    title: "Achievement Title",
    description: "Replace with anything worth highlighting — sports, community work, speaking or writing.",
    year: "2022",
  },
];

export const contact = {
  blurb:
    "Have a role, a project or an idea in mind? The fastest way to reach me is email — I usually reply within a couple of days.",
  responseTime: "Typically replies within 48 hours",
} as const;
