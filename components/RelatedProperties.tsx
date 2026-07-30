import { properties } from "@/data/properties";
import PropertyCard from "@/components/PropertyCard";

type RelatedPropertiesProps = {
  currentSlug: string;
  areaSlug: string;
};

export default function RelatedProperties({
  currentSlug,
  areaSlug,
}: RelatedPropertiesProps) {
  const relatedProperties = properties
    .filter(
      (property) =>
        property.areaSlug === areaSlug &&
        property.slug !== currentSlug
    )
    .slice(0, 3);

  if (relatedProperties.length === 0) {
    return null;
  }

  return (
    <section className="py-20">
      <h2 className="text-3xl font-bold mb-8">
        Properti Serupa
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {relatedProperties.map((property) => (
          <PropertyCard
            key={property.id}
            property={property}
          />
        ))}
      </div>
    </section>
  );
}