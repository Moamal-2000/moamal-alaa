import NumberedHeading from "@/components/Shared/NumberedHeading/NumberedHeading";
import { contributionsDescriptions } from "@/data/contributions";
import {
  filterContributions,
  getRepoFullName,
  getSortedPullRequests,
  groupContributionsByRepo,
} from "@/functions/helper";
import ContributionCard from "./ContributionCard/ContributionCard";
import s from "./ContributionsSection.module.scss";

const ContributionsSection = ({ contributions = [] }) => {
  const filteredContributions = filterContributions(contributions);
  const groupedContributions = groupContributionsByRepo(filteredContributions);

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
