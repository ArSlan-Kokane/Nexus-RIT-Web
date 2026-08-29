import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://nexusrit.org";
  const routes = [
    "",
    "/about",
    "/team",
    "/events",
    "/hackathons",
    "/projects",
    "/insights",
    "/resources",
    "/alumni",
    "/join",
    "/contact",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1.0 : 0.8,
  }));
}
