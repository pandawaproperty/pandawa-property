"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SearchProperty() {
  const router = useRouter();

  const [keyword, setKeyword] = useState("");
  const [category, setCategory] = useState("");
  const [status, setStatus] = useState("");
  const [area, setArea] = useState("");

  const handleSearch = () => {
    const params = new URLSearchParams();

    if (keyword) params.set("keyword", keyword);
    if (category) params.set("category", category);
    if (status) params.set("status", status);
    if (area) params.set("area", area);

    router.push(`/property?${params.toString()}`);
  };

  return (
    <section className="relative z-20 mx-auto -mt-20 max-w-7xl rounded-3xl border border-zinc-200 bg-white p-5 shadow-2xl md:-mt-16 md:p-8">
      <div className="mb-6">
  <h2 className="text-2xl font-bold text-zinc-900">
    Cari Properti Industri
  </h2>

  <p className="mt-1 text-zinc-500">
    Warehouse • Factory • Industrial Land
  </p>
</div>
      
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-5">
        <input
          type="text"
          placeholder="Cari Properti..."
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          className="h-14 rounded-xl border border-zinc-300 bg-zinc-50 px-4 outline-none transition focus:border-yellow-400 focus:bg-white"
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
         className="h-14 rounded-xl border border-zinc-300 bg-zinc-50 px-4 outline-none transition focus:border-yellow-400 focus:bg-white"
        >
          <option value="">Semua Kategori</option>
          <option value="Warehouse">Warehouse</option>
          <option value="Factory">Factory</option>
          <option value="Industrial Land">Industrial Land</option>
        </select>

        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
         className="h-14 rounded-xl border border-zinc-300 bg-zinc-50 px-4 outline-none transition focus:border-yellow-400 focus:bg-white"
        >
          <option value="">Semua Status</option>
          <option value="Dijual">Dijual</option>
          <option value="Disewa">Disewa</option>
        </select>

        <select
          value={area}
          onChange={(e) => setArea(e.target.value)}
         className="h-14 rounded-xl border border-zinc-300 bg-zinc-50 px-4 outline-none transition focus:border-yellow-400 focus:bg-white"
        >
          <option value="">Semua Kawasan</option>
          <option value="delta-silicon">Delta Silicon</option>
          <option value="jababeka">Jababeka</option>
          <option value="artha-industrial-hill">
            Artha Industrial Hill
          </option>
        </select>

        <button
          onClick={handleSearch}
          className="h-14 rounded-xl bg-yellow-500 font-bold text-black transition duration-300 hover:-translate-y-0.5 hover:bg-yellow-400 hover:shadow-xl"
        >
          🔍 Cari Properti
        </button>

      </div>

    </section>



  );
}