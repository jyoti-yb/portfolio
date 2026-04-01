import Link from "next/link";
import {
  LockIcon, SunIcon, ChartIcon, CodeIcon, DocIcon, TerminalIcon,
} from "@/components/ui/Icons";
import type { Project } from "@/types";

const iconMap = {
  lock:     LockIcon,
  sun:      SunIcon,
  chart:    ChartIcon,
  code:     CodeIcon,
  doc:      DocIcon,
  terminal: TerminalIcon,
};

interface Props {
  project: Project;
}

export default function ProjectCard({ project }: Props) {
  const Icon = iconMap[project.icon];

  return (
    <div className="bg-card border border-border rounded-[20px] overflow-hidden hover:shadow-[0_8px_28px_rgba(0,0,0,0.09)] hover:-translate-y-[3px] transition-all duration-200">
      {/* Illustration header */}
      <div className="relative h-[158px] bg-bg border-b border-border flex items-center justify-center">
        <Icon className="w-16 h-16 text-[#aaaaaa]" />

        {/* Badges */}
        {(project.isWip || project.isJoinTeam) && (
          <div className="absolute top-3 right-3 flex gap-[6px]">
            {project.isWip && (
              <span className="px-[11px] py-1 rounded-full text-[11px] font-medium bg-[#fffbeb] border border-[#fcd34d] text-[#92400e]">
                🔗 WIP
              </span>
            )}
            {project.isJoinTeam && (
              <span className="px-[11px] py-1 rounded-full text-[11px] font-medium bg-[#f0fdf4] border border-[#86efac] text-[#166534]">
                👥 Join Team
              </span>
            )}
          </div>
        )}
      </div>

      {/* Body */}
      <div className="p-[22px]">
        <div className="text-[17px] font-bold tracking-[-0.02em] text-ink mb-2">
          {project.name}
        </div>
        <p className="text-[13.5px] text-ink2 leading-[1.65] mb-[14px]">
          {project.description}
        </p>
        <div className="font-mono text-[10px] font-semibold tracking-[0.1em] text-ink3 uppercase mb-1">
          Tech Stack
        </div>
        <div className="font-mono text-[11.5px] text-ink3 leading-[1.5]">
          {project.techStack}
        </div>

        {/* Links */}
        {project.githubUrl && (
          <div className="mt-4 pt-4 border-t border-border flex items-center gap-4">
            <Link
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[11.5px] text-ink3 hover:text-ink transition-colors"
            >
              GitHub →
            </Link>
            {project.liveUrl && (
              <Link
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-[11.5px] text-ink3 hover:text-ink transition-colors"
              >
                Live →
              </Link>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
