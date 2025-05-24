import { TECHNOLOGIES } from "@/data/staticData";
import s from "./TechList.module.scss";

const TechList = () => {
  return (
    <ul className={s.techList}>
      {TECHNOLOGIES.map(({ name, description, id }) => (
        <li key={`${id}-${name}`}>
          {name}

          <div className={s.infoBox}>
            <b>{name}</b>
            <p>{description}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TechList;
