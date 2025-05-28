import AboutSection from "@/components/Home/AboutSection/AboutSection";
import ContactSection from "@/components/Home/ContactSection/ContactSection";
import HeroSection from "@/components/Home/HeroSection/HeroSection";
import OtherProjectsSection from "@/components/Home/OtherProjectsSection/OtherProjectsSection";
import ProjectsSection from "@/components/Home/ProjectsSection/ProjectsSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <OtherProjectsSection />
      <ContactSection />
    </main>
  );
}
