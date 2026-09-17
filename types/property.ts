export type LocaleText = {
  id: string;
  en: string;
  zh: string;
};

export type Property = {
  id: number;
  slug: string;

  title: LocaleText;
  description: LocaleText;

  areaSlug: string;

  status: LocaleText;
  category: LocaleText;

  location: string;

  landArea: string;
  buildingArea: string;

  price: string;

  latitude: number;
  longitude: number;

  image: string;
  images: string[];

  facilities: {
    id: string[];
    en: string[];
    zh: string[];
  };
};