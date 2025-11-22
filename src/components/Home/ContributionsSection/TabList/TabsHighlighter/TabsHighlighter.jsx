import { SMALL_SCREEN_WIDTH } from "@/data/constants";
import useGetResizeWindow from "@/hooks/useGetResizeWindow";
import useGlobalStore from "@/stores/global/useGlobalStore";
import { useEffect, useState } from "react";
import s from "./TabsHighlighter.module.scss";

const TabsHighlighter = () => {
  const [isMounted, setIsMounted] = useState(false);

  const activeTabId = useGlobalStore().activeTabId;
  const { width: windowWidth } = useGetResizeWindow({ debounceDelay: 200 });

  const highlightStyles = isMounted
    ? getTabPanelMotionProps({ windowWidth, activeTabId })
    : {};

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return <div className={s.highlight} style={highlightStyles} />;
};

export default TabsHighlighter;

function getTabPanelMotionProps({ windowWidth, activeTabId }) {
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
