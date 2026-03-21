import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://debeauclinic.com";

  const routes: {
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
    { path: "/about-dr-beau", changeFrequency: "monthly", priority: 0.7 },
    { path: "/customer-reviews", changeFrequency: "weekly", priority: 0.7 },
    { path: "/promotion", changeFrequency: "weekly", priority: 0.8 },
    { path: "/contact-us", changeFrequency: "monthly", priority: 0.6 },
    { path: "/blog", changeFrequency: "daily", priority: 0.7 },
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
