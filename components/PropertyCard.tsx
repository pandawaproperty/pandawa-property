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
      className="group block overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
    >
      {/* Image */}

      <div className="relative h-60 overflow-hidden">

        {property.image ? (
          <Image
  src={property.image}
  alt={property.title}
  fill
  sizes="(max-width:768px) 100vw,
(max-width:1200px) 50vw,
33vw"
  className="object-contain p-2 transition duration-700 group-hover:scale-105"
/>
        ) : (
          <div className="flex h-full items-center justify-center bg-zinc-200 text-zinc-500">
            Foto Properti
          </div>
        )}

        {property.category && (
          <div className="absolute left-4 top-4 rounded-xl bg-yellow-400 px-4 py-2 text-sm font-semibold text-zinc-900 shadow">
            {property.category}
          </div>
        )}
      </div>

      {/* Content */}

      <div className="p-6">

        <h3 className="text-2xl font-bold text-zinc-900">
          {property.title}
        </h3>

        <div className="mt-3 flex items-center gap-2 text-zinc-500">
          <span>📍</span>
          <span>{property.location}</span>
        </div>

        <div className="mt-6 text-3xl font-bold text-yellow-600">
          {property.price}
        </div>

        <div className="mt-6 grid grid-cols-2 gap-4 rounded-2xl bg-zinc-50 p-4">

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

      </div>
    </Link>
  );
}