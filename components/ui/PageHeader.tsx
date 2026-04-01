interface PageHeaderProps {
  title: string;
  subtitle: string;
}

export default function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <>
      <div className="text-center pt-[52px] px-12">
        <h1 className="text-[clamp(28px,4vw,46px)] font-extrabold tracking-[-0.035em] text-ink mb-2">
          {title}
        </h1>
        <p className="font-mono text-[13px] text-ink3 mb-9">{subtitle}</p>
      </div>
      <div className="h-px bg-border2 mx-12 mb-9" />
    </>
  );
}
