import { METADATA } from "@/data/metadata";
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
      {process.env.NODE_ENV === "production" && <SpeedInsights />}
      <RootProviders>{children}</RootProviders>
    </>
  );
}
