import { AnimatePresence, motion } from "motion/react";
import s from "./TechInfoBox.module.scss";

const TechInfoBox = ({ activeTech, id }) => {
  return (
    <AnimatePresence mode="wait">
      <motion.p
        key={activeTech.id}
        className={s.infoBox}
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -5 }}
        transition={{ duration: 0.2, ease: "easeInOut" }}
        id={id}
        role="tabpanel"
        aria-labelledby={`tab-${activeTech.id}`}
      >
        {activeTech.description}
      </motion.p>
    </AnimatePresence>
  );
};

export default TechInfoBox;
