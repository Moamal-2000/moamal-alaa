import { IS_PRODUCTION } from "@/data/constants";
import { METADATA } from "@/data/metadata";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import RootProviders from "../components/Shared/RootProviders";
import "../styles/globals.scss";

export const metadata = METADATA;

export const viewport = {
  themeColor: "#012260",
  viewport:
    "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no",
};

export default function RootLayout({ children }) {
  return (
    <>
      <RootProviders>{children}</RootProviders>
      {IS_PRODUCTION && (
        <>
          <Analytics />
          <SpeedInsights />
        </>
      )}
    </>
  );
}
