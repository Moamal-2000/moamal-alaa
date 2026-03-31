"use client";

import { lockPortraitOrientation } from "@/lib/utils";
import { useEffect, useState } from "react";

const InstallPWAButton = () => {
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
    if (!deferredPrompt) return;
    deferredPrompt.prompt();

    const { outcome } = await deferredPrompt.userChoice;
    const isAccepted = outcome === "accepted";
    console.log(isAccepted ? "PWA setup accepted" : "PWA setup dismissed");

    setDeferredPrompt(null);
    setShowButton(!isAccepted);
  }

  if (!showButton) return null;

  return (
    <button
      type="button"
      onClick={handleInstallClick}
      title={title}
      aria-label={title}
    >
      Install
    </button>
  );
};

export default InstallPWAButton;
