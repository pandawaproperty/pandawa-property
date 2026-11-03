import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-zinc-900 text-white">
  <div className="max-w-7xl mx-auto px-6 py-20">

    <div className="grid md:grid-cols-4 gap-12">

      {/* Logo */}
      <div>
        <h2 className="text-3xl font-bold text-yellow-400">
          Pandawa Property
        </h2>

        <p className="mt-6 text-gray-400 leading-8">
          Marketing Properti spesialis Warehouse,
          Factory, Industrial Land dan Storage
          di kawasan industri Indonesia.
        </p>
      </div>

      {/* Menu */}
      <div>
        <h3 className="font-bold text-xl mb-6">
          Menu
        </h3>

        <ul className="space-y-3 text-gray-400">
          <li><a href="/">Home</a></li>
          <li><a href="/jual">Jual</a></li>
          <li><a href="/sewa">Sewa</a></li>
          <li><a href="/Klien">Klien</a></li>
          <li><a href="#">Tentang Kami</a></li>
        </ul>
      </div>

      {/* Kontak */}
      <div>
        <h3 className="font-bold text-xl mb-6">
          Kontak
        </h3>

        <ul className="space-y-4 text-gray-400">
          <li>📞 0812-5555-8283</li>
          <li>✉ pandawaglobalindustri.gmail.com</li>
          <li>🌐 pandawaproperty.com</li>
        </ul>
      </div>

      {/* Alamat */}
      <div>
        <h3 className="font-bold text-xl mb-6">
          Kantor
        </h3>

        <p className="text-gray-400 leading-8">
          The Hive Cendana Spark N105
          <br />
          Lippo Cikarang
          <br />
          Bekasi, Jawa Barat
        </p>
      </div>

    </div>

    <div className="border-t border-zinc-700 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center">

      <p className="text-gray-500">
        © 2023 Pandawa Property. All Rights Reserved.
      </p>

      <div className="flex gap-6 mt-4 md:mt-0">

        <a
          href="https://wa.me/6281255558283"
          className="hover:text-yellow-400 transition"
        >
          WhatsApp
        </a>

        <a
          href="#"
          className="hover:text-yellow-400 transition"
        >
          Instagram
        </a>

        <a
          href="#"
          className="hover:text-yellow-400 transition"
        >
          LinkedIn
        </a>

      </div>

    </div>

  </div>
</footer>
  );
}