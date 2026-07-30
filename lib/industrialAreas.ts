import { industrialAreas } from "@/data/industrialAreas";

export function getIndustrialAreas() {
  return industrialAreas;
}

export function getIndustrialAreaBySlug(slug: string) {
  return industrialAreas.find((area) => area.slug === slug);
}

export function getIndustrialAreasByDeveloperSlug(
  developerSlug: string
) {
  return industrialAreas.filter(
    (area) => area.developerSlug === developerSlug
  );
}