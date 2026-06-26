import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || "https://lumora.space";

  const routes = [
    "",
    "/features",
    "/community",
    "/cohorts",
    "/mentors",
    "/our-story",
    "/privacy",
    "/terms"
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: route === "" ? "daily" : "weekly",
    priority: route === "" ? 1.0 : route === "/cohorts" || route === "/community" ? 0.8 : 0.5,
  }));
}
