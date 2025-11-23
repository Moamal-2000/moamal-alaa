import { getRepoFullName } from "@/functions/contributions";
import { capitalizeFirstLetter } from "@/functions/helper";
import useGlobalStore from "@/stores/global/useGlobalStore";
import s from "./TabButton.module.scss";

const TabButton = ({ contribution, index }) => {
  const { activeTabId, updateGlobalState } = useGlobalStore();

  const isActive = activeTabId === index;
  const repoName = capitalizeFirstLetter(contribution.repository.name);

  return (
    <button
      key={getRepoFullName(contribution)}
      className={`${s.tabButton} ${isActive ? s.active : ""}`}
      onClick={() => updateGlobalState({ activeTabId: index })}
      role="tab"
      aria-selected={isActive}
      aria-controls={`panel-${index}`}
      tabIndex={isActive ? 0 : -1}
    >
      {repoName}
    </button>
  );
};

export default TabButton;
