import { useKeyListeners } from "@/hooks/useKeyListeners";
import useGlobalStore from "@/stores/global/useGlobalStore";
import { useRef } from "react";
import TabButton from "./TabButton/TabButton";
import s from "./TabList.module.scss";
import TabsHighlighter from "./TabsHighlighter/TabsHighlighter";

const TabList = ({ contribItems }) => {
  const { updateGlobalState, focusedTabId } = useGlobalStore();
  const tabsRef = useRef([]);

  function keyHandler(event) {
    focusTabWithArrowKeys(event, focusedTabId, tabsRef, updateGlobalState);
  }

  useKeyListeners(
    {
      ArrowUp: keyHandler,
      ArrowDown: keyHandler,
      Home: keyHandler,
      End: keyHandler,
    },
    { preventDefault: true }
  );

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
  focusedTabId,
  tabsRef,
  updateGlobalState
) {
  if (focusedTabId === null) return;

  const tabs = tabsRef.current;
  const key = event.key;
  const nextFocusedTabId = getNextFocusedTabId({ key, focusedTabId, tabs });

  if (nextFocusedTabId === null) return;

  updateGlobalState({ focusedTabId: nextFocusedTabId });
  tabs[nextFocusedTabId].focus();
}

function getNextFocusedTabId({ key, focusedTabId, tabs }) {
  if (key === "ArrowDown") {
    return focusedTabId === tabs.length - 1 ? 0 : focusedTabId + 1;
  }

  if (key === "ArrowUp") {
    return focusedTabId === 0 ? tabs.length - 1 : focusedTabId - 1;
  }

  if (key === "Home") return 0;
  if (key === "End") return tabs.length - 1;

  return null;
}
