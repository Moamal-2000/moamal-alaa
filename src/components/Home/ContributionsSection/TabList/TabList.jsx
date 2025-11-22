import { getRepoFullName } from "@/functions/contributions";
import { capitalizeFirstLetter } from "@/functions/helper";
import useGlobalStore from "@/stores/global/useGlobalStore";
import s from "./TabList.module.scss";
import TabsHighlighter from "./TabsHighlighter/TabsHighlighter";

const TabList = ({ contribItems }) => {
  const { activeTabId, updateGlobalState } = useGlobalStore();

  return (
    <div className={s.tabList} role="tablist">
      {contribItems.map((contribution, index) => {
        return (
          <button
            key={getRepoFullName(contribution)}
            className={`${s.tabButton} ${
              activeTabId === index ? s.active : ""
            }`}
            onClick={() => updateGlobalState({ activeTabId: index })}
            role="tab"
            aria-selected={activeTabId === index}
            aria-controls={`panel-${index}`}
          >
            {capitalizeFirstLetter(contribution.repository.name)}
          </button>
        );
      })}

      <TabsHighlighter />
    </div>
  );
};

export default TabList;
