import { SOCIAL_MEDIA } from "@/constants/staticData";
import Svg from "../Svg";
import s from "./FixedSocialMedia.module.scss";

const FixedSocialMedia = () => {
  return (
    <ul className={s.socialMedia}>
      {SOCIAL_MEDIA.map(({ media, iconName, url, id }) => (
        <li key={id}>
          <a href={url} target="_blank" rel="noopener noreferrer" title={media}>
            <Svg name={iconName} data-type={iconName} />
          </a>
        </li>
      ))}
    </ul>
  );
};

export default FixedSocialMedia;
