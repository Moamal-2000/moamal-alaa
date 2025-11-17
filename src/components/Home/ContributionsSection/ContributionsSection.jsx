import NumberedHeading from "@/components/Shared/NumberedHeading/NumberedHeading";
import ContributionCard from "./ContributionCard/ContributionCard";
import s from "./ContributionsSection.module.scss";

const ContributionsSection = ({ contributions = [] }) => {
  const filteredContributions = contributions.filter((contribution) => {
    const isMoamalRepo = contribution.url.includes("Moamal-2000");
    const isBlacklisted = contributionBlacklist.includes(
      `${contribution.repository.owner.login}/${contribution.repository.name}`
    );

    return !isMoamalRepo && !isBlacklisted;
  });

  const groupedContributions = filteredContributions.reduce(
    (acc, contribution) => {
      const repoKey = `${contribution.repository.owner.login}/${contribution.repository.name}`;
      if (!acc[repoKey]) {
        acc[repoKey] = {
          repository: contribution.repository,
          prs: [],
        };
      }
      acc[repoKey].prs.push(contribution);
      return acc;
    },
    {}
  );

  // Convert to array and sort by most recent PR date
  const repositoryContributions = Object.values(groupedContributions).map(
    (repo) => ({
      ...repo,
      prs: repo.prs.sort((a, b) => new Date(b.mergedAt) - new Date(a.mergedAt)),
    })
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

const contributionBlacklist = [
  "Amrr-Maherr/TourEg",
  "Ahmedr6/router-app",
  "YoussefDybala/Leon-Project",
  "muqataea/Palestine",
  "NaderHikaL/Hikal-Company",
  "ahmedmostafa8/Fetch-Github-Repositories",
];