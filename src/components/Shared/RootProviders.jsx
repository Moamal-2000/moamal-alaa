import { personJsonLd } from "@/data/jsonLd";
import Body from "./Body";

const RootProviders = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <link rel="preconnect" href="https://api.github.com" />
      </head>
      <Body>{children}</Body>
    </html>
  );
};

export default RootProviders;
