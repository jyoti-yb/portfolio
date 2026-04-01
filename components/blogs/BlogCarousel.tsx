"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronLeftIcon, ChevronRightIcon } from "@/components/ui/Icons";
import type { BlogPost } from "@/types";
import type { BlogCategory } from "./BlogCategoryTabs";

interface Props {
  posts: BlogPost[];
  category: BlogCategory;
}

export default function BlogCarousel({ posts, category }: Props) {
  const [idx, setIdx] = useState(0);

  const filtered = posts.filter((p) => p.category === category);

  // Reset index when category changes handled by key prop in parent
  const current = filtered[idx] ?? filtered[0];

  function move(dir: number) {
    setIdx((prev) => (prev + dir + filtered.length) % filtered.length);
  }

  if (!filtered.length || !current) return null;

  return (
    <div>
      {/* Slide */}
      <div className="relative">
        <div
          key={current.id}
          className="bg-card border border-border rounded-[20px] px-9 py-8 flex items-center gap-9 min-h-[180px] animate-fade-up md:flex-row flex-col"
        >
          {/* Content */}
          <div className="flex-1">
            <h3 className="text-[20px] font-bold tracking-[-0.02em] text-ink mb-[10px]">
              {current.title}
            </h3>
            <p className="text-[14px] text-ink2 leading-[1.65] mb-[18px] max-w-[500px]">
              {current.description}
            </p>
            <Link
              href={`/blogs/${current.slug}`}
              className="inline-flex items-center gap-[6px] font-mono text-[13px] text-ink2 hover:text-ink hover:gap-[10px] transition-all duration-200"
            >
              Read article →
            </Link>
          </div>

          {/* Image card */}
          <div
            className={`w-[160px] h-[120px] rounded-[10px] flex-shrink-0 flex items-center justify-center font-mono text-[13px] font-bold text-center leading-[1.4] px-3 ${current.imgColor}`}
          >
            {current.imgLabel}
          </div>
        </div>

        {/* Arrows */}
        {filtered.length > 1 && (
          <>
            <button
              onClick={() => move(-1)}
              className="absolute left-[-20px] top-1/2 -translate-y-1/2 w-[38px] h-[38px] bg-card border border-border2 rounded-full flex items-center justify-center text-ink2 hover:shadow-md transition-all z-10"
              aria-label="Previous"
            >
              <ChevronLeftIcon className="w-[16px] h-[16px]" />
            </button>
            <button
              onClick={() => move(1)}
              className="absolute right-[-20px] top-1/2 -translate-y-1/2 w-[38px] h-[38px] bg-card border border-border2 rounded-full flex items-center justify-center text-ink2 hover:shadow-md transition-all z-10"
              aria-label="Next"
            >
              <ChevronRightIcon className="w-[16px] h-[16px]" />
            </button>
          </>
        )}
      </div>

      {/* Dots */}
      {filtered.length > 1 && (
        <div className="flex items-center justify-center gap-2 mt-[22px]">
          {filtered.map((_, i) => (
            <button
              key={i}
              onClick={() => setIdx(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`w-2 h-2 rounded-full transition-all duration-200 ${
                i === idx ? "bg-ink scale-110" : "bg-border2"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
