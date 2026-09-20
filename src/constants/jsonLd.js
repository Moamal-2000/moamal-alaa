import { BASE_URL, SITE_TITLE } from "./metadata";

const KNOWS_ABOUT = [
  "Front-End Engineering",
  "React.js",
  "Next.js",
  "JavaScript (ES6+)",
  "HTML5",
  "Semantic Markup",
  "CSS3",
  "Sass/SCSS",
  "Web Performance Optimization",
  "Core Web Vitals",
  "Lighthouse Optimization",
  "Lazy Loading",
  "Code Splitting",
  "Data Compression",
  "Data Serialization",
  "MessagePack",
  "LZ-String",
  "Redux Toolkit",
  "Zustand",
  "Recoil",
  "Web Accessibility",
  "WCAG 2.1 AA",
  "Technical SEO",
  "Progressive Web Apps",
  "Real-Time Web Applications",
  "Socket.IO",
  "Internationalization",
  "Cross-Browser Compatibility",
];

const DESCRIPTION =
  "Front-End Engineer & Open-Source Contributor focused on web performance, clean code, WCAG accessibility, and Lighthouse optimization.";

const WEBSITE_NAME = "Moamal Alaa";

const WEBSITE_SCHEMA = {
  "@type": "WebSite",
  "@id": `${BASE_URL}/#website`,
  url: BASE_URL,
  name: WEBSITE_NAME,
  description: DESCRIPTION,
  inLanguage: "en",
};

const WEBPAGE_SCHEMA = {
  "@type": "WebPage",
  "@id": `${BASE_URL}/#webpage`,
  url: BASE_URL,
  name: SITE_TITLE,
  isPartOf: { "@id": `${BASE_URL}/#website` },
  about: { "@id": `${BASE_URL}/#identity` },
  inLanguage: "en",
};

const PERSONAL_SCHEMA = {
  "@type": "Person",
  "@id": `${BASE_URL}/#identity`,
  name: WEBSITE_NAME,
  alternateName: "مؤمل علاء",
  jobTitle: "Front-End Engineer",
  url: BASE_URL,
  email: "moamalalaapro1@gmail.com",
  sameAs: [
    "https://github.com/Moamal-2000",
    "https://www.linkedin.com/in/moamal-alaa",
  ],
  knowsAbout: KNOWS_ABOUT,
  description: DESCRIPTION,
};

export const JSON_LD = {
  "@context": "https://schema.org",
  "@graph": [WEBSITE_SCHEMA, WEBPAGE_SCHEMA, PERSONAL_SCHEMA],
};
