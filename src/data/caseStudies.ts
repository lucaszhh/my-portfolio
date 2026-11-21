import type { CaseStudy } from "./types";

export const caseStudies: CaseStudy[] = [
  {
    id: "mxm",
    slug: "mendoza-por-mi",
    title: "Mendoza por Mí",
    summary:
      "Full migration from Vite to Next.js for a high-traffic provincial government platform (600k+ users).",
    problem:
      "The frontend needed a more scalable architecture with better performance and maintainability.",
    approach:
      "I redesigned the data-fetching architecture, defined component standards and migrated to Next.js with server rendering.",
    results: [
      "A codebase ready for server rendering and faster page loads.",
      "Modular architecture that scales with teams and features.",
      "A solid base for integrations with state agencies.",
    ],
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Material UI",
      "TanStack Query",
      "Zod",
      "Keycloak",
    ],
  },
  {
    id: "cumbre",
    slug: "cumbre",
    title: "Cumbre",
    summary:
      "Learning platform built from scratch, with its own component system and complex assessment flows.",
    problem:
      "The product needed a robust frontend to manage content and assessments with many activity types.",
    approach:
      "I defined the project architecture, designed reusable components and built CRUD flows with validation.",
    results: [
      "27+ auto-graded activity types.",
      "Visual consistency across the whole platform.",
      "Used by 400+ educational institutions.",
    ],
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Material UI",
      "React Hook Form",
      "Zod",
    ],
  },
  {
    id: "oro-negro",
    slug: "oro-negro",
    title: "Oro Negro",
    summary:
      "Ticketing for tourism transport bookings with integrated payments.",
    problem:
      "Streamline bookings and ticket management for a tourism service.",
    approach:
      "I designed the booking flows, the management panel and the integrated payment gateway.",
    results: [
      "A simpler, faster checkout for customers.",
      "Centralized ticket and booking management.",
    ],
    stack: ["Next.js", "React", "TypeScript", "Shadcn/ui"],
  },
];
