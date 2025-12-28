export const BASE_URL = process.env.SITE_MAP;
const title = "Moamal Alaa | Front-End Developer";

const keywords = [
  "Moamal Alaa",
  "Moamal Alaa CV",
  "Moamal Alaa Resume",
  "Front-End Developer",
  "React Developer",
  "Next.js Developer",
  "React developer portfolio",
  "Freelance Front-End Developer",
  "Web Developer Iraq",
  "Responsive Web Design",
  "Modern UI",
  "Portfolio",
];

const description =
  "Moamal Alaa - Front-End Developer creating responsive, accessible, and high-performance websites with React & Next.js. Focused on clean UI, SEO, and great user experiences.";

const GLOBAL_METADATA = { title, description, keywords };

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
      title,
      description,
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

export const METADATA = { ...GLOBAL_METADATA, ...PWA_METADATA };
