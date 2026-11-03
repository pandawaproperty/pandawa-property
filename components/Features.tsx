export default function Features() {
  return (
    <section className="py-24 bg-gray-100">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center">
          Mengapa Memilih Pandawa Property
        </h2>

        <p className="text-center text-gray-600 mt-4 max-w-2xl mx-auto">
          Kami membantu perusahaan menemukan Warehouse, Factory,
          dan Industrial Land terbaik di kawasan industri Indonesia.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-16">

          <div className="bg-white rounded-2xl p-8 shadow hover:shadow-xl transition">
            <div className="text-5xl">🏭</div>

            <h3 className="text-2xl font-semibold mt-6">
              Spesialis Kawasan Industri
            </h3>

            <p className="text-gray-600 mt-4">
              Fokus pada Warehouse, Factory, Storage dan Industrial Land.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow hover:shadow-xl transition">
            <div className="text-5xl">📍</div>

            <h3 className="text-2xl font-semibold mt-6">
              Lokasi Strategis
            </h3>

            <p className="text-gray-600 mt-4">
              Cikarang, Karawang, Bekasi, Subang dan kawasan industri lainnya.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow hover:shadow-xl transition">
            <div className="text-5xl">🤝</div>

            <h3 className="text-2xl font-semibold mt-6">
              Pendampingan Profesional
            </h3>

            <p className="text-gray-600 mt-4">
              Mulai dari pencarian properti hingga proses transaksi selesai.
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}