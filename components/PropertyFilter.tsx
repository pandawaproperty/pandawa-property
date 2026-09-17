"use client";

type Props = {
  keyword: string;
  setKeyword: (value: string) => void;
  category: string;
  setCategory: (value: string) => void;
  status: string;
  setStatus: (value: string) => void;
};

export default function PropertyFilter({
  keyword,
  setKeyword,
  category,
  setCategory,
  status,
  setStatus,
}: Props) {
  return (
    <div className="rounded-3xl bg-white p-6 shadow-lg">
      <div className="grid gap-4 lg:grid-cols-4">
        {/* Search */}
        <input
          type="text"
          placeholder="Cari lokasi atau nama properti..."
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          className="rounded-xl border border-gray-300 px-4 py-3 focus:border-yellow-400 focus:outline-none"
        />

        {/* Category */}
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="rounded-xl border border-gray-300 px-4 py-3 focus:border-yellow-400 focus:outline-none"
        >
          <option value="all">Semua Kategori</option>
          <option value="warehouse">Warehouse</option>
          <option value="factory">Factory</option>
          <option value="industrial land">Industrial Land</option>
        </select>

        {/* Status */}
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="rounded-xl border border-gray-300 px-4 py-3 focus:border-yellow-400 focus:outline-none"
        >
          <option value="all">Semua Status</option>
          <option value="dijual">Dijual</option>
          <option value="disewa">Disewa</option>
        </select>

        {/* Reset */}
        <button
          onClick={() => {
            setKeyword("");
            setCategory("all");
            setStatus("all");
          }}
          className="rounded-xl bg-black px-5 py-3 font-semibold text-white transition hover:bg-yellow-400 hover:text-black"
        >
          Reset Filter
        </button>
      </div>
    </div>
  );
}