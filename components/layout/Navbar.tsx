"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { personal } from "@/data/personal";
import type { NavTab } from "@/types";

const navTabs: NavTab[] = [
  { label: "Home",      href: "/" },
  { label: "Blogs",     href: "/blogs" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "About",     href: "/about" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-[300] h-[62px] bg-bg border-b border-border flex items-center justify-between px-7 animate-fade-down">
      {/* Brand */}
      <div className="flex items-center gap-3">
        <span className="text-[18px] font-extrabold tracking-[-0.03em] text-ink whitespace-nowrap">
          {personal.name}
        </span>
        <span className="px-3 py-1 bg-card border border-border2 rounded-[8px] font-mono text-[11.5px] text-ink2 whitespace-nowrap">
          {personal.role}
        </span>
      </div>

      {/* Nav tabs pill group */}
      <nav className="hidden md:flex items-center bg-card border border-border2 rounded-[12px] p-[5px] gap-[2px]">
        {navTabs.map((tab) => {
          const isActive = pathname === tab.href;
          return (
            <Link
              key={tab.href}
              href={tab.href}
              className={`px-[22px] py-[7px] rounded-[8px] text-[14px] font-medium transition-all duration-150 whitespace-nowrap ${
                isActive
                  ? "bg-ink text-white"
                  : "text-ink3 hover:text-ink2"
              }`}
            >
              {tab.label}
            </Link>
          );
        })}
      </nav>

      {/* Mobile: hamburger placeholder — extend as needed */}
      <div className="md:hidden flex flex-col gap-[5px] cursor-pointer">
        <span className="w-[22px] h-[2px] bg-ink3 rounded" />
        <span className="w-[22px] h-[2px] bg-ink3 rounded" />
        <span className="w-[22px] h-[2px] bg-ink3 rounded" />
      </div>
    </header>
  );
}
