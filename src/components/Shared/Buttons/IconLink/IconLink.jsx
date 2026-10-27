import Svg from "../../Svg";
import s from "./IconLink.module.scss";

const IconLink = ({ href, title, ariaLabel, iconName }) => {
  if (!href || href === undefined || href === null) {
    return null;
  }

  return (
    <a
      href={href}
      title={title}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
      className={s.link}
    >
      <Svg name={iconName} />
    </a>
  );
};
export default IconLink;
