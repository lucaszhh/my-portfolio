import type { CaseStudy } from "./types";

export const caseStudies: CaseStudy[] = [
  {
    id: "mxm",
    slug: "mendoza-por-mi",
    title: "Mendoza por Mí",
    summary:
      "Migración completa de Vite a Next.js para una plataforma pública provincial de alto tráfico.",
    problem:
      "La base frontend requería una arquitectura más escalable, con mejor performance y mantenibilidad.",
    approach:
      "Rediseñé la arquitectura de consumo de APIs, definí estándares de componentes y migré a Next.js con SSR.",
    results: [
      "Mejoras de performance y tiempos de carga.",
      "Arquitectura modular para escalar equipos y features.",
      "Base sólida para integraciones con organismos estatales.",
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
      "Plataforma educativa construida desde cero con un sistema de componentes y flujos de evaluación complejos.",
    problem:
      "Se necesitaba un frontend robusto para gestionar contenidos y evaluaciones con múltiples tipos de actividades.",
    approach:
      "Definí la arquitectura del proyecto, diseñé componentes reutilizables y construí ABMs con validaciones.",
    results: [
      "27+ tipos de actividades autocorregibles.",
      "Consistencia visual en toda la plataforma.",
      "Escalabilidad para miles de estudiantes y docentes.",
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
      "Ticketera para reservas de transporte turístico con flujos de pago integrados.",
    problem:
      "Optimizar el flujo de reservas y la gestión de tickets para un servicio turístico.",
    approach:
      "Diseñé flujos de reserva, panel de gestión y pasarela de pagos integrada.",
    results: [
      "Checkout más simple y rápido para usuarios.",
      "Gestión centralizada de tickets y reservas.",
    ],
    stack: ["Next.js", "React", "TypeScript", "Shadcn/ui"],
  },
];
