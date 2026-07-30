import Link from "next/link";

export default function KontakPage() {
  return (
    <main className="bg-gray-50">

      {/* Hero */}
      <section className="bg-zinc-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <h1 className="text-5xl font-bold">
            Hubungi Kami
          </h1>

          <p className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto">
            Tim Pandawa Property siap membantu Anda menemukan Warehouse,
            Factory maupun Industrial Land terbaik.
          </p>

        </div>
      </section>

      {/* Contact */}
      <section className="py-20">

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12">

          {/* Informasi */}
          <div className="bg-white rounded-3xl shadow-lg p-10">

            <h2 className="text-3xl font-bold mb-8">
              Informasi Kontak
            </h2>

            <div className="space-y-6 text-lg">

              <div>
                <h3 className="font-bold">📍 Kantor</h3>
                <p>
                  The Hive Cendana Spark N105
                  <br />
                  Lippo Cikarang
                  <br />
                  Bekasi
                </p>
              </div>

              <div>
                <h3 className="font-bold">📞 WhatsApp</h3>
                <a
                  href="https://wa.me/6281255558283"
                  className="text-blue-600 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  +62 812-5555-8283
                </a>
              </div>

              <div>
                <h3 className="font-bold">✉️ Email</h3>
                <p>pandawaglobalindustri.com</p>
              </div>

              <div>
                <h3 className="font-bold">🕘 Jam Operasional</h3>
                <p>
                  Senin - Sabtu
                  <br />
                  08.30 - 17.30 WIB
                </p>
              </div>

            </div>

          </div>

          {/* Form */}
          <div className="bg-white rounded-3xl shadow-lg p-10">

            <h2 className="text-3xl font-bold mb-8">
              Kirim Pesan
            </h2>

            <form className="space-y-6">

              <input
                type="text"
                placeholder="Nama Lengkap"
                className="w-full border rounded-xl px-5 py-4"
              />

              <input
                type="email"
                placeholder="Email"
                className="w-full border rounded-xl px-5 py-4"
              />

              <input
                type="text"
                placeholder="Nomor WhatsApp"
                className="w-full border rounded-xl px-5 py-4"
              />

              <textarea
                rows={6}
                placeholder="Kebutuhan Properti Anda"
                className="w-full border rounded-xl px-5 py-4"
              />

              <button
                className="w-full bg-yellow-400 hover:bg-yellow-300 py-4 rounded-xl font-bold"
              >
                Kirim Pesan
              </button>

            </form>

          </div>

        </div>

      </section>

      {/* Google Maps */}

      <section className="pb-24">

        <div className="max-w-7xl mx-auto px-6">

          <div className="rounded-3xl overflow-hidden shadow-lg">

            <iframe
              src="https://www.google.com/maps?q=The+Hive+Cendana+Spark+Lippo+Cikarang&output=embed"
              width="100%"
              height="500"
              loading="lazy"
              className="border-0"
            />

          </div>

        </div>

      </section>

    </main>
  );
}