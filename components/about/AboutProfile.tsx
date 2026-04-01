import Image from "next/image";
import Link from "next/link";
import { personal } from "@/data/personal";
import { GithubIcon, LinkedinIcon, MailIcon } from "@/components/ui/Icons";

export default function AboutProfile() {
  return (
    <div className="flex items-start gap-7 mb-11 pb-11 border-b-2 border-border max-w-[680px]">
      {/* Avatar */}
      <div className="w-[90px] h-[90px] rounded-full bg-surface border-2 border-border2 flex-shrink-0 flex items-center justify-center overflow-hidden">
        {personal.avatarSrc ? (
          <Image
            src={personal.avatarSrc}
            alt={personal.fullName}
            width={90}
            height={90}
            className="w-full h-full object-cover grayscale"
          />
        ) : (
          <span className="font-sans text-[26px] font-extrabold text-ink3">
            {personal.avatarInitials}
          </span>
        )}
      </div>

      {/* Info */}
      <div>
        <div className="text-[26px] font-extrabold tracking-[-0.03em] text-ink mb-2">
          {personal.fullName}
        </div>

        <div className="inline-block px-[14px] py-[5px] bg-card border border-border2 rounded-[8px] font-mono text-[12px] text-ink2 mb-3">
          {personal.rolesFull}
        </div>

        <div className="flex flex-wrap gap-[18px] mb-[14px]">
          <span className="flex items-center gap-[6px] font-mono text-[12.5px] text-ink3">
            {/* person icon */}
            <svg className="w-[13px] h-[13px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
            </svg>
            {personal.college}
          </span>
          <span className="flex items-center gap-[6px] font-mono text-[12.5px] text-ink3">
            <MailIcon className="w-[13px] h-[13px]" />
            {personal.email}
          </span>
        </div>

        {/* Social buttons */}
        <div className="flex gap-[9px]">
          <Link
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="w-9 h-9 rounded-[9px] bg-bg border border-border2 flex items-center justify-center text-ink2 hover:bg-surface hover:scale-105 transition-all duration-200"
          >
            <GithubIcon className="w-4 h-4" />
          </Link>
          <Link
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="w-9 h-9 rounded-[9px] bg-bg border border-border2 flex items-center justify-center text-ink2 hover:bg-surface hover:scale-105 transition-all duration-200"
          >
            <LinkedinIcon className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
