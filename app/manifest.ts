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
    orientation: "portrait-primary",
    scope: "/",
    lang: "en",
    icons: [
      {
        src: "/assets/icons/eservone-logo.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/assets/icons/eservone-logo.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/assets/icons/eservone-logo.png",
        sizes: "any",
        type: "image/png",
        purpose: "any"
      }
    ],
    categories: ["business", "productivity", "lifestyle", "utilities"],
    screenshots: [
      {
        src: "/assets/images/screenshot-wide.png",
        sizes: "1280x720",
        type: "image/png",
        form_factor: "wide"
      },
      {
        src: "/assets/images/screenshot-narrow.png",
        sizes: "750x1334",
        type: "image/png",
        form_factor: "narrow"
      }
    ],
    shortcuts: [
      {
        name: "Find Services",
        short_name: "Services",
        description: "Search for service providers",
        url: "/services",
        icons: [
          {
            src: "/assets/icons/eservone-logo.png",
            sizes: "96x96"
          }
        ]
      },
      {
        name: "My Bookings",
        short_name: "Bookings",
        description: "View your service bookings",
        url: "/bookings",
        icons: [
          {
            src: "/assets/icons/eservone-logo.png",
            sizes: "96x96"
          }
        ]
      }
    ],
  }
}
