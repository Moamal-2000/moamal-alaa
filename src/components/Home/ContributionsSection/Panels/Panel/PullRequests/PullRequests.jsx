"use client";

import { useEffect, useRef, useState } from "react";
import PullRequestItem from "./PullRequestItem/PullRequestItem";
import s from "./PullRequests.module.scss";

const PullRequests = ({ contribution, activeTabOrder, index }) => {
  const [isScrollable, setIsScrollable] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const containerElement = containerRef.current;

    if (!containerElement) {
      return;
    }

    const hasVerticalScroll =
      containerElement.scrollHeight > containerElement.clientHeight;
    setIsScrollable(hasVerticalScroll);
  }, []);

  if (!contribution?.prs || contribution?.prs?.length === 0) {
    return null;
  }

  return (
    <ul
      className={s.pullRequests}
      ref={containerRef}
      tabIndex={isScrollable ? 0 : undefined}
    >
      {contribution.prs.map((pullRequest) => (
        <PullRequestItem
          key={pullRequest.url}
          data={pullRequest}
          activeTabOrder={activeTabOrder}
          index={index}
        />
      ))}
    </ul>
  );
};

export default PullRequests;
