import Link from "next/link";
import Avatar from "./Avatar";
import { personal } from "@/data/personal";
import { MailIcon } from "@/components/ui/Icons";

export default function Hero() {
  return (
    <section className="flex items-center justify-start min-h-[calc(100vh-62px)] px-[72px] py-[60px] gap-[80px] animate-fade-up md:flex-row flex-col md:text-left text-center">
      {/* LEFT — Avatar */}
      <div className="flex items-center justify-center flex-shrink-0">
        <Avatar />
      </div>

      {/* RIGHT — Text */}
      <div className="flex flex-col justify-center max-w-[560px] md:items-start items-center">
        {/* Eyebrow */}
        <div className="flex items-center gap-3 font-mono text-[13px] text-ink3 mb-4 md:justify-start justify-center">
          <span className="w-[26px] h-[1.5px] bg-ink3 inline-block" />
          Hello, I&apos;m
        </div>

        {/* Name */}
        <h1 className="text-[clamp(42px,5.5vw,70px)] font-extrabold tracking-[-0.04em] leading-[1.06] text-ink mb-[14px]">
          Balaboina
          <br />
          Jyoti Yadav
        </h1>

        {/* Role bar */}
        <div className="border-l-[3px] border-ink3 pl-[14px] mb-6 md:self-start self-center">
          <span className="font-mono text-[14px] text-ink2 italic">
            {personal.rolesFull}
          </span>
        </div>

        {/* Bio */}
        <p className="text-[15.5px] text-ink2 leading-[1.8] mb-9">
          {personal.bio}
        </p>

        {/* CTA */}
        <Link
          href={`mailto:${personal.email}`}
          className="inline-flex items-center gap-[10px] px-[28px] py-[14px] bg-ink text-white rounded-[12px] text-[15px] font-semibold hover:opacity-80 hover:-translate-y-[2px] transition-all duration-200 md:self-start self-center"
        >
          <MailIcon className="w-[17px] h-[17px]" />
          Get in touch
        </Link>
      </div>
    </section>
  );
}
