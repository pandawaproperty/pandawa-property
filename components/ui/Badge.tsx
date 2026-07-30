interface BadgeProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "success";
}

export default function Badge({
  children,
  variant = "primary",
}: BadgeProps) {
  const variants = {
    primary:
      "bg-yellow-100 text-yellow-800 border-yellow-200",
    secondary:
      "bg-zinc-100 text-zinc-700 border-zinc-200",
    success:
      "bg-green-100 text-green-700 border-green-200",
  };

  return (
    <span
      className={`inline-flex items-center rounded-full border px-3 py-1 text-sm font-medium ${variants[variant]}`}
    >
      {children}
    </span>
  );
}