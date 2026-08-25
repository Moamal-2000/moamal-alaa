export const BASE_URL = process.env.BASE_URL;

const SITE_TITLE = "Moamal Alaa | Front-End Developer";
const SITE_DESCRIPTION =
  "Moamal Alaa - Front-End Engineer specializing in high-performance, accessible (WCAG), and responsive web applications using React, Next.js, and modern CSS architecture.";

const KEYWORDS = [
  // Personal Brand
  "Moamal Alaa",
  "Moamal Alaa CV",
  "Moamal Alaa Resume",
  "Moamal Alaa Portfolio",
  "مؤمل علاء",

  // Core Roles
  "Front-End Developer",
  "React Developer",
  "Next.js Developer",
  "Freelance Front-End Developer",
  "Frontend Engineer",

  // Specializations & Performance
  "PWA Developer",
  "Web Performance Optimization",
  "Core Web Vitals Specialist",
  "WCAG Accessibility Developer",
  "SCSS Modules",
  "Zustand",
  "Redux Toolkit",

  // Location & Market
  "Web Developer Iraq",
  "Front End Developer Baghdad",
  "Front End Developer Middle East",
  "مطور واجهات امامية",
  "مطور رياكت",

  // Intent & Services
  "Hire React Developer",
  "Hire NextJS Developer",
  "React developer portfolio",
  "Responsive Web Design",
];

const GLOBAL_METADATA = {
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  keywords: KEYWORDS,
  metadataBase: new URL(BASE_URL),
  alternates: { canonical: "/" },
};

const PWA_METADATA = {
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Moamal Alaa",
  },
  formatDetection: { telephone: false },
  icons: {
    // icon: [
    //   {
    //     url: "/PWA/icons/favicon-16x16.png",
    //     sizes: "16x16",
    //     type: "image/png",
    //   },
    //   {
    //     url: "/PWA/icons/favicon-32x32.png",
    //     sizes: "32x32",
    //     type: "image/png",
    //   },
    // ],
    // apple: [
    //   {
    //     url: "/PWA/icons/apple-touch-icon.png",
    //     sizes: "192x192",
    //     type: "image/png",
    //   },
    // ],
  },
};

export function getOpenGraphMetadata(pagePath = "") {
  const url = pagePath ? `${BASE_URL}/${pagePath}` : BASE_URL;

  return {
    openGraph: {
      title: SITE_TITLE,
      description: SITE_DESCRIPTION,
      url,
      type: "website",
      locale: "en_US",
      siteName: "Moamal Alaa Portfolio",
      authors: ["Moamal Alaa"],
      images: [
        {
          url: `${BASE_URL}/og-image.webp`,
          type: "image/webp",
          alt: "Moamal Alaa Front-End Engineer Portfolio OG Image",
          width: 1200,
          height: 634,
        },
      ],
    },
  };
}

export const METADATA = {
  ...GLOBAL_METADATA,
  ...PWA_METADATA,
  icons: [
    {
      rel: "icon",
      type: "image/x-icon",
      url: "/images/favicon/favicon.ico",
      sizes: "any",
    },
    {
      rel: "icon",
      type: "image/png",
      url: "/images/favicon/64x64.png",
      sizes: "64x64",
    },
  ],
  apple: [
    {
      url: "/images/favicon/180x180.png",
      sizes: "180x180",
      type: "image/png",
    },
  ],
};
