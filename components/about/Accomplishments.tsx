import { accomplishments } from "@/data/skills";
import { TrophyIcon } from "@/components/ui/Icons";

export default function Accomplishments() {
  return (
    <div>
      {/* Label */}
      <div className="flex items-center gap-2 font-mono text-[13px] font-medium text-ink tracking-[0.04em] mb-5">
        // // ACCOMPLISHMENTS
        <TrophyIcon className="w-[14px] h-[14px]" />
      </div>

      {/* Card */}
      <div className="bg-bg border border-border2 rounded-[20px] p-6">
        <ul>
          {accomplishments.map((item, i) => (
            <li
              key={i}
              className={`flex items-center gap-[10px] py-[11px] text-[14px] text-ink2 hover:text-ink transition-colors duration-150 ${
                i < accomplishments.length - 1 ? "border-b border-border" : ""
              }`}
            >
              <span className="text-ink4 flex-shrink-0">→</span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
