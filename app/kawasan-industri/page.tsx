import Image from "next/image";
import Link from "next/link";
import { industrialAreas } from "@/data/industrialAreas";

export default function KawasanIndustriPage() {
  return (
    <main className="bg-gray-50 min-h-screen">
      {/* Hero */}
      <section className="bg-zinc-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold">
            Kawasan Industri
          </h1>

          <p className="mt-6 text-lg text-gray-300 max-w-3xl mx-auto">
            Temukan kawasan industri terbaik di Cikarang, Bekasi,
            Karawang, dan sekitarnya untuk kebutuhan Warehouse,
            Factory, maupun Industrial Land.
          </p>
        </div>
      </section>

      {/* List Kawasan */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {industrialAreas.map((area) => (

              <Link
                key={area.id}
                href={`/kawasan-industri/${area.slug}`}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
              >

                <Image
                  src={area.image}
                  alt={area.name}
                  width={800}
                  height={500}
                  
                  className="w-full h-60 object-cover"
                />

                <div className="p-6">

                  <h2 className="text-2xl font-bold">
                    {area.name}
                  </h2>

                  <p className="text-gray-500 mt-2">
                    📍 {area.location}
                  </p>

                  <p className="mt-4 text-gray-600 line-clamp-3">
                    {area.description}
                  </p>

                  <div className="border-t mt-6 pt-4 space-y-2 text-sm text-gray-600">

                    <p>
                      <strong>Developer :</strong> {area.developer}
                    </p>

                    <p>
                      <strong>Luas :</strong> {area.totalArea}
                    </p>

                    <p>
                      <strong>Akses Tol :</strong> {area.tollAccess}
                    </p>

                  </div>

                  <div className="mt-6">
                    <span className="inline-flex items-center bg-yellow-400 text-black px-4 py-2 rounded-xl font-semibold">
                      Lihat Detail →
                    </span>
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