import "../styles/globals.scss";
import RootProviders from "./RootProviders";

export const metadata = {
  title: "Moamal Alaa",
  description:
    "Moamal Alaa – Front-End Developer specializing in modern, responsive websites using React or Next.js. Passionate about clean UI, performance, and user-friendly design. Let's create something great together!",
};

export default function RootLayout({ children }) {
  return <RootProviders>{children}</RootProviders>;
}
