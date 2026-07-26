const knowsAbout = [
  // Core Technologies & Frameworks
  "Front-End Engineering",
  "React.js",
  "Next.js",
  "JavaScript (ES6+)",
  "HTML5 & Semantic Markup",
  "CSS3 & Sass/SCSS",

  // Performance & Optimization
  "Web Performance Optimization",
  "Core Web Vitals",
  "Lighthouse Optimization",
  "Lazy Loading & Code Splitting",
  "Data Compression & Serialization (MessagePack, LZ-String)",

  // Architecture, State & Web Standards
  "State Management (Redux Toolkit, Zustand, Recoil)",
  "Web Accessibility (WCAG 2.1 AA / A11y)",
  "Technical SEO",
  "Progressive Web Apps (PWA)",
  "Real-Time Web Applications (Socket.io)",
  "Internationalization (i18n)",
  "Cross-Browser Compatibility",
];

export const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Moamal Alaa",
  alternateName: "مؤمل علاء",
  jobTitle: "Front-End Engineer",
  url: "https://moamal-alaa.vercel.app",
  email: "mailto:moamalalaapro1@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Baghdad",
    addressCountry: "Iraq",
  },
  sameAs: [
    "https://github.com/Moamal-2000",
    "https://www.linkedin.com/in/moamal-alaa",
  ],
  knowsAbout,
  description:
    "Front-End Engineer & Open-Source Contributor obsessed with web performance, clean code, WCAG accessibility, and perfect Lighthouse scores.",
};
