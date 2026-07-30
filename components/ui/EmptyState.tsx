interface EmptyStateProps {
  title: string;
  description?: string;
}

export default function EmptyState({
  title,
  description,
}: EmptyStateProps) {
  return (
    <div className="rounded-3xl border border-dashed border-zinc-300 bg-white p-12 text-center">
      <div className="text-5xl">📦</div>

      <h3 className="mt-4 text-2xl font-bold text-zinc-900">
        {title}
      </h3>

      {description && (
        <p className="mt-3 text-zinc-500">
          {description}
        </p>
      )}
    </div>
  );
}