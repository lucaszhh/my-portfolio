type Capability = {
    title: string;
    description: string;
};

export const designSystem = {
    title: "Design System & Component Library",
    subtitle:
        "The MxM Design System, built from scratch: 46 React components, 116 icons and 184 design tokens synced from Figma, documented in Storybook, covered by 140+ tests and shipped as npm packages.",
    capabilities: [
        {
            title: "Core components",
            description: "Button, Input, Select and their variants, all driven by tokens.",
        },
        {
            title: "Overlays",
            description: "Modal, Drawer and Dialog with controlled state.",
        },
        {
            title: "Typography and tokens",
            description: "Type scale, spacing, color and radius tokens.",
        },
        {
            title: "Forms",
            description: "React Hook Form + Zod for consistent validation.",
        },
        {
            title: "Error handling",
            description: "Standard empty, loading and fallback states.",
        },
        {
            title: "Accessibility",
            description: "Focus states, ARIA and keyboard navigation.",
        },
    ] as Capability[],
};
