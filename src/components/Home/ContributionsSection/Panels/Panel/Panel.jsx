import { getRepoFullName } from "@/functions/contributions";
import useGlobalStore from "@/stores/global/useGlobalStore";
import Link from "next/link";
import s from "./Panel.module.scss";
import PullRequests from "./PullRequests/PullRequests";

const Panel = ({ contribution, index }) => {
  const repoFullName = getRepoFullName(contribution);
  const activeTabId = useGlobalStore().activeTabId;

  return (
    <div
      key={repoFullName}
      role="tabpanel"
      className={`${s.panel} ${activeTabId === index ? s.show : s.hidden}`}
      id={`panel-${index}`}
      aria-labelledby={`tab-${index}`}
      tabIndex={activeTabId === index ? 0 : -1}
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
        activeTabId={activeTabId}
        index={index}
      />
    </div>
  );
};

export default Panel;
