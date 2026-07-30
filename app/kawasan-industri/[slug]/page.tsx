import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { industrialAreas } from "@/data/industrialAreas";
import { industrialAreaSeo } from "@/data/seo/industrialAreaSeo";
import { properties } from "@/data/properties";

import AreaHero from "@/components/industrial-area/AreaHero";
import AreaStats from "@/components/industrial-area/AreaStats";
import AreaPropertySection from "@/components/industrial-area/AreaPropertySection";
import AreaCTA from "@/components/industrial-area/AreaCTA";
import AreaAdvantages from "@/components/industrial-area/AreaAdvantages";
import AreaFAQ from "@/components/industrial-area/AreaFAQ";
import AreaBreadcrumb from "@/components/industrial-area/AreaBreadcrumb";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { slug } = await params;

  const area = industrialAreas.find((item) => item.slug === slug);

  if (!area) {
    return {
      title: "Kawasan Industri Tidak Ditemukan",
    };
  }

  const seo =
    industrialAreaSeo[
      slug as keyof typeof industrialAreaSeo
    ];

  return {
    title:
      seo?.title ??
      `${area.name} | Pandawa Property`,

    description:
      seo?.description ??
      area.description,

    alternates: {
      canonical: `/kawasan-industri/${slug}`,
    },

    openGraph: {
      title: seo?.title ?? area.name,
      description:
        seo?.description ?? area.description,
      images: [
        {
          url: area.image,
        },
      ],
    },
  };
}

export default async function AreaDetailPage({
  params,
}: Props) {
  const { slug } = await params;

  const area = industrialAreas.find(
    (item) => item.slug === slug
  );

  if (!area) {
    notFound();
  }

  const areaProperties = properties.filter(
    (property) => property.areaSlug === area.slug
  );

  const seo =
    industrialAreaSeo[
      slug as keyof typeof industrialAreaSeo
    ];

  // FAQ Schema
  const faqSchema = seo?.faq
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: seo.faq.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      }
    : null;

  // Breadcrumb Schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://pandawaproperty.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Kawasan Industri",
        item: "https://pandawaproperty.com/kawasan-industri",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: area.name,
        item: `https://pandawaproperty.com/kawasan-industri/${area.slug}`,
      },
    ],
  };

  return (
    <>
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqSchema),
          }}
        />
      )}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />

      <main className="bg-gray-50">
        <AreaBreadcrumb
          name={area.name}
        />

        <AreaHero area={area} />

        <AreaStats area={area} />

        <AreaPropertySection
          area={area}
          properties={areaProperties}
        />

        {seo && (
          <section className="mx-auto max-w-7xl px-6 py-12">
            <div className="rounded-xl bg-white p-8 shadow-sm">
              <h2 className="mb-6 text-3xl font-bold">
                Tentang Kawasan Industri {area.name}
              </h2>

              <p className="whitespace-pre-line leading-8 text-gray-700">
                {seo.overview}
              </p>
            </div>
          </section>
        )}

        {seo?.advantages && (
          <AreaAdvantages
            advantages={seo.advantages}
          />
        )}

        {seo?.faq && (
          <AreaFAQ
            faq={seo.faq}
          />
        )}

        <AreaCTA area={area} />
      </main>
    </>
  );
}