import { properties } from "@/data/properties";
import PropertyCard from "@/components/PropertyCard";

type Props = {
  searchParams: Promise<{
    keyword?: string;
    category?: string;
    status?: string;
    area?: string;
  }>;
};

import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  const property = properties.find(
    (item) => item.slug === slug
  );

  if (!property) {
    return {
      title: "Properti Tidak Ditemukan",
    };
  }

  return {
    title: `${property.title} | Pandawa Property`,

    description:
      `${property.category} ${property.status} di ${property.location}. ` +
      `Luas tanah ${property.landArea}. ` +
      `Lihat informasi lengkap hanya di Pandawa Property.`,

    alternates: {
      canonical: `/property/${property.slug}`,
    },

    openGraph: {
      title: property.title,

      description:
        `${property.category} ${property.status} di ${property.location}`,

      url: `/property/${property.slug}`,

      type: "article",

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

export default async function PropertyPage({
  searchParams,
}: Props) {
  const params = await searchParams;

  const keyword = params.keyword?.toLowerCase() || "";
  const category = params.category || "";
  const status = params.status || "";
  const area = params.area || "";

  const filteredProperties = properties.filter((property) => {
    const matchKeyword =
      property.title.toLowerCase().includes(keyword) ||
      property.location.toLowerCase().includes(keyword);

    const matchCategory =
      !category || property.category === category;

    const matchStatus =
      !status || property.status === status;

    const matchArea =
      !area || property.areaSlug === area;

    return (
      matchKeyword &&
      matchCategory &&
      matchStatus &&
      matchArea
    );
  });

  return (
    <main className="bg-gray-50 min-h-screen">

      {/* Hero */}
      <section className="bg-zinc-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <h1 className="text-5xl font-bold">
            Property Listing
          </h1>

          <p className="mt-6 text-xl text-gray-300">
            Warehouse, Factory & Industrial Land
          </p>

        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">

          <div className="flex justify-between items-center mb-10">

            <h2 className="text-3xl font-bold">
              Semua Properti
            </h2>

            <p className="text-gray-500">
              {filteredProperties.length} Properti ditemukan
            </p>

          </div>

          {filteredProperties.length === 0 ? (

            <div className="bg-white rounded-2xl shadow p-12 text-center">

              <h3 className="text-2xl font-bold">
                Properti tidak ditemukan
              </h3>

              <p className="text-gray-500 mt-4">
                Coba ubah filter pencarian Anda.
              </p>

            </div>

          ) : (

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

              {filteredProperties.map((property) => (

                <PropertyCard
                  key={property.id}
                  property={property}
                />

              ))}

            </div>

          )}

        </div>
      </section>

    </main>
  );
}