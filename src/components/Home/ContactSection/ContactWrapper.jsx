"use client";

import { fadeInOnViewMotionProps } from "@/lib/motionConfig";
import { m } from "motion/react";
import s from "./ContactSection.module.scss";

const motionProps = fadeInOnViewMotionProps({ visibilityThreshold: 0.8 });

const ContactWrapper = ({ children }) => {
  return (
    <m.section className={s.contactSection} id="contact" {...motionProps}>
      {children}
    </m.section>
  );
};
export default ContactWrapper;
