import { MY_REPOS_URL } from "@/data/constants";
import { FEATURED_PROJECTS } from "@/data/featuredProjects";
import { featuredProjectsQuery } from "@/graphql/featuredProjectsQuery";

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
  const response = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query: featuredProjectsQuery }),
  });

  const { data } = await response.json();
  const allRepos = data.user.repositories.nodes;

  return FEATURED_PROJECTS.map((project) => {
    const repo = allRepos.find((repo) => repo.url === project.repoUrl);

    return {
      stars: repo?.stargazerCount || 0,
      forks: repo?.forkCount || 0,
      repoUrl: repo?.url || "",
      liveUrl: repo?.homepageUrl || "",
      commitCount: repo?.defaultBranchRef?.target?.history?.totalCount || 0,
    };
  });
}
