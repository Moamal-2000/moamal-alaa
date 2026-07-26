"use client";

import useGlobalStore from "@/stores/global/useGlobalStore";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import UpdateNotification from "../PWA/UpdateNotification/UpdateNotification";
import FixedEmail from "./FixedEmail/FixedEmail";
import FixedSocialMedia from "./FixedSocialMedia/FixedSocialMedia";
import RootLayer from "./RootLayer/RootLayer";
import SkipContentLink from "./SkipContentLink/SkipContentLink";

const Body = ({ children }) => {
  const isMobileNavOpen = useGlobalStore((s) => s.isMobileNavOpen);

  return (
    <body className={isMobileNavOpen ? "noScroll" : ""}>
      <UpdateNotification />
      <SkipContentLink />
      <Header />
      <RootLayer>
        <FixedSocialMedia />
        <FixedEmail />
        {children}
        <Footer />
      </RootLayer>
    </body>
  );
};
export default Body;
