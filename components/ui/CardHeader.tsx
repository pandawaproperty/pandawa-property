interface CardHeaderProps {
  children: React.ReactNode;
  className?: string;
}

export default function CardHeader({
  children,
  className = "",
}: CardHeaderProps) {
  return (
    <div className={`p-6 pb-0 ${className}`}>
      {children}
    </div>
  );
}