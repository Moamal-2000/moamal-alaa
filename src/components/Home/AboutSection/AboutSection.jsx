"use client";

import NumberedHeading from "@/components/Shared/NumberedHeading/NumberedHeading";
import { fadeInOnViewMotionProps } from "@/functions/motionConfig";
import { motion } from "motion/react";
import Image from "next/image";
import AboutContent from "./AboutContent/AboutContent";
import s from "./AboutSection.module.scss";
import ImageFrame from "./ImageFrame/ImageFrame";
import TechList from "./TechList/TechList";

const AboutSection = () => {
  return (
    <motion.section
      className={s.aboutSection}
      id="about"
      {...fadeInOnViewMotionProps({
        visibilityThreshold: 0.4,
        delay: 0.2,
      })}
    >
      <NumberedHeading title="About Me" number="01" />
      <AboutContent />
      <ImageFrame width={300} height={300}>
        <Image
          src="/images/me.webp"
          alt="Professional headshot of a young man with short, slightly spiked hair, wearing black rectangular eyeglasses and a muted blue-gray t-shirt, smiling warmly against a neutral light-gray background."
          width={300}
          height={300}
          quality={100}
          loading="lazy"
        />
      </ImageFrame>
      <TechList />
    </motion.section>
  );
};

export default AboutSection;
