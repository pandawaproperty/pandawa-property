export type Developer = {
  id: number;
  slug: string;
  name: string;
  logo: string;
  banner: string;
  location: string;

  description: {
    id: string;
    en: string;
    zh: string;
  };

  website?: string;
};