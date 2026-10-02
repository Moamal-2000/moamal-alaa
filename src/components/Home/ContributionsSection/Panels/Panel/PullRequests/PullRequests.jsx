import Link from "next/link";
import s from "./PullRequests.module.scss";

const PullRequests = ({ contribution, activeTabOrder, index }) => {
  return (
    <ul className={s.pullRequests}>
      {contribution.prs.map((pr) => {
        const commentCount = pr.comments?.totalCount ?? 0;

        return (
          <li key={pr.url}>
            <span className={s.listMarker} aria-hidden="true">
              ▹
            </span>

            <Link
              href={pr.url}
              target="_blank"
              rel="noopener noreferrer"
              tabIndex={activeTabOrder === index ? 0 : -1}
            >
              {pr.title}
            </Link>

            <div className={s.commentCount}>
              <span className="visuallyHidden">
                GitHub pull request comments count
              </span>

              {commentCount}

              <svg aria-hidden="true">
                <use href="/icons-sprite.svg#comment" />
              </svg>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default PullRequests;
