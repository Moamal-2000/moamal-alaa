import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import FixedEmail from "@/components/Shared/FixedEmail/FixedEmail";
import FixedSocialMedia from "@/components/Shared/FixedSocialMedia/FixedSocialMedia";
import GlobalOverlay from "@/components/Shared/GlobalOverlay/GlobalOverlay";
import "../styles/globals.scss";
import RootLayer from "./RootLayer";
import RootProviders from "./RootProviders";

export const metadata = {
  title: "Moamal Alaa",
  description:
    "Moamal Alaa – Front-End Developer specializing in modern, responsive websites using React or Next.js. Passionate about clean UI, performance, and user-friendly design. Let's create something great together!",
};

export default function RootLayout({ children }) {
  return (
    <RootProviders>
      <html lang="en">
        <body>
          <RootLayer>
            <Header />
            <FixedSocialMedia />
            <FixedEmail />
            {children}
            <GlobalOverlay />
            <Footer />
          </RootLayer>
        </body>
      </html>
    </RootProviders>
  );
}
