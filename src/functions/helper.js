import {
  contributionBlacklist,
  contributionsDescriptions,
} from "@/data/contributions";

export function isMobile() {
  if (typeof navigator === "undefined") return;

  const mobilesType = /Mobi|Android|iPhone|iPad|iPod/i;
  return mobilesType.test(navigator.userAgent);
}

export function refreshPage() {
  window.location.reload();
}

export async function lockPortraitOrientation() {
  const isSupported = screen.orientation?.lock instanceof Function;
  const isMobiOrAndroid = /Mobi|Android/i.test(navigator.userAgent);
  const canLockOrientation = typeof window !== "undefined" && isSupported;

  if (!canLockOrientation || !isMobiOrAndroid) return;

  try {
    screen.orientation.lock("portrait");
  } catch (err) {
    console.warn("Orientation lock failed:", err.message);
  }
}

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
