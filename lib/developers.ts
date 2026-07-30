import { developers } from "@/data/developers";

export function getDevelopers() {
  return developers;
}

export function getDeveloperById(id: number) {
  return developers.find((developer) => developer.id === id);
}

export function getDeveloperBySlug(slug: string) {
  return developers.find((developer) => developer.slug === slug);
}