import ProjectStats from "@/components/Home/ProjectsSection/FeaturedProjects/FeaturedProject/ProjectLinks/ProjectStats/ProjectStats";
import { getRepoFullName } from "@/lib/contributions";
import useGlobalStore from "@/stores/global/useGlobalStore";
import Link from "next/link";
import s from "./Panel.module.scss";
import PullRequests from "./PullRequests/PullRequests";

const Panel = ({ contribution, index }) => {
  const repoFullName = getRepoFullName(contribution);
  const activeTabOrder = useGlobalStore((s) => s.activeTabOrder);
  const { stars, forks, commitCount } = getProjectStats(contribution);

  return (
    <div
      key={repoFullName}
      role="tabpanel"
      className={`${s.panel} ${activeTabOrder === index ? s.show : s.hidden}`}
      id={`panel-${index}`}
      aria-labelledby={`contribution-tab-${index}`}
      tabIndex={activeTabOrder === index ? 0 : -1}
    >
      <div className={s.header}>
        <Link
          href={contribution.repository.url}
          target="_blank"
          rel="noopener noreferrer"
          className={s.title}
          tabIndex={activeTabOrder === index ? 0 : -1}
        >
          {repoFullName.toLocaleLowerCase()}
        </Link>
        <ProjectStats stars={stars} forks={forks} commitCount={commitCount} />
      </div>

      <p className={s.description}>{contribution.repository.description}</p>

      <PullRequests
        contribution={contribution}
        activeTabOrder={activeTabOrder}
        index={index}
      />
    </div>
  );
};

export default Panel;

function getProjectStats(contribution = {}) {
  return {
    stars: contribution?.repository?.stargazerCount ?? "?",
    forks: contribution?.repository?.forkCount ?? "?",
    commitCount:
      contribution?.repository?.defaultBranchRef?.target?.history?.totalCount ??
      "?",
  };
}
