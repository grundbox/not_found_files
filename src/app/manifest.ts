import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Global error",
    short_name: "Error",
    description: "Experimental project",
    start_url: "/",
    display: "standalone",
    background_color: "#fff",
    theme_color: "#fff",
    lang: "en",
    icons: [
      {
        src: "/favicon.ico",
        type: "image/x-icon",
        sizes: "any",
      },
      {
        src: "/icons/favicon-16x16.png",
        type: "image/png",
        sizes: "16x16",
      },
      {
        src: "/icons/favicon-32x32.png",
        type: "image/png",
        sizes: "32x32",
      },
      {
        src: "/icons/android-chrome-192x192.png",
        type: "image/png",
        sizes: "192x192",
      },
      {
        src: "/icons/android-chrome-512x512.png",
        type: "image/png",
        sizes: "512x512",
      },
    ],
  };
}
