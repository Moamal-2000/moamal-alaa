import { IS_SERVER } from "@/constants/constants";

const mobilesType = /Mobi|Android|iPhone|iPad|iPod/i;

export function isMobile() {
  if (typeof navigator === "undefined") {
    return;
  }

  return mobilesType.test(navigator.userAgent);
}

export function checkMediaQuery(MaxWidth) {
  if (IS_SERVER) {
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
  if (IS_SERVER) {
    return false;
  }
  return matchMedia("(max-width: 768px)").matches;
}

export function scrollToTop() {
  if (IS_SERVER) {
    return;
  }
  window.scrollTo({ top: 0, behavior: "smooth" });
}

export const getNextTabIndex = (index, length) =>
  index === length - 1 ? 0 : index + 1;

export const getPrevTabIndex = (index, length) =>
  index === 0 ? length - 1 : index - 1;
