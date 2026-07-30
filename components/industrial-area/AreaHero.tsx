import Image from "next/image";
import Link from "next/link";

import { developers } from "@/data/developers";
import { IndustrialArea } from "@/types/industrialArea";

interface AreaHeroProps {
  area: IndustrialArea;
}

export default function AreaHero({
  area,
}: AreaHeroProps) {
  const developer = developers.find(
    (item) => item.slug === area.developerSlug
  );

  return (
    <section className="relative h-[550px] overflow-hidden">
      <Image
        src={area.image}
        alt={area.name}
        fill
        sizes="(max-width:768px) 100vw,
(max-width:1200px) 50vw,
33vw"
        priority
        className="object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/30" />

      <div className="absolute inset-0 flex items-center">
        <div className="mx-auto w-full max-w-7xl px-6 text-white">
          <Link
            href="/product"
            className="inline-flex items-center gap-2 text-yellow-400 transition hover:text-yellow-300"
          >
            ← Kembali ke Produk
          </Link>

          <div className="mt-6 inline-flex rounded-full bg-yellow-500 px-5 py-2 font-semibold text-black">
            {developer?.name ?? "-"}
          </div>

          <h1 className="mt-6 text-5xl font-bold lg:text-6xl">
            {area.name}
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-200 lg:text-xl lg:leading-9">
            {area.description}
          </p>
        </div>
      </div>
    </section>
  );
}