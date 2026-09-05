import { MY_REPOS_URL } from "@/constants/constants";
import { FEATURED_PROJECTS } from "@/constants/featuredProjects";
import { featuredProjectsQuery } from "@/graphql/featuredProjectsQuery";
import { fetchGithubGraphQL } from "./github/client";

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
        response.statusText,
      );

      return [];
    }

    return await response.json();
  } catch (error) {
    console.error("Failed to fetch my GitHub repositories:", error);
    return [];
  }
}

export async function fetchFeaturedProjects() {
  const data = await fetchGithubGraphQL(featuredProjectsQuery);

  if (data === null) {
    return [];
  }

  const repos = data.user.repositories.nodes;

  return FEATURED_PROJECTS.map((project) => {
    const repo = repos.find((repo) => repo.url === project.repoUrl);

    return {
      stars: repo?.stargazerCount || 0,
      forks: repo?.forkCount || 0,
      repoUrl: repo?.url || "",
      liveUrl: repo?.homepageUrl || "",
      commitCount: repo?.defaultBranchRef?.target?.history?.totalCount || 0,
    };
  });
}
