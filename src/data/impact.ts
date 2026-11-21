import type { Metric } from "./types";

export const impactMetrics: Metric[] = [
  {
    id: "mxm-users",
    value: "Mendoza por Mí",
    label: "600k+ usuarios",
    description:
      "Plataforma pública provincial integrada con organismos estatales.",
/*     link: {
      label: "Caso de estudio",
      href: "/case-studies/mendoza-por-mi",
    }, */
  },
  {
    id: "cumbre-users",
    value: "Cumbre",
    label: "400+ instituciones",
    description: "Plataforma educativa de idiomas construida desde cero.",
/*     link: {
      label: "Caso de estudio",
      href: "/case-studies/cumbre",
    }, */
  },
  {
    id: "migration",
    value: "Vite→Next.js",
    label: "migración de arquitectura",
    description: "Mejora de rendimiento y mantenibilidad.",
  },
  {
    id: "auth",
    value: "Keycloak",
    label: "autenticación y sesiones",
    description: "Integración con SSO y control de acceso.",
  },
  {
    id: "design-system",
    value: "Design System",
    label: "46 componentes · 184 tokens",
    description: "De la biblioteca en Figma al código: Storybook, 140+ tests y paquetes npm.",
  },
  {
    id: "ai-workflow",
    value: "IA aplicada",
    label: "16 skills · 9 pipelines",
    description: "Flujo de desarrollo asistido por IA que el equipo usa a diario.",
  },
];
