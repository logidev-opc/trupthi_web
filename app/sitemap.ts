import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/menu",
    "/story",
    "/nature-to-plate",
    "/ingredients",
    "/heritage",
    "/gallery",
    "/visit",
  ];

  const currentDate = new Date();

  return routes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: currentDate,
    changeFrequency: route === "" || route === "/menu" ? "daily" : "weekly",
    priority: route === "" ? 1.0 : route === "/menu" ? 0.9 : 0.8,
  }));
}
