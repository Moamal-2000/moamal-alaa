"use client";

import NumberedHeading from "@/components/Shared/NumberedHeading/NumberedHeading";
import { getContributionData } from "@/functions/contributions";
import { fadeInOnViewMotionProps } from "@/functions/motionConfig";
import { motion } from "framer-motion";
import s from "./ContributionsSection.module.scss";
import Panels from "./Panels/Panels";
import TabList from "./TabList/TabList";

const ContributionsSection = ({ contributions = [] }) => {
  const contribItems = getContributionData(contributions);

  return (
    <motion.section
      id="contributions"
      className={s.section}
      {...fadeInOnViewMotionProps({
        visibilityThreshold: 0.4,
        delay: 0.2,
      })}
    >
      <NumberedHeading number="02" title="Where I Have Contributed" />

      <div className={s.wrapper}>
        <TabList contribItems={contribItems} />
        <Panels contribItems={contribItems} />
      </div>
    </motion.section>
  );
};

export default ContributionsSection;
