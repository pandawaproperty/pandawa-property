import { developers } from "@/data/developers";
import { IndustrialArea } from "@/types/industrialArea";

interface AreaStatsProps {
  area: IndustrialArea;
}

export default function AreaStats({
  area,
}: AreaStatsProps) {
  const developer = developers.find(
    (item) => item.slug === area.developerSlug
  );

  const items = [
    {
      title: "Lokasi",
      value: area.location,
      icon: "📍",
    },
    {
      title: "Developer",
      value: developer?.name ?? "-",
      icon: "🏢",
    },
    {
      title: "Luas Kawasan",
      value: area.totalArea,
      icon: "🏭",
    },
    {
      title: "Akses Tol",
      value: area.tollAccess,
      icon: "🛣️",
    },
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid gap-6 lg:grid-cols-4">
          {items.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl bg-white p-8 shadow-lg transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="text-4xl">
                {item.icon}
              </div>

              <p className="mt-4 text-sm font-medium text-gray-500">
                {item.title}
              </p>

              <h3 className="mt-2 text-2xl font-bold text-gray-900">
                {item.value}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}