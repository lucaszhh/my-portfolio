import type { ExperienceItem } from "./types";

export const experiences: ExperienceItem[] = [
  {
    id: "necta-mxm",
    role: "Frontend Engineer",
    company: "Necta (Mendoza por Mí)",
    period: "2025 — Presente",
    location: "Mendoza, Argentina",
    bullets: [
      "Lideré la migración del frontend desde Vite hacia Next.js, mejorando arquitectura, rendimiento y mantenibilidad.",
      "Definí la arquitectura de consumo de APIs, manejo de estados asincrónicos y control de errores.",
      "Implementé autenticación y sesiones mediante Keycloak, con control de acceso robusto.",
      "Revisé PRs y definí estándares técnicos para integraciones de equipos externos.",
    ],
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Material UI",
      "TanStack Query",
      "React Hook Form",
      "Zod",
      "Keycloak",
    ],
    link: {
      label: "Conocé Mendoza x Mí",
      href: "https://mxm.mendoza.gov.ar/",
      external: true,
    },
  },
  {
    id: "necta-cumbre",
    role: "Frontend Engineer",
    company: "Necta (Cumbre)",
    period: "2024 — 2025",
    location: "Mendoza, Argentina",
    bullets: [
      "Desarrollé el frontend desde cero, definiendo arquitectura, estructura del proyecto y sistema de componentes.",
      "Implementé un gestor de contenidos tipo Notion y sistema de evaluaciones con 27+ tipos de actividades.",
      "Construí ABMs completos con React Hook Form y validaciones con Zod.",
      "Aseguré consistencia visual con componentes reutilizables en Material UI y CSS modular.",
    ],
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Material UI",
      "React Hook Form",
      "Zod",
    ],
    link: {
      label: "Conocé Cumbre",
      href: "https://cumbre.mendoza.edu.ar/inicio",
      external: true,
    },
  },
  {
    id: "freelance",
    role: "Frontend Engineer & Product Builder",
    company: "Freelance",
    period: "2023 — Presente",
    bullets: [
      "Desarrollo soluciones web end-to-end participando en discovery, arquitectura y entrega.",
      "Construyo interfaces reutilizables con React, Astro, TypeScript y Shadcn/ui.",
      "Integro APIs y despliego aplicaciones en producción para clientes.",
    ],
    stack: ["React", "Astro", "TypeScript", "Shadcn/ui"],
    link: {
      label: "Ver proyectos",
      href: "#projects",
      external: false,
    },
  },
  {
    id: "docencia",
    role: "Docente de Programación",
    company: "UTN / Casa del Futuro",
    period: "2022 — 2024",
    bullets: [
      "Diseñé y dicté cursos certificados de desarrollo web para 400+ estudiantes.",
      "Creé material didáctico y ejercicios prácticos orientados a proyectos reales.",
      "Lideré comunidades de aprendizaje con más de 200 estudiantes activos.",
    ],
    stack: ["HTML", "CSS", "JavaScript", "React", "Python"],
    link: {
      label: "Ver sitio",
      href: "https://hostpage.vercel.app/",
      external: true,
    },
  },
];
