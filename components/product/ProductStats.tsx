import { developers } from "@/data/developers";
import { industrialAreas } from "@/data/industrialAreas";
import { properties } from "@/data/properties";

export default function ProductStats() {
  const stats = [
    {
      title: "Developer",
      value: developers.length,
    },
    {
      title: "Kawasan Industri",
      value: industrialAreas.length,
    },
    {
      title: "Property",
      value: properties.length,
    },
  ];

  return (
    <section className="-mt-12 relative z-10">
      <div className="max-w-6xl mx-auto px-6">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {stats.map((item) => (
            <div
              key={item.title}
              className="bg-white rounded-3xl shadow-lg p-8 text-center"
            >
              <h2 className="text-5xl font-bold text-yellow-500">
                {item.value}
              </h2>

              <p className="mt-3 text-gray-600">
                {item.title}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}