import s from "./SkipLink.module.scss";

const SkipLink = () => {
  return (
    <a href="#main-content" className={s.skipLink}>
      Skip to content
    </a>
  );
};

export default SkipLink;
