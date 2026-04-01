import SectionLabel from "@/components/ui/SectionLabel";
import BentoCard from "./BentoCard";
import { techPills, skillGroups } from "@/data/skills";

export default function WhatIDo() {
  return (
    <section className="px-14 pb-20">
      <SectionLabel>// What I Do</SectionLabel>

      {/* Bento grid — 3 cols, pills card spans rows 1+2 col 1 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-[14px]">

        {/* Large pills card — col 1, rows 1+2 */}
        <div className="bento-pills bg-card border border-border rounded-[20px] p-7 flex items-center justify-center md:row-span-2">
          <div className="flex flex-wrap gap-[10px] justify-center">
            {techPills.map((pill) => (
              <span
                key={pill}
                className="px-[17px] py-2 bg-bg border border-border2 rounded-full font-mono text-[12.5px] text-ink2 hover:bg-surface transition-colors duration-150"
              >
                {pill}
              </span>
            ))}
          </div>
        </div>

        {/* Icon bento cards — col 2+3, rows 1+2 */}
        {skillGroups.map((group) => (
          <BentoCard key={group.id} group={group} />
        ))}

      </div>
    </section>
  );
}
