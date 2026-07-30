import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary";
  fullWidth?: boolean;
}

export default function Button({
  children,
  href,
  onClick,
  variant = "primary",
  fullWidth = false,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-xl px-6 py-3 font-semibold transition";

  const variants = {
    primary:
      "bg-yellow-400 text-zinc-900 hover:bg-yellow-500",
    secondary:
      "border border-zinc-300 bg-white text-zinc-900 hover:bg-zinc-100",
  };

  const className = `${base} ${variants[variant]} ${
    fullWidth ? "w-full" : ""
  }`;

  if (href) {
    return (
      <Link href={href} className={className}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={className}>
      {children}
    </button>
  );
}