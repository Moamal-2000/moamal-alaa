"use client";

import { useEffect, useState } from "react";

const InstallPWAButton = () => {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    function handleBeforeInstallPrompt(event) {
      event.preventDefault();
      setDeferredPrompt(event);
      setShowButton(true);
    }

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener(
        "beforeinstallprompt",
        handleBeforeInstallPrompt
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
    <button type="button" onClick={handleInstallClick}>
      Install
    </button>
  );
};

export default InstallPWAButton;
