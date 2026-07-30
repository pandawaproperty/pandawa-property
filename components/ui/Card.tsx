interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export default function Card({
  children,
  className = "",
}: CardProps) {
  return (
    <div
      className={`
        rounded-[24px]
        border
        border-zinc-200
        bg-white
        shadow-sm
        transition
        hover:shadow-lg
        ${className}
      `}
    >
      {children}
    </div>
  );
}