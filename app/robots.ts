import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://jenna-studio.dev/sitemap.xml",
    host: "https://jenna-studio.dev",
  };
}
