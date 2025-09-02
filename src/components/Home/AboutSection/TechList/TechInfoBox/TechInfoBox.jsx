import { TECHNOLOGIES } from "@/data/staticData";
import { AnimatePresence, motion } from "motion/react";
import s from "./TechInfoBox.module.scss";

const TechInfoBox = ({ activeIndex }) => {
  return (
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
  );
};

export default TechInfoBox;
