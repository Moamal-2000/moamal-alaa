import Body from "@/components/Shared/Body";
import { IS_PRODUCTION } from "@/constants/constants";
import { PERSON_JSON_LD } from "@/constants/jsonLd";
import { METADATA } from "@/constants/metadata";
import { calibreFont, sfMonoFont } from "@/lib/fonts";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "../styles/globals.scss";

export const metadata = METADATA;
export const viewport = { themeColor: "#012260" };

export default function RootLayout({ children }) {
  return (
    <>
      <html
        lang="en"
        className={`${calibreFont.variable} ${sfMonoFont.variable}`}
        data-scroll-behavior="smooth"
      >
        <head>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(PERSON_JSON_LD),
            }}
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
