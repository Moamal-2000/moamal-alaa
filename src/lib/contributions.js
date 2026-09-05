import { GITHUB_API } from "@/constants/constants";
import {
  CONTRIBUTION_BLACKLIST,
  CONTRIBUTIONS_DESCRIPTIONS,
} from "@/constants/contributions";
import { contributionsQuery } from "@/graphql/contributionsQuery";

export function filterContributions(contributions) {
  return contributions.filter((contribution) => {
    const isMyRepo = contribution.url.includes("Moamal-2000");
    const isBlacklisted = CONTRIBUTION_BLACKLIST.includes(
      getRepoFullName(contribution),
    );

    return !isMyRepo && !isBlacklisted;
  });
}

export function groupContributionsByRepo(contributions) {
  return contributions.reduce((acc, contribution) => {
    const repoName = getRepoFullName(contribution);

    if (!acc[repoName]) {
      acc[repoName] = { repository: contribution.repository, prs: [] };
    }

    acc[repoName].prs.push(contribution);
    return acc;
  }, {});
}

export function enrichRepos(contributions) {
  return Object.values(contributions).map((repo) => {
    const repoWithSortedPrs = getSortedPullRequests(repo);

    const repoName = getRepoFullName(repoWithSortedPrs);
    const requiredData = CONTRIBUTIONS_DESCRIPTIONS.find(
      (item) => item.id === repoName,
    );

    if (!requiredData) {
      return repoWithSortedPrs;
    }

    const description =
      requiredData.description || repoWithSortedPrs.repository.description;
    return {
      ...repoWithSortedPrs,
      repository: { ...repoWithSortedPrs.repository, description },
    };
  });
}

export function sortReposByStars({ repos, sortDescending = true } = {}) {
  return repos.toSorted((a, b) => {
    const starsA = a?.repository?.stargazerCount ?? 0;
    const starsB = b?.repository?.stargazerCount ?? 0;
    return sortDescending ? starsB - starsA : starsA - starsB;
  });
}

export function getRepoFullName(data) {
  return `${data.repository.owner.login}/${data.repository.name}`;
}

export function getSortedPullRequests(repo) {
  return {
    ...repo,
    prs: repo.prs.toSorted(
      (a, b) => new Date(b.mergedAt) - new Date(a.mergedAt),
    ),
  };
}

export function getContributionData(contributions) {
  const filtered = filterContributions(contributions);
  const grouped = groupContributionsByRepo(filtered);
  const sortedByStarsDesc = sortReposByStars({ repos: enrichRepos(grouped) });
  return sortedByStarsDesc;
}

export async function fetchContributions() {
  try {
    const res = await fetch(`${GITHUB_API}/graphql`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query: contributionsQuery }),
    });

    const data = await res.json();
    return data.data.user.pullRequests.nodes;
  } catch (error) {
    console.log(error);
    return [];
  }
}
