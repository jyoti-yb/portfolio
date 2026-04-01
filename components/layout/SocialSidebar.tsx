import Link from "next/link";
import { personal } from "@/data/personal";
import {
  LinkedinIcon,
  GithubIcon,
  MailIcon,
  InstagramIcon,
} from "@/components/ui/Icons";

export default function SocialSidebar() {
  const links = [
    { href: personal.linkedin,  Icon: LinkedinIcon,  label: "LinkedIn" },
    { href: personal.github,    Icon: GithubIcon,    label: "GitHub" },
    { href: `mailto:${personal.email}`, Icon: MailIcon, label: "Email" },
    { href: personal.instagram, Icon: InstagramIcon, label: "Instagram" },
  ];

  return (
    <aside className="fixed right-0 top-1/2 -translate-y-1/2 z-[200] hidden md:flex flex-col items-center gap-[22px] px-[14px] py-[20px] animate-fade-up">
      {links.map(({ href, Icon, label }) => (
        <Link
          key={label}
          href={href}
          target={href.startsWith("http") ? "_blank" : undefined}
          rel="noopener noreferrer"
          aria-label={label}
          className="flex items-center justify-center w-[28px] h-[28px] text-ink3 hover:text-ink transition-all duration-200 hover:scale-110"
        >
          <Icon className="w-[18px] h-[18px]" />
        </Link>
      ))}

      {/* Medium icon (SVG-only, not in lucide) */}
      <Link
        href={personal.medium}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Medium"
        className="flex items-center justify-center w-[28px] h-[28px] text-ink3 hover:text-ink transition-all duration-200 hover:scale-110"
      >
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-[18px] h-[18px]">
          <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
        </svg>
      </Link>
    </aside>
  );
}
