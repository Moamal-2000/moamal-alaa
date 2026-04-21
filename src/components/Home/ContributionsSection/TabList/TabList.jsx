import { useKeyListeners } from "@/hooks/useKeyListeners";
import useGlobalStore from "@/stores/global/useGlobalStore";
import { useEffect, useRef } from "react";
import TabButton from "./TabButton/TabButton";
import s from "./TabList.module.scss";
import TabsHighlighter from "./TabsHighlighter/TabsHighlighter";

const TabList = ({ contribItems }) => {
  const { updateGlobalState, focusedTabOrder } = useGlobalStore();
  const tabsRef = useRef([]);

  function keyHandler(event) {
    focusTabWithArrowKeys(event, focusedTabOrder, tabsRef, updateGlobalState);
  }

  useKeyListeners(
    {
      ArrowUp: keyHandler,
      ArrowDown: keyHandler,
      Home: keyHandler,
      End: keyHandler,
    },
    { preventDefault: true },
  );

  // set first tab width (for highlighter animation)
  useEffect(() => {
    const firstTabWidth = tabsRef.current[0].getBoundingClientRect().width;
    updateGlobalState({ activeTabWidth: firstTabWidth });
  }, []);

  return (
    <div className={s.tabList} role="tablist">
      {contribItems.map((contribution, index) => (
        <TabButton
          key={index}
          index={index}
          contribution={contribution}
          tabsRef={tabsRef}
        />
      ))}

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
  const nextfocusedTabOrder = getNextfocusedTabOrder({
    key,
    focusedTabOrder,
    tabs,
  });

  if (nextfocusedTabOrder === null) {
    return;
  }

  updateGlobalState({ focusedTabOrder: nextfocusedTabOrder });
  tabs[nextfocusedTabOrder].focus();
}

function getNextfocusedTabOrder({ key, focusedTabOrder, tabs }) {
  if (key === "ArrowDown") {
    return focusedTabOrder === tabs.length - 1 ? 0 : focusedTabOrder + 1;
  }

  if (key === "ArrowUp") {
    return focusedTabOrder === 0 ? tabs.length - 1 : focusedTabOrder - 1;
  }

  if (key === "Home") {
    return 0;
  }
  if (key === "End") {
    return tabs.length - 1;
  }

  return null;
}
