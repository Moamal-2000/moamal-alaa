import NumberedHeading from "@/components/Shared/NumberedHeading/NumberedHeading";
import { getContributionData } from "@/functions/contributions";
import ContributionCard from "./ContributionCard/ContributionCard";
import s from "./ContributionsSection.module.scss";

const ContributionsSection = ({ contributions = [] }) => {
  const contributionsToDisplay = getContributionData(contributions);

  return (
    <section className={s.contributionsSection}>
      <NumberedHeading number="03" title="Contributions" />

      <div className={s.contributionsWrapper}>
        {contributionsToDisplay.map(({ repository, prs }) => (
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
