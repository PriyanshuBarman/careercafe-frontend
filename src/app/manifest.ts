import type { MetadataRoute } from "next";

import { SITE_INFO } from "@/constants/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE_INFO.name,
    short_name: SITE_INFO.shortName,
    description: SITE_INFO.description,
    icons: [
      {
        src: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/maskable_icon_x96.png",
        sizes: "96x96",
        type: "image/png",
        purpose: "maskable",
      },
    ],
    scope: "/",
    start_url: "/",
    display: "standalone",
    screenshots: [
      {
        src: "./narrow-light.jpeg",
        type: "image/jpeg",
        sizes: "574x1280",
        form_factor: "narrow",
      },
      {
        src: "./narrow-dark.jpeg",
        type: "image/jpg",
        sizes: "574x1280",
        form_factor: "narrow",
      },
      {
        src: "./wide-light.png",
        type: "image/png",
        sizes: "1919x1079",
        form_factor: "wide",
      },
      {
        src: "./wide-dark.png",
        type: "image/png",
        sizes: "1919x1079",
        form_factor: "wide",
      },
    ],
  };
}
