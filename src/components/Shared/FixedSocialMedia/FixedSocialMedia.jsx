import { SOCIAL_MEDIA } from "@/data/staticData";
import s from "./FixedSocialMedia.module.scss";

const FixedSocialMedia = () => {
  return (
    <div className={s.socialMedia}>
      {SOCIAL_MEDIA.map(({ media, iconName, url, id }) => (
        <a
          key={id}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          title={media}
        >
          <SvgIcon name={iconName} />
        </a>
      ))}
    </div>
  );
};

export default FixedSocialMedia;
