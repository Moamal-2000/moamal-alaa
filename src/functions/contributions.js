import {
  contributionBlacklist,
  contributionsDescriptions,
} from "@/data/contributions";

export function filterContributions(contributions) {
  return contributions.filter((contribution) => {
    const isMoamalRepo = contribution.url.includes("Moamal-2000");
    const isBlacklisted = contributionBlacklist.includes(
      getRepoFullName(contribution)
    );

    return !isMoamalRepo && !isBlacklisted;
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
    const repoClone = { ...repo };

    const requiredData = contributionsDescriptions.find(
      (item) => item.id === getRepoFullName(repoClone)
    );

    const sortedPullRequests = getSortedPullRequests(repoClone, repo);

    if (!requiredData) return sortedPullRequests;

    repoClone.repository.description = requiredData?.description || "";
    return sortedPullRequests;
  });
}

export function getRepoFullName(data) {
  return `${data.repository.owner.login}/${data.repository.name}`;
}

export function getSortedPullRequests(repoData, repo) {
  return {
    ...repoData,
    prs: repo.prs.sort((a, b) => new Date(b.mergedAt) - new Date(a.mergedAt)),
  };
}

export function getContributionData(contributions) {
  const filtered = filterContributions(contributions);
  const grouped = groupContributionsByRepo(filtered);
  return enrichRepos(grouped);
}
