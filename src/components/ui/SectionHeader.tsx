import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  gameLabel: string; // e.g. "CONNECTIONS"
  title: string; // e.g. "About Me"
  subtitle?: string;
  className?: string;
}

export default function SectionHeader({
  gameLabel,
  title,
  subtitle,
  className,
}: SectionHeaderProps) {
  return (
    <div className={cn("w-full mb-8", className)}>
      <div className="masthead-rule mb-1" />
      <div className="flex items-baseline gap-3 mb-1">
        <span className="font-sans text-xs font-bold uppercase tracking-widest text-nyt-text opacity-60">
          {gameLabel}
        </span>
      </div>
      <h2 className="font-serif text-3xl sm:text-4xl font-bold text-nyt-text leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="font-sans text-sm text-gray-500 mt-1">{subtitle}</p>
      )}
      <div className="masthead-rule-thin mt-3" />
    </div>
  );
}
