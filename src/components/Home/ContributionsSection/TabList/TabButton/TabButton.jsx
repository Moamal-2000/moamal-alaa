import { getRepoFullName } from "@/functions/contributions";
import { capitalizeFirstLetter } from "@/functions/helper";
import useGlobalStore from "@/stores/global/useGlobalStore";
import s from "./TabButton.module.scss";

const TabButton = ({ contribution, index, tabsRef }) => {
  const { activeTabId, updateGlobalState } = useGlobalStore();

  const isActive = activeTabId === index;
  const repoName = capitalizeFirstLetter(contribution.repository.name);

  return (
    <button
      key={getRepoFullName(contribution)}
      className={`${s.tabButton} ${isActive ? s.active : ""}`}
      role="tab"
      aria-selected={isActive}
      aria-controls={`panel-${index}`}
      tabIndex={isActive ? 0 : -1}
      onClick={() => updateGlobalState({ activeTabId: index })}
      onFocus={() => updateGlobalState({ focusedTabId: index })}
      onBlur={() => updateGlobalState({ focusedTabId: null })}
      ref={(el) => (tabsRef.current[index] = el)}
    >
      {repoName}
    </button>
  );
};

export default TabButton;
