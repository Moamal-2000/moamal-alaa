import { SOCIAL_MEDIA } from "@/data/staticData";
import { fixedItemsMotionProps } from "@/functions/motionConfig";
import { motion } from "motion/react";
import s from "./FixedSocialMedia.module.scss";

const FixedSocialMedia = () => {
  return (
    <motion.ul className={s.socialMedia} {...fixedItemsMotionProps()}>
      {SOCIAL_MEDIA.map(({ media, iconName, url, id }) => (
        <li key={id}>
          <a href={url} target="_blank" rel="noopener noreferrer" title={media}>
            <svg aria-hidden="true" data-type={iconName}>
              <use href={`/icons-sprite.svg#${iconName}`} />
            </svg>
          </a>
        </li>
      ))}
    </motion.ul>
  );
};

export default FixedSocialMedia;
