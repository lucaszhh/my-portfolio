import type { LinkItem } from "./types";

export const links: {
  email: LinkItem;
  whatsapp: LinkItem;
  portfolio: LinkItem;
  linkedin: LinkItem;
  github: LinkItem;
} = {
  email: {
    label: "lzarandon.dev@gmail.com",
    href: "mailto:lzarandon.dev@gmail.com",
  },
  whatsapp: {
    label: "+5492613828489",
    href: "https://wa.me/5492613828489",
    external: true,
  },
  portfolio: {
    label: "lucaszarandon.vercel.app",
    href: "https://lucaszarandon.vercel.app",
    external: true,
  },
  linkedin: {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/lucas-zarandon/",
    external: true,
  },
  github: {
    label: "GitHub",
    href: "https://www.github.com/lucaszhh",
    external: true,
  },
};
