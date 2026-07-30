import { IndustrialArea } from "@/types/industrialArea";
import { Property } from "@/types/property";
import PropertyCard from "@/components/PropertyCard";

interface AreaPropertySectionProps {
  area: IndustrialArea;
  properties: Property[];
}

export default function AreaPropertySection({
  area,
  properties,
}: AreaPropertySectionProps) {
  return (
    <section className="pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-4xl font-bold">
              Listing di {area.name}
            </h2>

            <p className="text-gray-500 mt-2">
              {properties.length} Properti tersedia
            </p>
          </div>
        </div>

        {properties.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {properties.map((property) => (
              <PropertyCard
                key={property.id}
                property={property}
              />
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-3xl shadow-lg p-16 text-center">
            <div className="text-6xl mb-6">🏭</div>

            <h3 className="text-3xl font-bold">
              Belum Ada Listing
            </h3>

            <p className="text-gray-500 mt-4">
              Saat ini belum tersedia properti
              di kawasan industri ini.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}