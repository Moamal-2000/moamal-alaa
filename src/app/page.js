import AboutSection from "@/components/Home/AboutSection/AboutSection";
import ContactSection from "@/components/Home/ContactSection/ContactSection";
import ContributionsSection from "@/components/Home/ContributionsSection/ContributionsSection";
import HeroSection from "@/components/Home/HeroSection/HeroSection";
import OtherProjectsSection from "@/components/Home/OtherProjectsSection/OtherProjectsSection";
import ProjectsSection from "@/components/Home/ProjectsSection/ProjectsSection";
import { fetchContributions } from "@/functions/contributions";
import { fetchFeaturedProjects } from "@/functions/featuredProjectsApi";

export default async function Home() {
  const projectsData = await fetchFeaturedProjects();
  const contributions = await fetchContributions();

  return (
    <main>
      <HeroSection />
      <AboutSection />
      <ProjectsSection projectsData={projectsData} />
      <OtherProjectsSection />
      <ContributionsSection contributions={contributions} />
      <ContactSection />
    </main>
  );
}
