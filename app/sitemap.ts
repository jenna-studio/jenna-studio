import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://jenna-studio.dev";

  return [
    { url: `${baseUrl}/`, changeFrequency: "monthly", priority: 1 },
    { url: `${baseUrl}/about/`, changeFrequency: "yearly", priority: 0.8 },
    { url: `${baseUrl}/projects/`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/portfolios/`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/contact/`, changeFrequency: "yearly", priority: 0.7 },
  ];
}
