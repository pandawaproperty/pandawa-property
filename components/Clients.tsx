import { clients } from "@/data/clients";

export default function Clients() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">
          <p className="text-yellow-500 font-semibold uppercase tracking-widest">
            Trusted By
          </p>

          <h2 className="text-5xl font-bold mt-3">
            Klien Kami
          </h2>

          <p className="text-gray-500 mt-5 max-w-3xl mx-auto">
            Berbagai perusahaan telah mempercayakan Pandawa Property
            dalam kebutuhan warehouse, factory, dan industrial land.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mt-16">
          {clients.map((client) => (
            <div
              key={client.id}
              className="border rounded-2xl p-8 hover:shadow-xl transition duration-300"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold">
                  {client.company}
                </h3>

                <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm font-medium">
                  {client.year}
                </span>
              </div>

              <div className="space-y-3 text-gray-600">

                <p>
                  <span className="font-semibold">Project :</span>{" "}
                  {client.project}
                </p>

                <p>
                  <span className="font-semibold">Lokasi :</span>{" "}
                  {client.location}
                </p>


              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}