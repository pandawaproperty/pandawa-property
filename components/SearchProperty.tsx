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
    <section className="bg-white shadow-xl rounded-3xl p-8 -mt-16 relative z-20 max-w-7xl mx-auto">

      <div className="grid lg:grid-cols-5 gap-5">

        <input
          type="text"
          placeholder="Cari Properti..."
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          className="border rounded-xl px-4 py-3"
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="border rounded-xl px-4 py-3"
        >
          <option value="">Semua Kategori</option>
          <option value="Warehouse">Warehouse</option>
          <option value="Factory">Factory</option>
          <option value="Industrial Land">Industrial Land</option>
        </select>

        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="border rounded-xl px-4 py-3"
        >
          <option value="">Semua Status</option>
          <option value="Dijual">Dijual</option>
          <option value="Disewa">Disewa</option>
        </select>

        <select
          value={area}
          onChange={(e) => setArea(e.target.value)}
          className="border rounded-xl px-4 py-3"
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
          className="bg-yellow-400 hover:bg-yellow-300 rounded-xl font-bold"
        >
          Cari Properti
        </button>

      </div>

    </section>
  );
}