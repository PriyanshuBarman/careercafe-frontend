import {
  Facebook02Icon,
  GithubIcon,
  InstagramIcon,
  Linkedin02Icon,
  Mail01Icon,
  NewTwitterIcon,
} from "@hugeicons/core-free-icons";

export const SITE_INFO = {
  name: "CareerCafe",
  shortName: "CareerCafe",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://www.careercafe.in",
  description: "Career Cafe - Brewing Future Analysts",
  ogImage: "./screenshots/wide-light.png",
  keywords: [
    "Careercafe",
    "Careercafe data analytics interviews",
    "Careercafe interview preparation",
  ],
};

export const SOCIALS = [
  {
    name: "Gmail",
    icon: Mail01Icon,
    href: "#",
  },
  {
    name: "Github",
    icon: GithubIcon,
    href: "#",
  },
  {
    name: "LinkedIn",
    icon: Linkedin02Icon,
    href: "#",
  },
  {
    name: "Twitter",
    icon: NewTwitterIcon,
    href: "#",
  },
  {
    name: "Facebook",
    icon: Facebook02Icon,
    href: "#",
  },
  {
    name: "Instagram",
    icon: InstagramIcon,
    href: "#",
  },
] as const;

export const META_THEME_COLORS = {
  light: "#ffffff",
  dark: "#09090b",
};
