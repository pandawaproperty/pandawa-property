import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { developers } from "@/data/developers";
import { industrialAreas } from "@/data/industrialAreas";
import { properties } from "@/data/properties";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export default async function DeveloperDetailPage({
  params,
}: Props) {
  const { slug } = await params;

  const developer = developers.find(
    (item) => item.slug === slug
  );

  if (!developer) {
    notFound();
  }

  const areas = industrialAreas.filter(
    (item) => item.developerSlug === developer.slug
  );

  const areaSlugs = areas.map((item) => item.slug);

  const developerProperties = properties.filter((property) =>
    areaSlugs.includes(property.areaSlug)
  );

  // ---- BIARKAN SELURUH JSX DI BAWAH TETAP SAMA ----

  return (
    <main className="bg-gray-50 min-h-screen">

      {/* Hero */}
      <section className="bg-zinc-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-6">

          <div className="flex flex-col md:flex-row items-center gap-10">

            <div className="w-40 h-40 relative bg-white rounded-2xl overflow-hidden">

              <Image
                src={developer.logo}
                alt={developer.name}
                fill
                className="object-contain p-4"
              />

            </div>

            <div>

              <h1 className="text-5xl font-bold">
                {developer.name}
              </h1>

              <p className="mt-4 text-gray-300 max-w-3xl">
                {developer.description}
              </p>

              {"location" in developer && (
                <p className="mt-6">
                  📍 {developer.location}
                </p>
              )}

              {"website" in developer &&
                developer.website && (
                  <a
                    href={developer.website}
                    target="_blank"
                    className="inline-block mt-5 bg-yellow-400 text-black px-6 py-3 rounded-xl font-semibold hover:bg-yellow-300 transition"
                  >
                    Website Resmi
                  </a>
                )}

            </div>

          </div>

        </div>
      </section>

      {/* Statistik */}
      <section className="py-12">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid md:grid-cols-3 gap-6">

            <div className="bg-white rounded-2xl shadow p-8 text-center">

              <div className="text-5xl font-bold text-yellow-500">
                {areas.length}
              </div>

              <p className="mt-2">
                Kawasan Industri
              </p>

            </div>

            <div className="bg-white rounded-2xl shadow p-8 text-center">

              <div className="text-5xl font-bold text-yellow-500">
                {developerProperties.length}
              </div>

              <p className="mt-2">
                Listing Properti
              </p>

            </div>

            <div className="bg-white rounded-2xl shadow p-8 text-center">

              <div className="text-5xl font-bold text-yellow-500">
                {
                  developerProperties.filter(
                    (item) => item.status === "Dijual"
                  ).length
                }
              </div>

              <p className="mt-2">
                Properti Dijual
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* Kawasan Industri */}
      <section className="pb-20">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-3xl font-bold mb-8">
            Kawasan Industri
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

            {areas.map((area) => (

              <Link
                key={area.id}
                href={`/kawasan-industri/${area.slug}`}
                className="bg-white rounded-2xl shadow hover:shadow-xl transition overflow-hidden"
              >

                <div className="relative h-52">

                  <Image
                    src={area.image}
                    alt={area.name}
                    fill
                    className="object-cover"
                  />

                </div>

                <div className="p-6">

                  <h3 className="text-xl font-bold">
                    {area.name}
                  </h3>

                  <p className="text-gray-600 mt-2">
                    {area.location}
                  </p>

                  <div className="mt-5 text-yellow-600 font-semibold">
                    Lihat Kawasan →
                  </div>

                </div>

              </Link>

            ))}

          </div>

        </div>

      </section>

    </main>
  );
}