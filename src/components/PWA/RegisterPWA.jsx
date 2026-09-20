"use client";

import { useEffect } from "react";

const RegisterPWA = () => {
  useEffect(() => {
    registerServiceWorker();
  }, []);
};
export default RegisterPWA;

async function registerServiceWorker() {
  if (!("serviceWorker" in navigator)) {
    return;
  }

  try {
    const registration = await navigator.serviceWorker.register("/sw.js");
    await registration.update();
  } catch (error) {
    console.error("Error registering service worker:", error);
  }
}
