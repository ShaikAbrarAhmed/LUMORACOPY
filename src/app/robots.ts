import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || "https://lumora.space";

  return {
    rules: [
      {
        userAgent: "*",
        allow: ["/", "/features", "/community", "/cohorts", "/mentors", "/our-story", "/privacy", "/terms"],
        disallow: ["/api/", "/signin", "/create-account", "/cohorts/join", "/dashboard", "/app"],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
