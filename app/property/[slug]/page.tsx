import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Script from "next/script";

import { properties } from "@/data/properties";
import { industrialAreas } from "@/data/industrialAreas";

import PropertyGallery from "@/components/PropertyGallery";
import RelatedProperties from "@/components/RelatedProperties";
import PropertyMap from "@/components/PropertyMap";
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

  const property = properties.find(
    (item) => item.slug === slug
  );

  if (!property) {
    return {
      title: "Properti Tidak Ditemukan | Pandawa Property",
    };
  }

  return {
    title: `${property.title} | Pandawa Property`,

    description: property.description,

    alternates: {
      canonical: `/property/${property.slug}`,
    },

    openGraph: {
      title: property.title,
      description: property.description,
      url: `https://pandawaproperty.com/property/${property.slug}`,
      siteName: "Pandawa Property",

      images: [
        {
          url: property.images[0],
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: property.title,
      description: property.description,
      images: [property.images[0]],
    },
  };
}

export default async function PropertyDetail({
  params,
}: Props) {
  const { slug } = await params;

  const property = properties.find(
    (item) => item.slug === slug
  );

  if (!property) {
    notFound();
  }

  const area = industrialAreas.find(
    (item) => item.slug === property.areaSlug
  );

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
        name: "Property",
        item: "https://pandawaproperty.com/property",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: property.title,
        item: `https://pandawaproperty.com/property/${property.slug}`,
      },
    ],
  };

  const propertySchema = {
    "@context": "https://schema.org",
    "@type": "Place",

    name: property.title,

    description: property.description,

    image: property.images,

    address: {
      "@type": "PostalAddress",
      addressLocality: property.location,
      addressCountry: "ID",
    },

    geo: {
      "@type": "GeoCoordinates",
      latitude: property.latitude,
      longitude: property.longitude,
    },

    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      priceCurrency: "IDR",
      price: property.price,
    },
  };

    return (
    <>
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />

      <Script
        id="property-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(propertySchema),
        }}
      />

      <main className="bg-gray-50 pt-20">
        <AreaBreadcrumb name={property.title} />

        <div className="mx-auto max-w-7xl px-6 py-8">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Gallery */}
            <PropertyGallery
              images={property.images}
              title={property.title}
            />

            {/* Detail */}
            <div>
              <span className="inline-block rounded-full bg-yellow-400 px-4 py-2 font-semibold text-black">
                {property.status}
              </span>

              <h1 className="mt-5 text-5xl font-bold">
                {property.title}
              </h1>

              <div className="mt-3 flex items-center gap-2">
                <div className="text-xl text-yellow-500">
                  ★★★★★
                </div>

                <span className="text-gray-500">
                  Premium Listing
                </span>
              </div>

              <div className="mt-4 flex items-center gap-2 text-gray-600">
                <span>📍</span>
                <span>{property.location}</span>
              </div>

              <p className="mt-8 text-5xl font-extrabold text-yellow-500">
                {property.price}
              </p>

              <div className="mt-10 grid grid-cols-2 gap-5">
                <div className="rounded-2xl bg-white p-6 shadow-md">
                  <p className="text-gray-500">
                    Kategori
                  </p>

                  <h3 className="font-bold">
                    {property.category}
                  </h3>
                </div>

                <div className="rounded-2xl bg-white p-6 shadow-md">
                  <p className="text-gray-500">
                    Status
                  </p>

                  <h3 className="font-bold">
                    {property.status}
                  </h3>
                </div>

                <div className="rounded-2xl bg-white p-6 shadow-md">
                  <p className="text-gray-500">
                    Luas Tanah
                  </p>

                  <h3 className="font-bold">
                    {property.landArea}
                  </h3>
                </div>

                <div className="rounded-2xl bg-white p-6 shadow-md">
                  <p className="text-gray-500">
                    Luas Bangunan
                  </p>

                  <h3 className="font-bold">
                    {property.buildingArea}
                  </h3>
                </div>
              </div>

              {area && (
                <div className="mt-8 rounded-xl border border-yellow-200 bg-yellow-50 p-5">
                  <p className="text-sm text-gray-500">
                    Berada di Kawasan Industri
                  </p>

                  <a
                    href={`/kawasan-industri/${area.slug}`}
                    className="mt-2 inline-block text-lg font-bold text-yellow-700 hover:underline"
                  >
                    {area.name}
                  </a>
                </div>
              )}

              <div className="mt-10">
                <h2 className="mb-4 text-2xl font-bold">
                  Deskripsi
                </h2>

                <p className="whitespace-pre-line leading-8 text-gray-700">
                  {property.description}
                </p>
              </div>

              <div className="mt-10">
                <h2 className="mb-4 text-2xl font-bold">
                  Fasilitas
                </h2>

                <ul className="space-y-2">
                  {property.facilities.map((item) => (
                    <li key={item}>
                      ✅ {item}
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href={`https://wa.me/6281255558283?text=Halo Pandawa Property, saya tertarik dengan ${property.title}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-10 inline-block rounded-xl bg-green-600 px-8 py-4 font-semibold text-white transition hover:bg-green-700"
              >
                Hubungi via WhatsApp
              </a>
            </div>
          </div>

          <div className="mt-16">
            <PropertyMap
              latitude={property.latitude}
              longitude={property.longitude}
            />
          </div>

          <div className="mt-16">
            <RelatedProperties
              currentSlug={property.slug}
              areaSlug={property.areaSlug}
            />
          </div>

          <section className="mt-16 rounded-2xl bg-white p-8 shadow-sm">
            <h2 className="mb-6 text-3xl font-bold">
              Tentang Properti Ini
            </h2>

            <p className="leading-8 text-gray-700">
              {property.title} merupakan {property.category.toLowerCase()} yang
              berada di {property.location}. Properti ini cocok untuk kebutuhan
              investasi maupun operasional perusahaan karena memiliki akses yang
              baik ke kawasan industri dan fasilitas pendukung di sekitarnya.
            </p>

            {area && (
              <p className="mt-6 leading-8 text-gray-700">
                Properti ini berada di kawasan{" "}
                <strong>{area.name}</strong>, salah satu kawasan industri yang
                berkembang dan menjadi lokasi berbagai perusahaan nasional maupun
                internasional.
              </p>
            )}
          </section>
        </div>
      </main>
    </>
  );
}