"use client";

import { TECHNOLOGIES } from "@/data/staticData";
import { useState } from "react";
import TechInfoBox from "./TechInfoBox/TechInfoBox";
import s from "./TechList.module.scss";

const TechList = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className={s.wrapper}>
      <ul className={s.techList}>
        {TECHNOLOGIES.map(({ name, id }, index) => (
          <li
            key={`${id}-${name}`}
            className={index === activeIndex ? s.active : ""}
            onMouseEnter={() => setActiveIndex(index)}
          >
            {name}
          </li>
        ))}
      </ul>

      <TechInfoBox activeIndex={activeIndex} />
    </div>
  );
};

export default TechList;
