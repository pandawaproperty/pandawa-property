import type { MetadataRoute } from "next";

import { industrialAreas } from "@/data/industrialAreas";
import { developers } from "@/data/developers";
import { properties } from "@/data/properties";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://pandawaproperty.com";

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/property`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/kawasan-industri`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/partner`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/kontak`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/tentang`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/jual`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/sewa`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
  ];

  const propertyPages: MetadataRoute.Sitemap = properties.map(
    (property) => ({
      url: `${baseUrl}/property/${property.slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    })
  );

  const industrialAreaPages: MetadataRoute.Sitemap =
    industrialAreas.map((area) => ({
      url: `${baseUrl}/kawasan-industri/${area.slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    }));

  const developerPages: MetadataRoute.Sitemap =
    developers.map((developer) => ({
      url: `${baseUrl}/partner/${developer.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    }));

  return [
    ...staticPages,
    ...propertyPages,
    ...industrialAreaPages,
    ...developerPages,
  ];
}