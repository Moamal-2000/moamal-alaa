import Svg from "@/components/Shared/Svg";
import { SOCIAL_MEDIA } from "@/constants/staticData";
import s from "./InLineSocialMedia.module.scss";

const InLineSocialMedia = () => {
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

export default InLineSocialMedia;
