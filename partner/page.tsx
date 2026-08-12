import Image from "next/image";
import Link from "next/link";

import { developers } from "@/data/developers";
import { industrialAreas } from "@/data/industrialAreas";


export default function PartnerPage() {
  return (
    <main className="bg-gray-50 min-h-screen">

      {/* Hero */}
      <section className="bg-zinc-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <h1 className="text-5xl font-bold">
            Partner Kami
          </h1>

          <p className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto">
            Pandawa Property bekerja sama dengan berbagai developer
            kawasan industri terpercaya di Indonesia.
          </p>

        </div>
      </section>

      {/* Developer */}
      <section className="py-20">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {developers.map((developer) => {

              const areas = industrialAreas.filter(
                (area) =>
                  area.developerSlug === developer.slug
              );

              return (

                <div
                  key={developer.id}
                  className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition"
                >

                  <div className="relative h-52 bg-gray-100">

                    <Image
                      src={developer.logo}
                      alt={developer.name}
                      fill
                      className="object-contain p-8"
                    />

                  </div>

                  <div className="p-8">

                    <h2 className="text-2xl font-bold">
                      {developer.name}
                    </h2>

                    <p className="text-gray-600 mt-4">
                      {developer.description}
                    </p>

                    <div className="mt-6">

                      <h3 className="font-semibold mb-3">
                        Kawasan Industri
                      </h3>

                      <ul className="space-y-2">

                        {areas.map((area) => (

                          <li key={area.id}>
                            • {area.name}
                          </li>

                        ))}

                      </ul>

                    </div>

                    <Link
                      href={`/partner/${developer.slug}`}
                      className="inline-block mt-8 bg-yellow-400 hover:bg-yellow-300 px-6 py-3 rounded-xl font-semibold transition"
                    >
                      Lihat Detail
                    </Link>

                  </div>

                </div>

              );

            })}

          </div>

        </div>

      </section>

    </main>
  );
}