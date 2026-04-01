"use client";

import { CodeIcon, AiIcon } from "@/components/ui/Icons";

export type BlogCategory = "tech" | "ai" | "life";

interface Props {
  active: BlogCategory;
  onChange: (cat: BlogCategory) => void;
}

const tabs: { id: BlogCategory; label: string }[] = [
  { id: "tech",  label: "// // <> TECH & CORPORATE" },
  { id: "ai",    label: "// // AI & RESEARCH" },
  { id: "life",  label: "// // LIFE & LEARNING" },
];

export default function BlogCategoryTabs({ active, onChange }: Props) {
  return (
    <div className="flex items-center bg-card border border-border2 rounded-full px-[6px] py-[5px] gap-1">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onChange(tab.id)}
          className={`flex items-center gap-[6px] px-4 py-[6px] rounded-full font-mono text-[12px] font-medium transition-all duration-150 whitespace-nowrap ${
            active === tab.id
              ? "bg-ink text-white"
              : "text-ink3 hover:text-ink2"
          }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}
