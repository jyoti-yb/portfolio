"use client";

import { useState } from "react";
import { SwitchIcon, AiIcon, LockIcon, CodeIcon, CloudIcon, ChartIcon } from "@/components/ui/Icons";
import type { SkillGroup } from "@/types";

const iconMap = {
  ai:    AiIcon,
  lock:  LockIcon,
  code:  CodeIcon,
  cloud: CloudIcon,
  chart: ChartIcon,
};

interface BentoCardProps {
  group: SkillGroup;
}

export default function BentoCard({ group }: BentoCardProps) {
  const [hovered, setHovered] = useState(false);
  const Icon = iconMap[group.icon];

  return (
    <div
      className="bg-card border border-border rounded-[20px] p-7 flex flex-col items-center justify-center gap-4 min-h-[196px] text-center cursor-default transition-all duration-200 hover:shadow-[0_8px_28px_rgba(0,0,0,0.07)] hover:-translate-y-[2px]"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Icon box */}
      <div className="w-[70px] h-[70px] bg-bg border border-border2 rounded-[18px] flex items-center justify-center">
        <Icon className="w-[34px] h-[34px] text-ink2" />
      </div>

      {/* Name */}
      <div className="text-[15.5px] font-semibold text-ink tracking-[-0.01em]">
        {group.name}
      </div>

      {/* Hover state: stack pills OR hint */}
      {hovered ? (
        <div className="flex flex-wrap justify-center gap-[6px]">
          {group.stack.map((s) => (
            <span
              key={s}
              className="px-[10px] py-[4px] rounded-full font-mono text-[11px] text-ink2 bg-bg border border-border2"
            >
              {s}
            </span>
          ))}
        </div>
      ) : (
        <div className="flex items-center gap-[6px] font-mono text-[11px] text-ink4">
          <SwitchIcon className="w-[12px] h-[12px]" />
          Hover for stack
        </div>
      )}
    </div>
  );
}
