import Image from "next/image";
import { personal } from "@/data/personal";

export default function Avatar() {
  return (
    <div className="relative w-[290px] h-[290px] flex-shrink-0">
      {/* Circle */}
      <div
        className="w-[290px] h-[290px] rounded-full bg-surface border-[3px] border-border2 overflow-hidden flex items-center justify-center"
        style={{ boxShadow: "0 0 0 8px rgba(0,0,0,0.03), 0 12px 40px rgba(0,0,0,0.10)" }}
      >
        {personal.avatarSrc ? (
          <Image
            src={personal.avatarSrc}
            alt={personal.fullName}
            width={290}
            height={290}
            className="w-full h-full object-cover grayscale"
            priority
          />
        ) : (
          <span className="font-sans text-[80px] font-extrabold tracking-[-0.04em] text-ink3 select-none">
            {personal.avatarInitials}
          </span>
        )}
      </div>

      {/* Green "available" dot */}
      <div
        className="absolute bottom-[16px] right-[18px] w-[18px] h-[18px] rounded-full bg-green-500 border-[3px] border-bg z-10"
        style={{ animation: "pulseDot 2s ease-in-out infinite" }}
      />
    </div>
  );
}
