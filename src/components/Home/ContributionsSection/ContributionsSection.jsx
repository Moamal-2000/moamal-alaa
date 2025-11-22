"use client";

import NumberedHeading from "@/components/Shared/NumberedHeading/NumberedHeading";
import {
  getContributionData,
  getRepoFullName,
} from "@/functions/contributions";
import { fadeInOnViewMotionProps } from "@/functions/motionConfig";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import s from "./ContributionsSection.module.scss";
import TabList from "./TabList/TabList";

const ContributionsSection = ({ contributions = [] }) => {
  const contributionsToDisplay = getContributionData(contributions);

  const [activeTabId, setActiveTabId] = useState(0);

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
        <TabList
          contributionsToDisplay={contributionsToDisplay}
          activeTabId={activeTabId}
          setActiveTabId={setActiveTabId}
        />

        <div className={s.panels}>
          {contributionsToDisplay.map((contribution, index) => (
            <div
              key={getRepoFullName(contribution)}
              id={`panel-${index}`}
              role="tabpanel"
              className={`${s.panel} ${
                activeTabId === index ? s.show : s.hidden
              }`}
            >
              <Link
                href={contribution.repository.url}
                target="_blank"
                rel="noopener noreferrer"
                className={s.title}
                tabIndex={activeTabId === index ? 0 : -1}
              >
                {getRepoFullName(contribution).toLocaleLowerCase()}
              </Link>

              <p className={s.description}>
                {contribution.repository.description}
              </p>

              <ul className={s.pullRequests}>
                {contribution.prs.map((pr) => (
                  <li key={pr.url}>
                    <Link
                      href={pr.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      tabIndex={activeTabId === index ? 0 : -1}
                    >
                      {pr.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default ContributionsSection;
