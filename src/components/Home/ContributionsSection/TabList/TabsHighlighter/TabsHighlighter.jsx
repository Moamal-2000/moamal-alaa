import { SMALL_SCREEN_WIDTH } from "@/data/constants";
import useGetResizeWindow from "@/hooks/useGetResizeWindow";
import useGlobalStore from "@/stores/global/useGlobalStore";
import { useEffect, useState } from "react";
import s from "./TabsHighlighter.module.scss";

const TabsHighlighter = () => {
  const { activeTabOrder, activeTabWidth, tabsHighlightLeftPosition } =
    useGlobalStore();
  const [isMounted, setIsMounted] = useState(false);

  const { width: windowWidth } = useGetResizeWindow({ debounceDelay: 200 });

  const highlightStyles = isMounted
    ? getHighlightStyles({
        windowWidth,
        activeTabOrder,
        activeTabWidth,
        tabsHighlightLeftPosition,
      })
    : {};

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return <div className={s.highlight} style={highlightStyles} />;
};

export default TabsHighlighter;

function getHighlightStyles({
  windowWidth,
  activeTabOrder,
  activeTabWidth,
  tabsHighlightLeftPosition,
}) {
  const isSmallScreen = windowWidth <= SMALL_SCREEN_WIDTH;
  const styles = { translate: `0 calc(${activeTabOrder} * var(--tab-height))` };

  if (!isSmallScreen) return styles;

  if (isSmallScreen) {
    styles.translate = `${tabsHighlightLeftPosition}px 0`;
    styles.width = `${activeTabWidth}px`;
  }

  return styles;
}
