export default function TentangPage() {
  return (
    <main className="bg-gray-50">

      {/* Hero */}
      <section className="bg-zinc-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <h1 className="text-5xl font-bold">
            Tentang Pandawa Property
          </h1>

          <p className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto">
            Spesialis pemasaran Warehouse, Factory dan Industrial Land
            di kawasan industri Indonesia.
          </p>

        </div>
      </section>

      {/* Company */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

          <div>

            <h2 className="text-4xl font-bold mb-6">
              Siapa Kami?
            </h2>

            <p className="text-gray-700 leading-8">
              Pandawa Property merupakan perusahaan yang berfokus pada
              pemasaran properti industri, meliputi Warehouse, Factory,
              Storage dan Industrial Land di berbagai kawasan industri
              seperti Lippo Cikarang, Jababeka, MM2100, GIIC,
              KIIC dan kawasan industri lainnya.
            </p>

            <p className="text-gray-700 leading-8 mt-6">
              Kami membantu investor, perusahaan nasional maupun
              perusahaan multinasional dalam menemukan lokasi terbaik
              untuk ekspansi bisnis, pembangunan pabrik,
              pusat distribusi maupun gudang logistik.
            </p>

          </div>

          <div className="bg-white rounded-3xl shadow-lg p-10">

            <h3 className="text-3xl font-bold mb-8">
              Mengapa Memilih Kami?
            </h3>

            <ul className="space-y-5">

              <li>✅ Spesialis Properti Industri</li>
              <li>✅ Database Listing Terupdate</li>
              <li>✅ Area Cikarang & Karawang</li>
              <li>✅ Pendampingan Hingga Closing</li>
              <li>✅ Negosiasi Profesional</li>
              <li>✅ Respon Cepat</li>

            </ul>

          </div>

        </div>
      </section>

      {/* Vision */}
      <section className="py-20 bg-white">

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10">

          <div className="rounded-3xl bg-yellow-400 p-10">

            <h2 className="text-3xl font-bold mb-5">
              Visi
            </h2>

            <p className="leading-8">
              Menjadi perusahaan pemasaran properti industri
              terpercaya di Indonesia yang memberikan solusi
              terbaik bagi investor dan pelaku industri.
            </p>

          </div>

          <div className="rounded-3xl bg-zinc-900 text-white p-10">

            <h2 className="text-3xl font-bold mb-5">
              Misi
            </h2>

            <ul className="space-y-4">

              <li>• Memberikan pelayanan profesional.</li>

              <li>• Menyediakan listing terbaik.</li>

              <li>• Menjadi partner bisnis jangka panjang.</li>

              <li>• Memberikan informasi pasar industri yang akurat.</li>

            </ul>

          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="py-24 bg-zinc-900 text-center text-white">

        <div className="max-w-4xl mx-auto px-6">

          <h2 className="text-5xl font-bold">
            Siap Membantu Investasi Industri Anda
          </h2>

          <p className="mt-6 text-gray-300">
            Hubungi tim Pandawa Property untuk konsultasi gratis
            mengenai Warehouse, Factory maupun Industrial Land.
          </p>

          <a
            href="https://wa.me/6281290004662"
            target="_blank"
            className="inline-block mt-10 bg-yellow-400 text-black px-8 py-4 rounded-xl font-bold hover:bg-yellow-300 transition"
          >
            Hubungi Kami
          </a>

        </div>

      </section>

    </main>
  );
}