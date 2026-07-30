interface ProductSearchProps {
  value: string;
  onChange: (value: string) => void;
}

export default function ProductSearch({
  value,
  onChange,
}: ProductSearchProps) {
  return (
    <section className="py-16">
      <div className="max-w-5xl mx-auto px-6">
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Cari developer atau kawasan industri..."
          className="w-full rounded-2xl border border-gray-300 px-6 py-5 text-lg outline-none focus:ring-2 focus:ring-yellow-500"
        />
      </div>
    </section>
  );
}