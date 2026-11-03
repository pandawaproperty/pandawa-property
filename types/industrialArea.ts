export interface IndustrialArea {
  id: number;

  developerSlug: string;

  developer: string;

  slug: string;

  name: string;

  image: string;

  location: string;

  totalArea: string;

  tollAccess: string;

  description: string;

  // SEO
seoTitle?: string;

seoDescription?: string;

overview?: string;

advantages?: string[];

industries?: string[];

accessibility?: string[];

faq?: {
  question: string;
  answer: string;
}[];
}