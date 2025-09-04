import { MY_REPOS_URL } from "@/data/constants";
import { FEATURED_PROJECTS } from "@/data/staticData";

export async function fetchMyGithubRepos() {
  try {
    const response = await fetch(MY_REPOS_URL, {
      cache: "force-cache",
      next: { revalidate: 1000 * 60 * 60 },
    });

    if (!response.ok) {
      console.error(
        "GitHub API returned error:",
        response.status,
        response.statusText
      );

      return [];
    }

    return await response.json();
  } catch (error) {
    console.error("Failed to fetch my GitHub repositories:", error);
    return [];
  }
}

export function getFeaturedProjects(repos) {
  return FEATURED_PROJECTS.map((project) => {
    return repos.find((repo) => repo.html_url === project.repoUrl);
  });
}

export async function fetchFeaturedProjects() {
  const myRepos = await fetchMyGithubRepos();
  const featuredProjects = getFeaturedProjects(myRepos);

  return featuredProjects.map((repo) => {
    return {
      stars: repo?.stargazers_count || 0,
      forks: repo?.forks_count || 0,
      repoUrl: repo?.html_url || "",
      liveUrl: repo?.homepage || "",
    };
  });
}
