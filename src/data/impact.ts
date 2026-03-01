import type { Metric } from "./types";

export const impactMetrics: Metric[] = [
  {
    id: "mxm-users",
    value: "Mendoza por Mí",
    label: "300k+ usuarios",
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
    label: "10k+ estudiantes",
    description: "Más de 400 instituciones educativas en Cumbre.",
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
    label: "componentes reutilizables",
    description: "Consistencia visual y escalabilidad.",
  },
  {
    id: "data-quality",
    value: "TanStack Query + Zod",
    label: "datos confiables",
    description: "Estado asincrónico y validación robusta.",
  },
];
