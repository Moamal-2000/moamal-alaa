"use client";

import { TECHNOLOGIES } from "@/data/staticData";
import { useState } from "react";
import TechInfoBox from "./TechInfoBox/TechInfoBox";
import s from "./TechList.module.scss";

const TechList = () => {
  const [activeTech, setActiveTech] = useState(TECHNOLOGIES[0]);

  return (
    <div className={s.wrapper}>
      <ul className={s.techList} role="tablist">
        {TECHNOLOGIES.map((tech) => (
          <li key={tech.id} role="presentation">
            <button
              type="button"
              className={tech.id === activeTech.id ? s.active : ""}
              onClick={() => setActiveTech(tech)}
              onFocus={() => setActiveTech(tech)}
              role="tab"
              aria-selected={tech.id === activeTech.id}
              aria-controls="tech-info-panel"
              id={`tech-tab-${tech.id}`}
            >
              {tech.name}
            </button>
          </li>
        ))}
      </ul>

      <TechInfoBox activeTech={activeTech} id="tech-info-panel" />
    </div>
  );
};

export default TechList;
