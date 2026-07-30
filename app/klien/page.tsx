import Clients from "@/components/Clients";

export default function KlienPage() {
  return (
    <main className="min-h-screen bg-gray-50">

      {/* Hero */}
      <section className="bg-zinc-900 text-white py-24">

        <div className="max-w-7xl mx-auto px-6 text-center">

          <h1 className="text-5xl font-bold">
            Klien Kami
          </h1>

          <p className="text-gray-300 mt-6 max-w-3xl mx-auto text-lg">
            Pandawa Property dipercaya oleh berbagai perusahaan
            nasional maupun internasional dalam kebutuhan
            Warehouse, Factory, dan Industrial Land.
          </p>

        </div>

      </section>

      {/* Statistik */}
      <section className="py-16">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid md:grid-cols-4 gap-8 text-center">

            <div className="bg-white rounded-2xl shadow p-8">
              <h2 className="text-5xl font-bold text-yellow-500">
                50+
              </h2>

              <p className="mt-3 text-gray-500">
                Corporate Clients
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow p-8">
              <h2 className="text-5xl font-bold text-yellow-500">
                100+
              </h2>

              <p className="mt-3 text-gray-500">
                Property Transactions
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow p-8">
              <h2 className="text-5xl font-bold text-yellow-500">
                50 Ha
              </h2>

              <p className="mt-3 text-gray-500">
                Industrial Land
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow p-8">
              <h2 className="text-5xl font-bold text-yellow-500">
                10+
              </h2>

              <p className="mt-3 text-gray-500">
                Industrial Estate
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* Daftar Klien */}
      <Clients />

    </main>
  );
}