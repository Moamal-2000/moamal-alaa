import { TECHNOLOGIES } from "@/data/staticData";
import s from "./TechList.module.scss";

const TechList = () => {
  return (
    <ul className={s.techList}>
      {TECHNOLOGIES.map(({ name }) => (
        <li key={name}>{name}</li>
      ))}
    </ul>
  );
};

export default TechList;
