import type { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "EservOne - Global Service Platform",
    short_name: "EservOne",
    description:
      "Connect with trusted service providers for all your needs. From beauty and wellness to home repairs - all in one platform.",
    start_url: "/",
    display: "standalone",
    background_color: "#ECECF5",
    theme_color: "#3E3F93",
    icons: [
      {
        src: "/icon-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
    categories: ["business", "productivity", "lifestyle"],
    orientation: "portrait-primary",
    scope: "/",
    lang: "en",
  }
}
