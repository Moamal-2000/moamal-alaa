import Body from "@/components/Shared/Body";
import { IS_PRODUCTION } from "@/constants/constants";
import { PERSON_JSON_LD } from "@/constants/jsonLd";
import { METADATA } from "@/constants/metadata";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
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
      <html lang="en" data-scroll-behavior="smooth">
        <head>
          <link
            rel="preload"
            href="/fonts/Calibre/Calibre-Regular.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href="/fonts/Calibre/Calibre-Semibold.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(PERSON_JSON_LD) }}
          />
        </head>
        <Body>{children}</Body>
      </html>

      {IS_PRODUCTION && (
        <>
          <Analytics />
          <SpeedInsights />
        </>
      )}
    </>
  );
}
