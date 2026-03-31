"use client";

import { IS_PRODUCTION } from "@/data/constants";
import { refreshPage } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";
import s from "./UpdateNotification.module.scss";

export default function UpdateNotification() {
  const [showNotification, setShowNotification] = useState(false);

  const buttonRef = useRef(null);

  useEffect(() => {
    registerSWWithUpdate(setShowNotification);
  }, []);

  useEffect(() => {
    if (showNotification) buttonRef.current.focus();
  }, [showNotification]);

  function handleRefreshPage() {
    if (navigator.serviceWorker.controller) {
      navigator.serviceWorker.controller.postMessage({ action: "skipWaiting" });
    }
    refreshPage();
  }

  return (
    <div
      className={`${s.notification} ${showNotification ? s.show : ""}`}
      role="status"
      aria-live="polite"
      aria-atomic="true"
    >
      <p className={s.message}>A new version is available!</p>
      <button
        className={s.refreshButton}
        type="button"
        onClick={handleRefreshPage}
        aria-label="Refresh - reload the page to get the latest version"
        ref={buttonRef}
      >
        Refresh
      </button>
    </div>
  );
}
async function registerSWWithUpdate(setShowNotification) {
  if (!("serviceWorker" in navigator) || !IS_PRODUCTION) return;

  try {
    const registration = await navigator.serviceWorker.register("/sw.js");

    if (registration.waiting) setShowNotification(true);

    registration.addEventListener("updatefound", () =>
      handleUpdateFound(registration, setShowNotification),
    );
  } catch (err) {
    console.error(`Error registering service worker: ${err}`);
  }
}

function handleUpdateFound(registration, setShowNotification) {
  const newWorker = registration.installing;
  if (!newWorker) return;

  newWorker.addEventListener("statechange", () => {
    const updateRequired =
      newWorker.state === "installed" && navigator.serviceWorker.controller;

    if (updateRequired) {
      setShowNotification(true);
    }
  });
}
