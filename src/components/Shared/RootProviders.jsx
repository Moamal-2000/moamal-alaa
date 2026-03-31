"use client";

import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import FixedEmail from "@/components/Shared/FixedEmail/FixedEmail";
import FixedSocialMedia from "@/components/Shared/FixedSocialMedia/FixedSocialMedia";
import SkipContentLink from "@/components/Shared/SkipContentLink/SkipContentLink";
import UpdateNotification from "../PWA/UpdateNotification/UpdateNotification";
import RootLayer from "./RootLayer/RootLayer";

const RootProviders = ({ children }) => {
  return (
    <html lang="en">
      <body>
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
    </html>
  );
};

export default RootProviders;
