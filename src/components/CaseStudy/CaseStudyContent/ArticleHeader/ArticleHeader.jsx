import s from "./ArticleHeader.module.scss";

const ArticleHeader = () => {
  return (
    <header className={s.articleHeader}>
      <p className={s.eyebrow}>Frontend case study / Sep 2026</p>
      <h1>CJ Statistics</h1>
      <p className={s.lede}>
        Building a data-heavy Call of Duty statistics frontend that stayed
        navigable, accessible, and pleasant to use as the project grew.
      </p>
    </header>
  );
};
export default ArticleHeader;
