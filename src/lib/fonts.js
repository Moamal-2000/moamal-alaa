import localFont from "next/font/local";

export const calibreFont = localFont({
  src: [
    {
      path: "../../public/fonts/Calibre/Calibre-Semibold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/Calibre/Calibre-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Calibre/Calibre-Medium.woff2",
      weight: "500",
      style: "normal",
    },
  ],
  variable: "--font-calibre",
  display: "swap",
  preload: true,
});

export const sfMonoFont = localFont({
  src: [
    {
      path: "../../public/fonts/SFMono/SFMono-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/SFMono/SFMono-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/SFMono/SFMono-Semibold.woff2",
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--font-sf-mono",
  display: "swap",
});
