"use client";

import { useState } from "react";
import BlogCategoryTabs, { type BlogCategory } from "./BlogCategoryTabs";
import BlogCarousel from "./BlogCarousel";
import { BellIcon } from "@/components/ui/Icons";
import type { BlogPost } from "@/types";

interface Props {
  posts: BlogPost[];
}

export default function BlogsClient({ posts }: Props) {
  const [category, setCategory] = useState<BlogCategory>("tech");

  function handleCategoryChange(cat: BlogCategory) {
    setCategory(cat);
  }

  return (
    <div className="px-12 pb-20">
      {/* Category row */}
      <div className="flex items-center justify-between flex-wrap gap-3 mb-8">
        <BlogCategoryTabs active={category} onChange={handleCategoryChange} />

        <button className="flex items-center gap-[7px] px-5 py-[9px] bg-card border border-border2 rounded-[10px] text-[13.5px] font-medium text-ink2 hover:shadow-md hover:-translate-y-[1px] transition-all duration-200">
          <BellIcon className="w-[15px] h-[15px]" />
          Subscribe
        </button>
      </div>

      {/* Carousel — key forces remount (resets index) on category change */}
      <BlogCarousel key={category} posts={posts} category={category} />
    </div>
  );
}
