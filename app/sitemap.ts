import { readFileSync } from "node:fs";
import { join } from "node:path";
import { MetadataRoute } from "next";

type IndexEntry = {
  slug: string;
  date: string;
  modified?: string;
};

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://debeauclinic.com";

  const staticRoutes: {
    path: string;
    changeFrequency: "daily" | "weekly" | "monthly" | "yearly";
    priority: number;
  }[] = [
    { path: "", changeFrequency: "weekly", priority: 1.0 },
    { path: "/filler", changeFrequency: "monthly", priority: 0.9 },
    { path: "/botox", changeFrequency: "monthly", priority: 0.9 },
    { path: "/ulthera", changeFrequency: "monthly", priority: 0.9 },
    { path: "/laser", changeFrequency: "monthly", priority: 0.8 },
    { path: "/mesotherapy", changeFrequency: "monthly", priority: 0.8 },
    { path: "/facial-treatments", changeFrequency: "monthly", priority: 0.8 },
    { path: "/cell-therapy", changeFrequency: "monthly", priority: 0.8 },
    { path: "/weight-management", changeFrequency: "monthly", priority: 0.8 },
    { path: "/personalized-vitamins", changeFrequency: "monthly", priority: 0.8 },
    { path: "/about-dr-beau", changeFrequency: "monthly", priority: 0.7 },
    { path: "/customer-reviews", changeFrequency: "weekly", priority: 0.7 },
    { path: "/promotion", changeFrequency: "weekly", priority: 0.8 },
    { path: "/contact-us", changeFrequency: "monthly", priority: 0.6 },
    { path: "/blog", changeFrequency: "daily", priority: 0.7 },
  ];

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  let blogEntries: MetadataRoute.Sitemap = [];
  try {
    const raw = readFileSync(join(process.cwd(), "data-drive/blog-posts/_index.json"), "utf8");
    const posts: IndexEntry[] = JSON.parse(raw);
    blogEntries = posts.map((post) => ({
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: new Date(post.modified ?? post.date),
      changeFrequency: "monthly",
      priority: 0.6,
    }));
  } catch {
    // silently skip if data not available at build time
  }

  return [...staticEntries, ...blogEntries];
}
