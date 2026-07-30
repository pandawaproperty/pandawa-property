interface SectionTitleProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

export default function SectionTitle({
  title,
  subtitle,
  align = "left",
}: SectionTitleProps) {
  return (
    <div
      className={
        align === "center"
          ? "text-center"
          : "text-left"
      }
    >
      <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-zinc-900">
        {title}
      </h2>

      {subtitle && (
        <p className="mt-4 text-lg text-zinc-500 max-w-3xl">
          {subtitle}
        </p>
      )}
    </div>
  );
}