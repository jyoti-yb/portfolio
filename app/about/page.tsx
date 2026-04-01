import PageHeader from "@/components/ui/PageHeader";
import AboutProfile from "@/components/about/AboutProfile";
import Timeline from "@/components/about/Timeline";
import Accomplishments from "@/components/about/Accomplishments";

export default function AboutPage() {
  return (
    <main>
      <PageHeader title="About Me" subtitle="The person behind the code" />

      <div className="px-12 pb-20">
        <AboutProfile />

        {/* Two-column: timeline left, accomplishments right */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-7 items-start">
          <Timeline />
          <Accomplishments />
        </div>
      </div>
    </main>
  );
}
