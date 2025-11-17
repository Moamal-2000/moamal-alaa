import NumberedHeading from "@/components/Shared/NumberedHeading/NumberedHeading";
import {
  contributionBlacklist,
  contributionsDescriptions,
} from "@/data/contributions";
import { getRepoFullName, getSortedPullRequests } from "@/functions/helper";
import ContributionCard from "./ContributionCard/ContributionCard";
import s from "./ContributionsSection.module.scss";

const ContributionsSection = ({ contributions = [] }) => {
  const filteredContributions = contributions.filter((contribution) => {
    const isMoamalRepo = contribution.url.includes("Moamal-2000");
    const isBlacklisted = contributionBlacklist.includes(
      getRepoFullName(contribution)
    );

    return !isMoamalRepo && !isBlacklisted;
  });

  const groupedContributions = filteredContributions.reduce(
    (acc, contribution) => {
      const repoName = getRepoFullName(contribution);

      if (!acc[repoName]) {
        acc[repoName] = { repository: contribution.repository, prs: [] };
      }

      acc[repoName].prs.push(contribution);
      return acc;
    },
    {}
  );

  const repositoryContributions = Object.values(groupedContributions).map(
    (repo) => {
      const repoClone = { ...repo };

      const requiredData = contributionsDescriptions.find(
        (item) => item.id === getRepoFullName(repoClone)
      );

      const sortedPullRequests = getSortedPullRequests(repoClone, repo);

      if (!requiredData) return sortedPullRequests;

      repoClone.repository.description = requiredData?.description || "";
      return sortedPullRequests;
    }
  );

  return (
    <section className={s.contributionsSection}>
      <NumberedHeading number="03" title="Contributions" />

      <div className={s.contributionsWrapper}>
        {repositoryContributions.map(({ repository, prs }) => (
          <ContributionCard
            key={`${repository.owner.login}-${repository.name}`}
            repository={repository}
            prs={prs}
          />
        ))}
      </div>
    </section>
  );
};

export default ContributionsSection;
