import PageHeader from "@/components/ui/PageHeader";
import PortfolioClient from "@/components/portfolio/PortfolioClient";
import { projects } from "@/data/projects";

export default function PortfolioPage() {
  return (
    <main>
      <PageHeader
        title="Portfolio"
        subtitle="Projects I've built and open-source contributions"
      />
      <PortfolioClient projects={projects} />
    </main>
  );
}
