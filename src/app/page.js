import AboutSection from "@/components/Home/AboutSection/AboutSection";
import ContactSection from "@/components/Home/ContactSection/ContactSection";
import HeroSection from "@/components/Home/HeroSection/HeroSection";
import OtherProjectsSection from "@/components/Home/OtherProjectsSection/OtherProjectsSection";
import ProjectsSection from "@/components/Home/ProjectsSection/ProjectsSection";
import { MY_REPOS_URL } from "@/data/constants";
import { FEATURED_PROJECTS } from "@/data/staticData";

export default async function Home() {
  const myReposResponse = await fetch(MY_REPOS_URL, {
    cache: "force-cache",
    next: { revalidate: 1000 * 60 * 60 },
  });
  const myRepos = await myReposResponse.json();

  const featuredProjects = myRepos.filter((repo) => {
    return FEATURED_PROJECTS.find(
      (project) => project.repoUrl === repo.html_url
    );
  });

  const projectsData = featuredProjects.map((repo) => {
    return {
      stars: repo.stargazers_count,
      forks: repo.forks_count,
    };
  });

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
