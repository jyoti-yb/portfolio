interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
}

export default function SectionLabel({ children, className = "" }: SectionLabelProps) {
  return (
    <div
      className={`flex items-center gap-0 font-mono text-[15px] font-medium text-ink mb-7 after:content-[''] after:flex-1 after:h-px after:bg-border2 after:ml-[18px] ${className}`}
    >
      {children}
    </div>
  );
}
