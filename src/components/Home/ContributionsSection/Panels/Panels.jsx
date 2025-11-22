import Panel from "./Panel/Panel";
import s from "./Panels.module.scss";

const Panels = ({ contributionsToDisplay }) => {
  return (
    <div className={s.panels}>
      {contributionsToDisplay.map((contribution, index) => (
        <Panel key={index} contribution={contribution} index={index} />
      ))}
    </div>
  );
};

export default Panels;
