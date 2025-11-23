import { getRepoFullName } from "@/functions/contributions";
import { capitalizeFirstLetter } from "@/functions/helper";
import useGlobalStore from "@/stores/global/useGlobalStore";
import s from "./TabButton.module.scss";

const TabButton = ({ contribution, index }) => {
  const { activeTabId, updateGlobalState } = useGlobalStore();

  return (
    <button
      key={getRepoFullName(contribution)}
      className={`${s.tabButton} ${activeTabId === index ? s.active : ""}`}
      onClick={() => updateGlobalState({ activeTabId: index })}
      role="tab"
      aria-selected={activeTabId === index}
      aria-controls={`panel-${index}`}
      tabIndex={activeTabId === index ? 0 : -1}
    >
      {capitalizeFirstLetter(contribution.repository.name)}
    </button>
  );
};

export default TabButton;
