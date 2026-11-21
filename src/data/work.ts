import type { LinkItem } from "./types";

export type WorkItem = {
  id: string;
  index: string;
  name: string;
  kind: string;
  period: string;
  summary: string;
  highlights: string[];
  spec: { key: string; value: string }[];
  stack: string[];
  image?: { src: string; alt: string };
  link?: LinkItem;
};

export const featuredWork: WorkItem = {
  id: "mxm",
  index: "01",
  name: "Mendoza por Mí",
  kind: "Provincial government platform",
  period: "2025 — present",
  summary:
    "The citizen services platform of the Province of Mendoza, integrated with state agencies and shipped as web and mobile app.",
  highlights: [
    "Led the migration from Vite to Next.js App Router.",
    "Designed the data-fetching and error-handling layer used by the whole team.",
    "Keycloak SSO integrated with official state digital signatures.",
    "Built the MxM Design System and the team's AI-assisted workflow.",
  ],
  spec: [
    { key: "users", value: "600k+" },
    { key: "role", value: "frontend technical reference" },
    { key: "rendering", value: "next.js app router" },
    { key: "auth", value: "keycloak · gde signatures" },
    { key: "deploy", value: "docker · nginx · haproxy" },
  ],
  stack: ["Next.js", "React", "TypeScript", "TanStack Query", "Zod", "Keycloak", "NestJS"],
  link: { label: "mxm.mendoza.gov.ar", href: "https://mxm.mendoza.gov.ar/", external: true },
};

export const work: WorkItem[] = [
  {
    id: "cumbre",
    index: "02",
    name: "Cumbre",
    kind: "EdTech platform",
    period: "2024 — 2025",
    summary:
      "Language-learning platform built from scratch in a two-person team, used by 400+ educational institutions.",
    highlights: [
      "Notion-like rich content editor.",
      "Assessment engine with 27+ auto-graded activity types.",
    ],
    spec: [
      { key: "institutions", value: "400+" },
      { key: "activity types", value: "27+" },
    ],
    stack: ["Next.js", "TypeScript", "Material UI", "Zod", "Django REST"],
    link: { label: "cumbre.mendoza.edu.ar", href: "https://cumbre.mendoza.edu.ar/inicio", external: true },
  },
  {
    id: "onaf",
    index: "03",
    name: "ONAF · Universidad del Aconcagua",
    kind: "University research observatory",
    period: "2026 — present",
    summary:
      "Lead developer. Security overhaul of the production site and a new headless platform in progress.",
    highlights: [
      "PHP 7.4 → 8.3, SQL injection fix, security headers.",
      "Headless React 19 SPA on the WordPress REST API, tested with Playwright.",
    ],
    spec: [
      { key: "plugins patched", value: "35" },
      { key: "known CVEs", value: "0" },
    ],
    stack: ["WordPress", "PHP", "React 19", "Vite", "Playwright"],
    image: { src: "/projects/onaf.png", alt: "Home page of the ONAF observatory website" },
    link: { label: "onaf.uda.edu.ar", href: "https://onaf.uda.edu.ar/", external: true },
  },
];
