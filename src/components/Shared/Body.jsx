import { domAnimation, LazyMotion } from "motion/react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import FixedEmail from "./FixedEmail/FixedEmail";
import FixedSocialMedia from "./FixedSocialMedia/FixedSocialMedia";
import ScrollLock from "./Logic/ScrollLock";
import RootLayer from "./RootLayer/RootLayer";
import SkipContentLink from "./SkipContentLink/SkipContentLink";

const Body = ({ children }) => {
  return (
    <LazyMotion features={domAnimation} strict>
      <body>
        <SkipContentLink />
        <Header />
        <RootLayer>
          <FixedSocialMedia />
          <FixedEmail />
          {children}
          <Footer />
        </RootLayer>
      </body>

      <ScrollLock />
    </LazyMotion>
  );
};
export default Body;
