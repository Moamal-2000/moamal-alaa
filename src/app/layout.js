import PWAInit from "@/components/PWA/PWAInit";
import { METADATA } from "@/data/metadata";
import "../styles/globals.scss";
import RootProviders from "./RootProviders";

export const metadata = METADATA;

export const viewport = {
  themeColor: "#012260",
  viewport:
    "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no",
};

export default function RootLayout({ children }) {
  return (
    <RootProviders>
      {children}
      <PWAInit />
    </RootProviders>
  );
}
