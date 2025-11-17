import s from "./ContributionCard.module.scss";

// Git Pull Request icon
const PullRequestIcon = () => (
  <svg
    className={s.icon}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    width="16"
    height="16"
  >
    <circle cx="18" cy="18" r="3" />
    <circle cx="6" cy="6" r="3" />
    <path d="M13 6h3a2 2 0 0 1 2 2v7" />
    <line x1="6" y1="9" x2="6" y2="21" />
  </svg>
);

// Git Merge icon
const MergeIcon = () => (
  <svg
    className={s.icon}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    width="16"
    height="16"
  >
    <circle cx="18" cy="18" r="3" />
    <circle cx="6" cy="6" r="3" />
    <path d="M6 21V9a9 9 0 0 0 9 9" />
  </svg>
);

// External Link icon
const ExternalLinkIcon = () => (
  <svg
    className={s.externalIcon}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    width="16"
    height="16"
  >
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

const ContributionCard = ({ repository, prs = [] }) => {
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  // Calculate total stats
  const stats = prs.reduce(
    (acc, pr) => ({
      additions: (acc.additions || 0) + (pr.additions || 0),
      deletions: (acc.deletions || 0) + (pr.deletions || 0),
      changedFiles: (acc.changedFiles || 0) + (pr.changedFiles || 0),
    }),
    { additions: 0, deletions: 0, changedFiles: 0 }
  );

  return (
    <div className={s.card}>
      <div className={s.cardHeader}>
        <h3 className={s.title}>
          <a
            href={repository.url}
            target="_blank"
            rel="noopener noreferrer"
            className={s.titleLink}
          >
            {repository.owner.login}/{repository.name}
            <ExternalLinkIcon />
          </a>
        </h3>
      </div>

      <div className={s.cardBody}>
        {repository.description && (
          <p className={s.description}>{repository.description}</p>
        )}

        <div className={s.prList}>
          <h4 className={s.prListTitle}>Merged Pull Requests ({prs.length})</h4>
          <ul className={s.prItems}>
            {prs.map((pr) => (
              <li key={pr.url} className={s.prItem}>
                <a
                  href={pr.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={s.prLink}
                >
                  <span className={s.prTitle}>{pr.title}</span>
                  <span className={s.prDate}>
                    <MergeIcon />
                    {formatDate(pr.mergedAt)}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className={s.stats}>
          <div className={s.stat}>
            <span className={`${s.statNumber} ${s.additions}`}>
              +{stats.additions}
            </span>
            <span className={s.statLabel}>Added</span>
          </div>
          <div className={s.stat}>
            <span className={`${s.statNumber} ${s.deletions}`}>
              -{stats.deletions}
            </span>
            <span className={s.statLabel}>Removed</span>
          </div>
          <div className={s.stat}>
            <span className={s.statNumber}>{stats.changedFiles}</span>
            <span className={s.statLabel}>Files</span>
          </div>
          <div className={s.stat}>
            <span className={s.statNumber}>{prs.length}</span>
            <span className={s.statLabel}>PRs</span>
          </div>
        </div>
      </div>

      <div className={s.cardFooter}>
        <div className={s.status}>
          <span>Latest PR: {formatDate(prs[0]?.mergedAt)}</span>
        </div>
        <a
          href={`${repository.url}/pulls?q=is:pr+author:Moamal-2000`}
          target="_blank"
          rel="noopener noreferrer"
          className={s.viewButton}
        >
          <PullRequestIcon />
          View All PRs
        </a>
      </div>
    </div>
  );
};

export default ContributionCard;
