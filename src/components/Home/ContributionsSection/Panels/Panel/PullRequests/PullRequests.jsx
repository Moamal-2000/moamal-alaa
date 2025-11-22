import Link from "next/link";
import s from "./PullRequests.module.scss";

const PullRequests = ({ contribution, index, activeTabId }) => {
  return (
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
  );
};

export default PullRequests;
