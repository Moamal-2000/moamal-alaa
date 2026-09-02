import { fadeInOnViewMotionProps } from "@/lib/motionConfig";
import { m } from "motion/react";
import s from "./OtherProjectsHeader.module.scss";

const motionProps = fadeInOnViewMotionProps();

const OtherProjectsHeader = () => {
  return (
    <m.header className={s.otherProjectsHeader} {...motionProps}>
      <h2 className={s.title}>Other Noteworthy Projects</h2>
    </m.header>
  );
};

export default OtherProjectsHeader;
