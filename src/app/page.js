import AboutSection from "@/components/Home/AboutSection/AboutSection";
import ContactSection from "@/components/Home/ContactSection/ContactSection";
import HeroSection from "@/components/Home/HeroSection/HeroSection";
import OtherProjectsSection from "@/components/Home/OtherProjectsSection/OtherProjectsSection";
import ProjectsSection from "@/components/Home/ProjectsSection/ProjectsSection";
import { fetchFeaturedProjects } from "@/functions/featuredProjectsApi";

export default async function Home() {
  const projectsData = await fetchFeaturedProjects();

  return (
    <main>
      <HeroSection />
      <AboutSection />
      <ProjectsSection projectsData={projectsData} />
      <OtherProjectsSection />
      <ContactSection />
    </main>
  );
}
