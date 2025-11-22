"use client";

import NumberedHeading from "@/components/Shared/NumberedHeading/NumberedHeading";
import { SMALL_SCREEN_WIDTH } from "@/data/constants";
import {
  getContributionData,
  getRepoFullName,
} from "@/functions/contributions";
import { capitalizeFirstLetter } from "@/functions/helper";
import useGetResizeWindow from "@/hooks/useGetResizeWindow";
import Link from "next/link";
import { useEffect, useState } from "react";
import s from "./ContributionsSection.module.scss";

const ContributionsSection = ({ contributions = [] }) => {
  const contributionsToDisplay = getContributionData(contributions);

  const [activeTabId, setActiveTabId] = useState(0);
  const [isMounted, setIsMounted] = useState(false);

  const { width: windowWidth } = useGetResizeWindow({ debounceDelay: 200 });

  function getTabPanelMotionProps() {
    const isSmallScreen = windowWidth <= SMALL_SCREEN_WIDTH;
    const stylesObject = {
      translate: `0 calc(${activeTabId} * var(--tab-height))`,
    };

    if (!isSmallScreen) return stylesObject;

    if (isSmallScreen) {
      const tabWidth = "176.2px";
      stylesObject.translate = `calc(${activeTabId} * ${tabWidth}) 0`;
      stylesObject.width = tabWidth;
    }

    return stylesObject;
  }

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <section id="contributions" className={s.section}>
      <NumberedHeading number="02" title="Where I Have Contributed" />

      <div className={s.wrapper}>
        <div className={s.tabList} role="tablist">
          {contributionsToDisplay.map((contribution, index) => {
            return (
              <button
                key={getRepoFullName(contribution)}
                className={`${s.tabButton} ${
                  activeTabId === index ? s.active : ""
                }`}
                onClick={() => setActiveTabId(index)}
                role="tab"
                aria-selected={activeTabId === index}
                aria-controls={`panel-${index}`}
              >
                {capitalizeFirstLetter(contribution.repository.name)}
              </button>
            );
          })}

          <div
            className={s.highlight}
            style={isMounted ? getTabPanelMotionProps() : {}}
          />
        </div>

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
    </section>
  );
};

export default ContributionsSection;
