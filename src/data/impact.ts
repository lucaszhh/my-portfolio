import type { Metric } from "./types";

export const impactMetrics: Metric[] = [
  {
    id: "mxm-users",
    value: "Mendoza por Mí",
    label: "600k+ users",
    description:
      "Provincial government platform integrated with state agencies.",
/*     link: {
      label: "Case study",
      href: "/case-studies/mendoza-por-mi",
    }, */
  },
  {
    id: "cumbre-users",
    value: "Cumbre",
    label: "400+ institutions",
    description: "Language-learning platform built from scratch.",
/*     link: {
      label: "Case study",
      href: "/case-studies/cumbre",
    }, */
  },
  {
    id: "migration",
    value: "Vite→Next.js",
    label: "architecture migration",
    description: "Server rendering and long-term maintainability.",
  },
  {
    id: "auth",
    value: "Keycloak",
    label: "authentication and sessions",
    description: "SSO integrated with official digital signatures.",
  },
  {
    id: "design-system",
    value: "Design System",
    label: "46 components · 184 tokens",
    description: "From a Figma library to code: Storybook, 140+ tests and npm packages.",
  },
  {
    id: "ai-workflow",
    value: "AI workflows",
    label: "16 skills · 9 pipelines",
    description: "AI-assisted engineering workflow the team uses daily.",
  },
];
