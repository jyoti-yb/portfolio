"use client";

import { useState } from "react";
import ProjectCard from "./ProjectCard";
import type { Project } from "@/types";

type FilterCat = "all" | "ai" | "web";

const filters: { id: FilterCat; label: string }[] = [
  { id: "all", label: "Projects" },
  { id: "ai",  label: "AI & Crypto Tools" },
  { id: "web", label: "Open-Source" },
];

interface Props {
  projects: Project[];
}

export default function PortfolioClient({ projects }: Props) {
  const [active, setActive] = useState<FilterCat>("all");

  const visible = projects.filter(
    (p) => active === "all" || p.category === active
  );

  return (
    <div className="px-12 pb-20">
      {/* Filter bar */}
      <div className="flex items-center bg-card border border-border2 rounded-[14px] p-[6px] gap-[3px] w-fit mb-9">
        {filters.map((f) => (
          <button
            key={f.id}
            onClick={() => setActive(f.id)}
            className={`flex items-center gap-2 px-[22px] py-[9px] rounded-[9px] text-[14px] font-medium whitespace-nowrap transition-all duration-150 ${
              active === f.id
                ? "bg-ink text-white"
                : "text-ink3 hover:text-ink2"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {visible.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}
