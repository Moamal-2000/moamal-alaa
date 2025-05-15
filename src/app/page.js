import AboutSection from "@/components/Home/AboutSection/AboutSection";
import HeroSection from "@/components/Home/HeroSection/HeroSection";
import OtherProjectsSection from "@/components/Home/OtherProjectsSection/OtherProjectsSection";
import ProjectsSection from "@/components/Home/ProjectsSection/ProjectsSection";
import s from "./page.module.scss";

export default function Home() {
  return (
    <main className={s.home}>
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <OtherProjectsSection />
    </main>
  );
}
