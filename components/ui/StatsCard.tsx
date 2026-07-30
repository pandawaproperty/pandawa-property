interface StatsCardProps {
  value: string | number;
  label: string;
}

export default function StatsCard({
  value,
  label,
}: StatsCardProps) {
  return (
    <div className="rounded-2xl border border-zinc-200 bg-white p-6 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      <div className="text-3xl font-bold text-zinc-900">
        {value}
      </div>

      <div className="mt-2 text-sm text-zinc-500">
        {label}
      </div>
    </div>
  );
}