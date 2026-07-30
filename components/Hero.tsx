import Image from "next/image";

export default function Hero() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen">

        <Image
          src="/images/industri.jpg"
          alt="Warehouse"
          fill
          className="object-cover"
          priority
        />

        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 flex h-full items-center">
          <div className="max-w-7xl mx-auto px-6">

            <p className="text-yellow-400 uppercase tracking-[6px] font-semibold">
              Warehouse • Factory • Industrial Land
            </p>

            <h1 className="text-6xl font-bold text-white mt-6 leading-tight">
              Pandawa Property
            </h1>

            <p className="text-2xl text-gray-200 mt-4">
              Marketing Properti Kawasan Industri
            </p>

            <p className="text-gray-300 mt-6 max-w-xl leading-8">
              Spesialis penjualan dan penyewaan Warehouse, Factory,
              Industrial Land serta Storage di kawasan industri
              Cikarang, Karawang dan sekitarnya.
            </p>

            <div className="mt-10 flex gap-4">

              <button className="bg-yellow-500 hover:bg-yellow-400 transition px-8 py-4 rounded-lg font-semibold">
                Lihat Properti
              </button>

              <button className="border border-white text-white hover:bg-white hover:text-black transition px-8 py-4 rounded-lg">
                Hubungi Kami
              </button>

            </div>

          </div>
        </div>

      </section>
    </>
  );
}