import NumberedHeading from "@/components/Shared/NumberedHeading/NumberedHeading";
import {
  enrichRepos,
  filterContributions,
  groupContributionsByRepo,
} from "@/functions/helper";
import ContributionCard from "./ContributionCard/ContributionCard";
import s from "./ContributionsSection.module.scss";

const ContributionsSection = ({ contributions = [] }) => {
  const filteredContributions = filterContributions(contributions);
  const groupedContributions = groupContributionsByRepo(filteredContributions);
  const repositoryContributions = enrichRepos(groupedContributions);

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
