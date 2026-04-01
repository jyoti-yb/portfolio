import { timelineItems } from "@/data/skills";
import { EduIcon, AwardIcon, CodeIcon, CalendarIcon } from "@/components/ui/Icons";
import type { TimelineItem } from "@/types";

const iconMap = {
  edu:  EduIcon,
  work: CalendarIcon,
  award: AwardIcon,
  code: CodeIcon,
};

function TimelineItemRow({ item, isLast }: { item: TimelineItem; isLast: boolean }) {
  const Icon = iconMap[item.icon];
  return (
    <div className="flex gap-[18px] mb-3">
      {/* Dot + line */}
      <div className="flex flex-col items-center flex-shrink-0 pt-4">
        <div className="w-5 h-5 rounded-full bg-card border-2 border-border2 flex items-center justify-center z-10">
          <Icon className="w-[10px] h-[10px] text-ink3" />
        </div>
        {!isLast && <div className="w-[1.5px] flex-1 bg-border2 mt-1 min-h-[20px]" />}
      </div>

      {/* Content */}
      <div className="bg-bg border border-border rounded-[10px] px-[18px] py-[14px] flex-1 mb-1">
        <div className="font-mono text-[12px] font-semibold text-ink2 mb-1">{item.date}</div>
        <div className="text-[14px] text-ink2 leading-[1.6]">{item.text}</div>
      </div>
    </div>
  );
}

export default function Timeline() {
  return (
    <div>
      {/* Label */}
      <div className="flex items-center gap-2 font-mono text-[13px] font-medium text-ink tracking-[0.04em] mb-5">
        // // TIMELINE
        <CalendarIcon className="w-[14px] h-[14px]" />
      </div>

      {/* Items */}
      <div>
        {timelineItems.map((item, i) => (
          <TimelineItemRow
            key={item.id}
            item={item}
            isLast={i === timelineItems.length - 1}
          />
        ))}
      </div>
    </div>
  );
}
