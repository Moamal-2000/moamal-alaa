import { getRepoFullName } from "@/lib/contributions";
import { capitalizeFirstLetter } from "@/lib/utils";
import useGlobalStore from "@/stores/global/useGlobalStore";
import s from "./TabButton.module.scss";

const TabButton = ({ contribution, index, tabsRef }) => {
  const { activeTabOrder, updateGlobalState } = useGlobalStore();

  const isActive = activeTabOrder === index;
  const repoName = capitalizeFirstLetter(contribution.repository.name);

  function handleClick(event) {
    const currentTab = event.currentTarget;
    const activeTabWidth = currentTab.getBoundingClientRect().width;
    const tabsHighlightLeftPosition = currentTab.offsetLeft;

    updateGlobalState({
      tabsHighlightLeftPosition,
      activeTabWidth,
      activeTabOrder: index,
    });
  }

  return (
    <button
      key={getRepoFullName(contribution)}
      className={`${s.tabButton} ${isActive ? s.active : ""}`}
      id={`contribution-tab-${index}`}
      role="tab"
      aria-selected={isActive}
      aria-controls={`panel-${index}`}
      tabIndex={isActive ? 0 : -1}
      onClick={handleClick}
      onFocus={() => updateGlobalState({ focusedTabOrder: index })}
      onBlur={() => updateGlobalState({ focusedTabOrder: null })}
      ref={(el) => (tabsRef.current[index] = el)}
    >
      {repoName}
    </button>
  );
};

export default TabButton;
