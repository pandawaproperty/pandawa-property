import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[700px] md:h-screen">

        <Image
          src="/images/industri.jpg"
          alt="Warehouse"
          fill
          sizes="(max-width:768px) 100vw,
(max-width:1200px) 50vw,
33vw"
          className="object-cover"
          priority
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40"></div>

        <div className="relative z-10 flex h-full items-center">
          <div className="mx-auto w-full max-w-7xl px-5 md:px-6">

           <p className="text-xs font-semibold uppercase tracking-[3px] text-yellow-400 md:text-base md:tracking-[6px]">
  Warehouse • Factory • Industrial Land
</p>

            <h1 className="mt-5 text-4xl font-bold leading-tight text-white md:mt-6 md:text-6xl">
  Pandawa Property
</h1>

            <p className="mt-4 text-lg text-gray-200 md:text-2xl">
  Marketing Properti Kawasan Industri
</p>

            <p className="mt-6 max-w-xl text-base leading-7 text-gray-300 md:text-lg md:leading-8">
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
    </>
  );
}