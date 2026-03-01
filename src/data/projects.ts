import type { LinkItem, ProjectItem } from "./types";

export type PortfolioProject = ProjectItem & {
  subtitle?: string;
  image?: string;
  cdf?: boolean;
  showOnHome?: boolean;
};

const liveLink = (href: string): LinkItem => ({
  label: "Live",
  href,
  external: true,
});

export const projects: PortfolioProject[] = [
  {
    id: "oro-negro",
    name: "Oro Negro",
    year: "2025",
    subtitle: "Ticketera de transporte turístico",
    description: [
      "Desarrollo del frontend con Next.js y Shadcn/ui.",
      "Implementación de flujos de reserva y gestión de tickets.",
      "Pagos integrados con Mercado Pago.",
    ],
    stack: ["Next.js", "React", "TypeScript", "Shadcn/ui"],
    image: "/projects/oro-negro.png",
    links: [
      liveLink('https://eloronegro.com.ar/')
    ],
    showOnHome: true,
  },
  {
    id: "flores-en-fuego",
    name: "Flores en Fuego",
    year: "2025",
    subtitle: "Carta digital con backoffice",
    description: [
      "Backoffice para gestión de productos y categorías.",
      "Panel administrativo con ABM y flujos vía QR.",
    ],
    stack: ["React", "TypeScript", "Tailwind"],
    links: [
      liveLink("https://menufuego.com"),
    ],
    image: "/projects/menufuego.png",
    showOnHome: true,
  },
  {
    id: "rincon-del-malbec",
    name: "Rincón del Malbec",
    year: "2025",
    subtitle: "Reservas y ecommerce para bodega",
    description: [
      "Sistema de reservas y catálogo de productos.",
      "UI responsive con Astro, TypeScript y Shadcn/ui.",
    ],
    stack: ["Astro", "TypeScript", "Shadcn/ui"],
    links: [
      liveLink("https://rincondelmalbec.com.ar/"),
    ],
    image: "/projects/rincon-del-malbec.png",
    showOnHome: true,
  },
  {
    id: "digital-money-house",
    name: "Digital Money House",
    year: "2023",
    subtitle: "Billetera Virtual",
    description: [
      "Aplicación financiera con SSR y flujos de onboarding.",
      "Implementación de UI con Styled Components.",
    ],
    stack: ["Next.js", "React", "TypeScript", "Style Components"],
    links: [
      liveLink("https://digitalmoneyhouse.vercel.app/"),
    ],
    image: "/projects/png/dmh.png",
    showOnHome: false,
  },
  {
    id: "git-con-github",
    name: "Git con GitHub",
    year: "2023",
    subtitle: "Plataforma educativa",
    description: [
      "Curso práctico de Git y GitHub para principiantes.",
    ],
    stack: ["HTML", "CSS", "JavaScript"],
    links: [
      liveLink("https://git-con-github.netlify.app/"),
    ],
    image: "/projects/png/git-con-github.png",
    showOnHome: false,
  },
  {
    id: "casa-del-futuro",
    name: "Casa del Futuro Godoy Cruz",
    year: "2023",
    subtitle: "Landing Page",
    description: [
      "Landing institucional con Next.js y foco en performance.",
    ],
    stack: ["Next.js", "React", "TypeScript", "CSS"],
    links: [
      liveLink("https://casadelfuturogc.netlify.app/"),
    ],
    image: "/projects/png/cdfnext.png",
    showOnHome: false,
  },
];

export const homeProjects = projects.filter((project) => project.showOnHome);
