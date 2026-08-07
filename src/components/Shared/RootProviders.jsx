import { personJsonLd } from "@/data/jsonLd";
import Body from "./Body";

const RootProviders = ({ children }) => {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />

        <link rel="preconnect" href="https://api.github.com" />
        <link rel="dns-prefetch" href="https://api.github.com" />
        <link rel="canonical" href="https://www.moamalalaa.com" />
      </head>
      <Body>{children}</Body>
    </html>
  );
};

export default RootProviders;
