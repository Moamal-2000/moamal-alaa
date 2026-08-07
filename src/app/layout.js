import Body from "@/components/Shared/Body";
import { IS_PRODUCTION } from "@/data/constants";
import { personJsonLd } from "@/data/jsonLd";
import { METADATA } from "@/data/metadata";
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
          <link rel="preconnect" href="https://api.github.com" />
          <link rel="dns-prefetch" href="https://api.github.com" />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
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
