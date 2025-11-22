import Panel from "./Panel/Panel";
import s from "./Panels.module.scss";

const Panels = ({ contribItems }) => {
  return (
    <div className={s.panels}>
      {contribItems.map((contribution, index) => (
        <Panel key={index} contribution={contribution} index={index} />
      ))}
    </div>
  );
};

export default Panels;
