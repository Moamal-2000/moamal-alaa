"use client";

import { lockPortraitOrientation } from "@/lib/utils";
import { motion } from "motion/react";
import { useEffect, useState } from "react";

const InstallPWAButton = ({ className, motionProps = {} }) => {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [showButton, setShowButton] = useState(false);

  const title = "Install the app to your device";

  useEffect(() => {
    function handleBeforeInstallPrompt(event) {
      event.preventDefault();
      setDeferredPrompt(event);
      setShowButton(true);
    }

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

    // Lock the screen orientation to portrait ( fallback )
    lockPortraitOrientation();

    return () => {
      window.removeEventListener(
        "beforeinstallprompt",
        handleBeforeInstallPrompt,
      );
    };
  }, []);

  async function handleInstallClick() {
    if (!deferredPrompt) {
      return;
    }
    deferredPrompt.prompt();

    const { outcome } = await deferredPrompt.userChoice;
    const isAccepted = outcome === "accepted";
    console.log(isAccepted ? "PWA setup accepted" : "PWA setup dismissed");

    setDeferredPrompt(null);
    setShowButton(!isAccepted);
  }

  if (!showButton) {
    return null;
  }

  return (
    <motion.button
      type="button"
      className={className}
      onClick={handleInstallClick}
      title={title}
      aria-label={title}
      {...motionProps}
    >
      Install
    </motion.button>
  );
};

export default InstallPWAButton;
