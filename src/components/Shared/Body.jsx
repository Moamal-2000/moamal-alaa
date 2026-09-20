"use client";

import useGlobalStore from "@/stores/global/useGlobalStore";
import { domAnimation, LazyMotion } from "motion/react";
import { useEffect } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import FixedEmail from "./FixedEmail/FixedEmail";
import FixedSocialMedia from "./FixedSocialMedia/FixedSocialMedia";
import RootLayer from "./RootLayer/RootLayer";
import SkipContentLink from "./SkipContentLink/SkipContentLink";

const Body = ({ children }) => {
  const isMobileNavOpen = useGlobalStore((s) => s.isMobileNavOpen);

  useEffect(() => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker
        .register("/sw.js")
        .then((registration) => registration.update())
        .catch((error) => {
          console.error("Error registering service worker:", error);
        });
    }
  }, []);

  return (
    <LazyMotion features={domAnimation} strict>
      <body className={isMobileNavOpen ? "noScroll" : ""}>
        <SkipContentLink />
        <Header />
        <RootLayer>
          <FixedSocialMedia />
          <FixedEmail />
          {children}
          <Footer />
        </RootLayer>
      </body>
    </LazyMotion>
  );
};
export default Body;
