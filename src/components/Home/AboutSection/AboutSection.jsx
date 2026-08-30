"use client";

import NumberedHeading from "@/components/Shared/NumberedHeading/NumberedHeading";
import { fadeInOnViewMotionProps } from "@/lib/motionConfig";
import { motion } from "motion/react";
import Image from "next/image";
import AboutContent from "./AboutContent/AboutContent";
import s from "./AboutSection.module.scss";
import ImageFrame from "./ImageFrame/ImageFrame";

const motionProps = fadeInOnViewMotionProps({
  visibilityThreshold: 0.4,
  delay: 0.2,
});

const FRAME_SIZE = 300;

const AboutSection = () => {
  return (
    <motion.section className={s.aboutSection} id="about" {...motionProps}>
      <NumberedHeading title="About Me" number="01" />
      <AboutContent />
      <ImageFrame
        className={s.frameImage}
        width={FRAME_SIZE}
        height={FRAME_SIZE}
      >
        <Image
          src="/images/me.webp"
          alt="Professional headshot of a young man with short, slightly spiked hair, wearing black rectangular eyeglasses and a muted blue-gray t-shirt, smiling warmly against a neutral light-gray background."
          width={FRAME_SIZE}
          height={FRAME_SIZE}
          loading="lazy"
          fetchPriority="low"
        />
      </ImageFrame>
    </motion.section>
  );
};

export default AboutSection;
