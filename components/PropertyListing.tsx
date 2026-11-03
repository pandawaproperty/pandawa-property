import { properties } from "@/data/properties";
import PropertyCard from "@/components/PropertyCard";

export default function PropertyListing() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center">
          <h2 className="text-4xl font-bold">
            Listing Properti Terbaru
          </h2>

          <p className="text-gray-600 mt-4">
            Pilihan Warehouse, Factory, dan Industrial Land terbaik.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-16">
          {properties.map((property) => (
            <PropertyCard
              key={property.id}
              property={property}
            />
          ))}
        </div>
      </div>
    </section>
  );
}