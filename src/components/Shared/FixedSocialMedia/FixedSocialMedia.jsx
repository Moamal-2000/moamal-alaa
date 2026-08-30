import { SOCIAL_MEDIA } from "@/constants/staticData";
import s from "./FixedSocialMedia.module.scss";

const FixedSocialMedia = () => {
  return (
    <ul className={s.socialMedia}>
      {SOCIAL_MEDIA.map(({ media, iconName, url, id }) => (
        <li key={id}>
          <a href={url} target="_blank" rel="noopener noreferrer" title={media}>
            <svg aria-hidden="true" data-type={iconName}>
              <use href={`/icons-sprite.svg#${iconName}`} />
            </svg>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default FixedSocialMedia;
