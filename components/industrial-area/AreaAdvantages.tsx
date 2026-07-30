interface Props {
  advantages: readonly string[];
}

export default function AreaAdvantages({
  advantages,
}: Props) {
  return (
    <section className="mx-auto max-w-7xl px-6 py-12">
      <div className="rounded-xl bg-white p-8 shadow-sm">
        <h2 className="mb-8 text-3xl font-bold">
          Keunggulan Kawasan Industri
        </h2>

        <div className="grid gap-4 md:grid-cols-2">
          {advantages.map((item) => (
            <div
              key={item}
              className="flex items-start gap-3 rounded-lg border p-4"
            >
              <span className="text-green-600 text-xl">✔</span>

              <p>{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}