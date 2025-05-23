import s from "./SkipContentLink.module.scss"

const SkipContentLink = ({ scrollTo }) => {
  return (
    <a href={`#${scrollTo}`} className={s.skipLink}>
      Skip to content
    </a>
  );
};

export default SkipContentLink;
