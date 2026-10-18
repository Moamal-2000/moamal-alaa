import s from "./ArticleHeader.module.scss";

const ArticleHeader = () => {
  return (
    <header className={s.articleHeader}>
      <p className={s.eyebrow}>Archived project / Frontend case study / Sep 2026</p>
      <h1>CJ Statistics</h1>
      <p className={s.lede}>
        Building a data-heavy Call of Duty statistics frontend that stayed
        navigable, accessible, and pleasant to use as the project grew.
      </p>
      <aside className={s.archiveNotice} aria-label="Archived project notice">
        <strong>Archived project</strong>
        <p>
          Live data is no longer available on this site. CJ Statistics is
          preserved as a static portfolio showcase of the frontend work, using
          existing data that may not be current.
        </p>
      </aside>
    </header>
  );
};
export default ArticleHeader;
