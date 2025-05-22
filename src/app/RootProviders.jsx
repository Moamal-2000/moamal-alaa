"use client";

import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import FixedEmail from "@/components/Shared/FixedEmail/FixedEmail";
import FixedSocialMedia from "@/components/Shared/FixedSocialMedia/FixedSocialMedia";
import useGlobalStore from "@/stores/global/useGlobalStore";
import RootLayer from "./RootLayer";

const RootProviders = ({ children }) => {
  const { isMobileNavOpen } = useGlobalStore();

  return (
    <html lang="en">
      <body className={isMobileNavOpen ? "noScroll" : ""}>
        <Header />
        <RootLayer>
          <FixedSocialMedia />
          <FixedEmail />
          {children}
          <Footer />
        </RootLayer>
      </body>
    </html>
  );
};

export default RootProviders;
