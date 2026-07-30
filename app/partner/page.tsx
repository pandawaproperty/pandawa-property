import Image from "next/image";

import { developers } from "@/data/developers";

export default function PartnerPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-zinc-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold">Partner Kami</h1>

          <p className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Pandawa Property bekerja sama dengan berbagai pengembang kawasan
            industri terpercaya di Indonesia untuk menghadirkan pilihan
            warehouse, factory, dan industrial land terbaik bagi para investor
            maupun pelaku industri.
          </p>
        </div>
      </section>

      {/* Partner List */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {developers.map((developer) => (
              <div
                key={developer.id}
                className="group rounded-3xl bg-white shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden"
              >
                <div className="h-56 flex items-center justify-center bg-gray-100 p-10">
                  <div className="relative w-full h-full">
                    <Image
                      src={developer.logo}
                      alt={developer.name}
                      fill
                      sizes="(max-width:768px) 100vw,
(max-width:1200px) 50vw,
33vw"
                      className="object-contain transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                </div>

                <div className="p-8">
                  <h2 className="text-2xl font-bold text-gray-900">
                    {developer.name}
                  </h2>

                  <p className="mt-2 text-sm text-yellow-600 font-medium">
                    Developer Kawasan Industri
                  </p>

                  <p className="mt-5 text-gray-600 leading-7">
                    {developer.description}
                  </p>

                  {developer.website && (
                    <a
                      href={developer.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center mt-8 font-semibold text-yellow-600 hover:text-yellow-700"
                    >
                      🌐 Kunjungi Website
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}