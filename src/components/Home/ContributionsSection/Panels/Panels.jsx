import Panel from "./Panel/Panel";
import s from "./Panels.module.scss";

const Panels = ({ contributionsToDisplay, activeTabId }) => {
  return (
    <div className={s.panels}>
      {contributionsToDisplay.map((contribution, index) => (
        <Panel
          key={index}
          contribution={contribution}
          index={index}
          activeTabId={activeTabId}
        />
      ))}
    </div>
  );
};

export default Panels;
