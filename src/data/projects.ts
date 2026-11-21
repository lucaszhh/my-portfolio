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
    id: "onaf",
    name: "ONAF · Universidad del Aconcagua",
    year: "2026",
    subtitle: "University research observatory",
    description: [
      "Security overhaul of the production WordPress site: PHP 7.4 → 8.3, SQL injection fix and security headers.",
      "Institutional contact form with anti-spam protection and MySQL persistence.",
      "New headless SPA in progress (React 19, Vite, Tailwind v4) with Playwright E2E tests.",
    ],
    stack: ["WordPress", "PHP", "React", "TypeScript", "Playwright"],
    image: "/projects/onaf.png",
    links: [
      liveLink("https://onaf.uda.edu.ar/"),
    ],
    showOnHome: true,
  },
  {
    id: "oro-negro",
    name: "Oro Negro",
    year: "2025",
    subtitle: "Tourism transport ticketing",
    description: [
      "Frontend built with Next.js and Shadcn/ui, replacing a legacy WordPress site.",
      "Booking flows and ticket management.",
      "Automated Mercado Pago checkout.",
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
    subtitle: "Digital menu with back office",
    description: [
      "Back office to manage products, categories and prices.",
      "Admin panel with full CRUD and QR-based access.",
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
    subtitle: "Bookings and e-commerce for a winery",
    description: [
      "Booking system and product catalog with USD payments.",
      "Responsive UI with Astro, TypeScript and Shadcn/ui.",
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
    subtitle: "Digital wallet",
    description: [
      "Fintech app with SSR and onboarding flows.",
      "UI built with Styled Components.",
    ],
    stack: ["Next.js", "React", "TypeScript", "Styled Components"],
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
    subtitle: "Learning platform",
    description: [
      "Hands-on Git and GitHub course for beginners.",
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
      "Institutional landing page built with Next.js, focused on performance.",
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
