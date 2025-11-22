import { getRepoFullName } from "@/functions/contributions";
import Link from "next/link";
import s from "./Panel.module.scss";

const Panel = ({ contribution, index, activeTabId }) => {
  return (
    <div
      key={getRepoFullName(contribution)}
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
        {getRepoFullName(contribution).toLocaleLowerCase()}
      </Link>

      <p className={s.description}>{contribution.repository.description}</p>

      <ul className={s.pullRequests}>
        {contribution.prs.map((pr) => (
          <li key={pr.url}>
            <Link
              href={pr.url}
              target="_blank"
              rel="noopener noreferrer"
              tabIndex={activeTabId === index ? 0 : -1}
            >
              {pr.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Panel;
