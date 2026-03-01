type Capability = {
    title: string;
    description: string;
};

export const designSystem = {
    title: "Design System & Component Library",
    subtitle:
        "Sistema modular con patrones consistentes, foco en escalabilidad y calidad.",
    capabilities: [
        {
            title: "Componentes base",
            description: "Button, Input, Select y variantes con tokens.",
        },
        {
            title: "Overlays",
            description: "Modal, Drawer y Dialog con estados controlados.",
        },
        {
            title: "Tipografía y tokens",
            description: "Escala tipográfica, espaciado, colores y radios.",
        },
        {
            title: "Formularios",
            description: "React Hook Form + Zod para validaciones consistentes.",
        },
        {
            title: "Manejo de errores",
            description: "Estados vacíos, loading y fallbacks estandarizados.",
        },
        {
            title: "Accesibilidad",
            description: "Focus states, aria y navegación por teclado.",
        },
    ] as Capability[],
};
