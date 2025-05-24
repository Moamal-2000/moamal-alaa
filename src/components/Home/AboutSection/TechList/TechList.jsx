import s from "./TechList.module.scss";

const TechList = () => {
  return (
    <ul className={s.techList}>
      <li>JavaScript (ES6+)</li>
      <li>Sass</li>
      <li>React</li>
      <li>Next</li>
      <li>Progressive Web App</li>
      <li>Redux/Toolkit</li>
    </ul>
  );
};

export default TechList;
