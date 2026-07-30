import { IndustrialArea } from "@/types/industrialArea";

interface AreaCTAProps {
  area: IndustrialArea;
}

export default function AreaCTA({
  area,
}: AreaCTAProps) {
  return (
    <section className="bg-zinc-900 text-white py-24">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-5xl font-bold leading-tight">
          Butuh Properti di {area.name}?
        </h2>

        <p className="mt-6 text-xl text-gray-300">
          Hubungi Pandawa Property untuk
          mendapatkan rekomendasi Warehouse,
          Factory maupun Industrial Land
          terbaik di kawasan ini.
        </p>

        <a
          href="https://wa.me/6281290004662"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center mt-10 rounded-xl bg-yellow-500 px-8 py-4 font-bold text-black hover:bg-yellow-400 transition"
        >
          WhatsApp Sekarang
        </a>
      </div>
    </section>
  );
}