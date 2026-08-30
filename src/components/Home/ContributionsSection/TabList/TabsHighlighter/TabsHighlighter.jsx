import { MEDIUM_SCREEN_WIDTH } from "@/constants/constants";
import useGetResizeWindow from "@/hooks/useGetResizeWindow";
import useGlobalStore from "@/stores/global/useGlobalStore";
import { useEffect, useState } from "react";
import s from "./TabsHighlighter.module.scss";

const TabsHighlighter = () => {
  const { activeTabOrder, activeTabWidth, tabsHighlightLeftPosition } =
    useGlobalStore();
  const [mounted, setMounted] = useState(false);

  const { width: windowWidth } = useGetResizeWindow({ debounceDelay: 200 });

  const highlightStyles = mounted
    ? getHighlightStyles({
        windowWidth,
        activeTabOrder,
        activeTabWidth,
        tabsHighlightLeftPosition,
      })
    : {};

  useEffect(() => {
    setMounted(true);
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

  if (!isMediumScreen) {
    return {
      transform: `translateY(calc(${activeTabOrder} * var(--tab-height)))`,
    };
  }

  const scaleRatio = activeTabWidth / 100;

  return {
    transform: `translateX(${tabsHighlightLeftPosition}px) scaleX(${scaleRatio})`,
  };
}
