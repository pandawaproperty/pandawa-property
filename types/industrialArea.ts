export type LocaleText = {
  id: string;
  en: string;
  zh: string;
};

export type IndustrialArea = {
  id: number;
  developerSlug: string;
  slug: string;

  name: LocaleText;
  location: LocaleText;
  developer: LocaleText;
  tollAccess: LocaleText;
  description: LocaleText;

  totalArea: string;
  image: string;
};