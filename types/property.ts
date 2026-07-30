export type PropertyCategory =
  | "Warehouse"
  | "Factory"
  | "Industrial Land";

export type PropertyStatus =
  | "Dijual"
  | "Disewa";

export interface Property {
  id: number;

  /**
   * Relasi ke Industrial Area
   */
  areaSlug: string;

  slug: string;

  title: string;

  category: PropertyCategory;

  status: PropertyStatus;

  location: string;

  landArea: string;

  buildingArea: string;

  price: string;

  latitude: number;

  longitude: number;

  image: string;

  images: string[];

  description: string;

  facilities: string[];
}