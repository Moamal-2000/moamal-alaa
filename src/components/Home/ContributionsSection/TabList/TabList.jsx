import TabButton from "./TabButton/TabButton";
import s from "./TabList.module.scss";
import TabsHighlighter from "./TabsHighlighter/TabsHighlighter";

const TabList = ({ contribItems }) => {
  return (
    <div className={s.tabList} role="tablist">
      {contribItems.map((contribution, index) => (
        <TabButton key={index} index={index} contribution={contribution} />
      ))}

      <TabsHighlighter />
    </div>
  );
};

export default TabList;
