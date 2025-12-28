"use client";

import LinkButton from "@/components/Shared/Buttons/LinkButton/LinkButton";
import { fadeInOnViewMotionProps } from "@/functions/motionConfig";
import { motion } from "motion/react";
import s from "./ContactSection.module.scss";

const ContactSection = () => {
  return (
    <motion.section
      className={s.contactSection}
      id="contact"
      {...fadeInOnViewMotionProps({
        visibilityThreshold: 0.8,
      })}
    >
      <h2>04. What's Next?</h2>
      <h3>Get In Touch</h3>
      <p className={s.description}>
        I'm currently looking for new opportunities. Whether you have a question
        or just want to say hi, I'll get back to you as soon as possible!
      </p>
      <LinkButton
        href="mailto:moamalalaapro1@gmail.com"
        title="Send me an email"
      >
        Say Hello
      </LinkButton>
    </motion.section>
  );
};

export default ContactSection;
