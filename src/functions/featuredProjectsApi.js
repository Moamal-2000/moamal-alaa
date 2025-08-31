import { MY_REPOS_URL } from "@/data/constants";
import { FEATURED_PROJECTS } from "@/data/staticData";

export async function fetchMyGithubRepos() {
  const myReposResponse = await fetch(MY_REPOS_URL, {
    cache: "force-cache",
    next: { revalidate: 1000 * 60 * 60 },
  });

  return await myReposResponse.json();
}

export function getFeaturedProjects(repos) {
  return repos.filter((repo) => {
    return FEATURED_PROJECTS.find(
      (project) => project.repoUrl === repo.html_url
    );
  });
}

export async function fetchFeaturedProjects() {
  const myRepos = await fetchMyGithubRepos();
  const featuredProjects = getFeaturedProjects(myRepos);

  return featuredProjects.map((repo) => {
    return {
      stars: repo.stargazers_count,
      forks: repo.forks_count,
    };
  });
}
