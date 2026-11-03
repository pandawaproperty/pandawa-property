import Image from "next/image";
import Link from "next/link";

type Property = {
  id: number;
  slug: string;
  title: string;
  location: string;
  price: string;
  landArea: string;
  buildingArea: string;
  category?: string;
  image?: string;
};

type PropertyCardProps = {
  property: Property;
};

export default function PropertyCard({
  property,
}: PropertyCardProps) {
  return (
    <Link
      href={`/property/${property.slug}`}
      className="group block overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-md transition-all duration-300 hover:-translate-y-2 hover:border-yellow-400 hover:shadow-2xl"
    >
      {/* Image */}

      <div className="relative h-56 overflow-hidden bg-gradient-to-br from-zinc-100 to-white md:h-64">
        {property.image ? (
          <Image
            src={property.image}
            alt={property.title}
            fill
            sizes="(max-width:768px) 100vw,
(max-width:1200px) 50vw,
33vw"
            className="object-contain p-4 transition duration-700 group-hover:scale-110"
          />
        ) : (
          <div className="flex h-full items-center justify-center bg-zinc-200 text-zinc-500">
            Foto Properti
          </div>
        )}

        {property.category && (
          <div className="absolute left-4 top-4 rounded-full bg-yellow-400 px-4 py-2 text-xs font-bold uppercase tracking-wider text-zinc-900 shadow-lg">
            {property.category}
          </div>
        )}
      </div>

      {/* Content */}

      <div className="p-5 md:p-6">
        <h3 className="line-clamp-2 text-xl font-bold leading-8 text-zinc-900 transition group-hover:text-yellow-600 md:text-2xl">
          {property.title}
        </h3>

        <div className="mt-3 flex items-center gap-2 text-sm text-zinc-500">
          <span>📍</span>
          <span>{property.location}</span>
        </div>

        <div className="mt-6 text-2xl font-extrabold text-yellow-600 md:text-3xl">
          {property.price}
        </div>

        <div className="mt-6 grid grid-cols-2 gap-3 rounded-2xl border border-zinc-100 bg-zinc-50 p-4">
          <div>
            <div className="text-xs uppercase tracking-wide text-zinc-500">
              Tanah
            </div>

            <div className="mt-1 font-semibold">
              {property.landArea}
            </div>
          </div>

          <div>
            <div className="text-xs uppercase tracking-wide text-zinc-500">
              Bangunan
            </div>

            <div className="mt-1 font-semibold">
              {property.buildingArea}
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-between border-t pt-5">
          <span className="text-sm font-medium text-zinc-500">
            Lihat Detail
          </span>

          <span className="text-xl transition duration-300 group-hover:translate-x-2">
            →
          </span>
        </div>
      </div>
    </Link>
  );
}