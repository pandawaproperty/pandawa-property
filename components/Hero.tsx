import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center pt-16 md:pt-20">

      {/* Background */}

      <Image
        src="/images/industri.jpg"
        alt="Warehouse"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />

      {/* Overlay */}

      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />

      {/* Content */}

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 md:px-6">

        <div className="max-w-2xl">

          <p className="text-xs font-semibold uppercase tracking-[3px] text-yellow-400 md:text-base md:tracking-[6px]">
            Warehouse • Factory • Industrial Land
          </p>

          <h1 className="mt-6 text-4xl font-bold leading-tight text-white md:text-6xl">
            Pandawa Property
          </h1>

          <p className="mt-4 text-xl text-gray-200 md:text-2xl">
            Marketing Properti Kawasan Industri
          </p>

          <p className="mt-6 text-base leading-8 text-gray-300 md:text-lg">
            Spesialis penjualan dan penyewaan Warehouse, Factory,
            Industrial Land serta Storage di kawasan industri
            Cikarang, Karawang dan sekitarnya.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">

            <Link
              href="/property"
              className="rounded-xl bg-yellow-500 px-8 py-4 text-center font-semibold text-black transition hover:bg-yellow-400"
            >
              Lihat Properti
            </Link>

            <Link
              href="/kontak"
              className="rounded-xl border border-white px-8 py-4 text-center text-white transition hover:bg-white hover:text-black"
            >
              Hubungi Kami
            </Link>

          </div>

        </div>

      </div>

    </section>
  );
}