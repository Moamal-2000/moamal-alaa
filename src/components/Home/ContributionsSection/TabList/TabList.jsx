import { useKeyListeners } from "@/hooks/useKeyListeners";
import { getRepoFullName } from "@/lib/contributions";
import { checkMediaQuery, getNextTabIndex, getPrevTabIndex } from "@/lib/utils";
import useGlobalStore from "@/stores/global/useGlobalStore";
import { useEffect, useRef } from "react";
import TabButton from "./TabButton/TabButton";
import s from "./TabList.module.scss";
import TabsHighlighter from "./TabsHighlighter/TabsHighlighter";

const isSmallScreen = checkMediaQuery(768);

const TabList = ({ contribItems }) => {
  const { updateGlobalState, focusedTabOrder } = useGlobalStore();

  const tabsRef = useRef([]);
  const tabsWrapperRef = useRef(null);

  function keyHandler(event) {
    focusTabWithArrowKeys(event, focusedTabOrder, tabsRef, updateGlobalState);
  }

  useKeyListeners({
    ref: tabsWrapperRef,
    listeners: {
      ArrowUp: keyHandler,
      ArrowDown: keyHandler,
      ArrowLeft: keyHandler,
      ArrowRight: keyHandler,
      Home: keyHandler,
      End: keyHandler,
    },
    options: { preventDefault: true },
  });

  // set first tab width (for highlighter animation)
  useEffect(() => {
    const firstTabWidth = tabsRef.current[0].getBoundingClientRect().width;
    updateGlobalState({ activeTabWidth: firstTabWidth });
  }, []);

  return (
    <div
      className={s.tabList}
      role="tablist"
      aria-orientation={isSmallScreen ? "horizontal" : "vertical"}
      ref={tabsWrapperRef}
    >
      {contribItems.map((contribution, index) => {
        const repoFullName = getRepoFullName(contribution);

        return (
          <TabButton
            key={repoFullName}
            index={index}
            contribution={contribution}
            tabsRef={tabsRef}
          />
        );
      })}

      <TabsHighlighter />
    </div>
  );
};

export default TabList;

function focusTabWithArrowKeys(
  event,
  focusedTabOrder,
  tabsRef,
  updateGlobalState,
) {
  if (focusedTabOrder === null) {
    return;
  }

  const tabs = tabsRef.current;
  const key = event.key;

  const nextFocusedTabOrder = getNextFocusedTabOrder({
    key,
    focusedTabOrder,
    tabs,
  });

  if (nextFocusedTabOrder === null) {
    return;
  }

  updateGlobalState({ focusedTabOrder: nextFocusedTabOrder });
  tabs[nextFocusedTabOrder].focus();
}

const tabsKeyMap = {
  ArrowDown: !isSmallScreen ? "next" : null,
  ArrowUp: !isSmallScreen ? "prev" : null,
  ArrowRight: isSmallScreen ? "next" : null,
  ArrowLeft: isSmallScreen ? "prev" : null,
};

function getNextFocusedTabOrder({ key, focusedTabOrder, tabs }) {
  const lastIndex = tabs.length - 1;

  if (key === "Home") {
    return 0;
  }
  if (key === "End") {
    return lastIndex;
  }

  const direction = tabsKeyMap[key];

  if (direction === "next") {
    return getNextTabIndex(focusedTabOrder, tabs.length);
  }
  if (direction === "prev") {
    return getPrevTabIndex(focusedTabOrder, tabs.length);
  }

  return null;
}
