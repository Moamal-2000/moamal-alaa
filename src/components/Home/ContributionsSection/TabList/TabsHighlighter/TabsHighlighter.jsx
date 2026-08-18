import { MEDIUM_SCREEN_WIDTH } from "@/constants/constants";
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

  return (
    <div className={s.highlight} style={highlightStyles} role="presentation" />
  );
};

export default TabsHighlighter;

function getHighlightStyles({
  windowWidth,
  activeTabOrder,
  activeTabWidth,
  tabsHighlightLeftPosition,
}) {
  const isMediumScreen = windowWidth <= MEDIUM_SCREEN_WIDTH;
  const styles = { translate: `0 calc(${activeTabOrder} * var(--tab-height))` };

  if (!isMediumScreen) {
    return styles;
  }

  if (isMediumScreen) {
    styles.translate = `${tabsHighlightLeftPosition}px 0`;
    styles.width = `${activeTabWidth}px`;
  }

  return styles;
}
