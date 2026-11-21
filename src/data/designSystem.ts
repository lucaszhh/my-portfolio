type Capability = {
    title: string;
    description: string;
};

export const designSystem = {
    title: "Design System & Component Library",
    subtitle:
        "Design System MxM, construido desde cero: 46 componentes React, 116 íconos y 184 design tokens sincronizados desde Figma, documentado en Storybook, con 140+ tests y publicado como paquetes npm.",
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
