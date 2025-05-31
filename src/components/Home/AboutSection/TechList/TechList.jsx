"use client";

import { TECHNOLOGIES } from "@/data/staticData";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
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

      <AnimatePresence mode="wait">
        <motion.div
          key={activeIndex}
          className={s.infoBox}
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -5 }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
        >
          <p>{TECHNOLOGIES[activeIndex].description}</p>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default TechList;
