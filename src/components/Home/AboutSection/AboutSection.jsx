import NumberedHeading from "@/components/Shared/NumberedHeading/NumberedHeading";
import Image from "next/image";
import AboutContent from "./AboutContent/AboutContent";
import s from "./AboutSection.module.scss";
import AboutWrapper from "./AboutWrapper";
import ImageFrame from "./ImageFrame/ImageFrame";

const FRAME_SIZE = 300;

const AboutSection = () => {
  return (
    <AboutWrapper>
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
    </AboutWrapper>
  );
};

export default AboutSection;
