import Link from "next/link";
import s from "./PullRequestItem.module.scss";

const PullRequestItem = ({ data, activeTabOrder, index }) => {
  if (!data || data?.length === 0) {
    return null;
  }

  const { url, title, comments } = data;
  const commentCount = comments?.totalCount ?? "N/A";

  return (
    <li className={s.item}>
      <span className={s.listMarker} aria-hidden="true">
        ▹
      </span>

      <Link
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        tabIndex={activeTabOrder === index ? 0 : -1}
      >
        {title}
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
};
export default PullRequestItem;
