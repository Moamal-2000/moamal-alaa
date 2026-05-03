export const isServer = typeof window === "undefined";

export function isMobile() {
  if (typeof navigator === "undefined") {
    return;
  }

  const mobilesType = /Mobi|Android|iPhone|iPad|iPod/i;
  return mobilesType.test(navigator.userAgent);
}

export function checkMediaQuery(MaxWidth) {
  if (isServer) {
    return;
  }

  return window.matchMedia(`(max-width: ${MaxWidth}px)`).matches;
}

export function refreshPage() {
  window.location.reload();
}

export async function lockPortraitOrientation() {
  const isSupported = screen.orientation?.lock instanceof Function;
  const isMobiOrAndroid = /Mobi|Android/i.test(navigator.userAgent);
  const canLockOrientation = typeof window !== "undefined" && isSupported;

  if (!canLockOrientation || !isMobiOrAndroid) {
    return;
  }

  try {
    screen.orientation.lock("portrait");
  } catch (err) {
    console.warn("Orientation lock failed:", err.message);
  }
}

export function capitalizeFirstLetter(str) {
  str = str.toLowerCase();
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function isSmallScreen() {
  if (isServer) {
    return false;
  }
  return matchMedia("(max-width: 768px)").matches;
}

export function scrollToTop() {
  if (isServer) {
    return;
  }
  window.scrollTo({ top: 0, behavior: "smooth" });
}
