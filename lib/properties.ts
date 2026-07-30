import { properties } from "@/data/properties";

export function getProperties() {
  return properties;
}

export function getPropertyBySlug(slug: string) {
  return properties.find(
    (property) => property.slug === slug
  );
}

export function getPropertiesByAreaSlug(areaSlug: string) {
  return properties.filter(
    (property) => property.areaSlug === areaSlug
  );
}