import { SOCIAL_MEDIA } from "@/data/staticData";
import SvgIcon from "../SvgIcon";
import s from "./FixedSocialMedia.module.scss";

const FixedSocialMedia = () => {
  return (
    <ul className={s.socialMedia}>
      {SOCIAL_MEDIA.map(({ media, iconName, url, id }) => (
        <li key={id}>
          <a href={url} target="_blank" rel="noopener noreferrer" title={media}>
            <SvgIcon name={iconName} />
          </a>
        </li>
      ))}
    </ul>
  );
};

export default FixedSocialMedia;
