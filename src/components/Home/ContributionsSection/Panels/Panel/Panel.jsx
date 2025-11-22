import { getRepoFullName } from "@/functions/contributions";
import Link from "next/link";
import s from "./Panel.module.scss";
import PullRequests from "./PullRequests/PullRequests";

const Panel = ({ contribution, index, activeTabId }) => {
  const repoFullName = getRepoFullName(contribution);

  return (
    <div
      key={repoFullName}
      role="tabpanel"
      className={`${s.panel} ${activeTabId === index ? s.show : s.hidden}`}
    >
      <Link
        href={contribution.repository.url}
        target="_blank"
        rel="noopener noreferrer"
        className={s.title}
        tabIndex={activeTabId === index ? 0 : -1}
      >
        {repoFullName.toLocaleLowerCase()}
      </Link>

      <p className={s.description}>{contribution.repository.description}</p>

      <PullRequests
        contribution={contribution}
        index={index}
        activeTabId={activeTabId}
      />
    </div>
  );
};

export default Panel;
