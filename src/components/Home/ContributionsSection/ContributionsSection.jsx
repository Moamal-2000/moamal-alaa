"use client";

import NumberedHeading from "@/components/Shared/NumberedHeading/NumberedHeading";
import { getContributionData } from "@/lib/contributions";
import { fadeInOnViewMotionProps } from "@/lib/motionConfig";
import { motion } from "motion/react";
import s from "./ContributionsSection.module.scss";
import Panels from "./Panels/Panels";
import TabList from "./TabList/TabList";

const motionProps = fadeInOnViewMotionProps({
  visibilityThreshold: 0.4,
  delay: 0.2,
});

const ContributionsSection = ({ contributions = [] }) => {
  const contribItems = getContributionData(contributions);

  return (
    <motion.section id="contributions" className={s.section} {...motionProps}>
      <NumberedHeading number="02" title="Where I Have Contributed" />

      <div className={s.wrapper}>
        <TabList contribItems={contribItems} />
        <Panels contribItems={contribItems} />
      </div>
    </motion.section>
  );
};

export default ContributionsSection;
