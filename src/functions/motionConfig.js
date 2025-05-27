import { NAV_LINKS } from "@/data/staticData";

export function heroMotionConfig() {
  const initial = { opacity: 0, y: 30 };
  const animate = { opacity: 1, y: 0 };

  function getStaggeredTransition(addBy = 0.1) {
    let addedDelay = 0;

    return () => {
      const baseDelay = NAV_LINKS.length * 0.1;
      const currentDelay = baseDelay + addedDelay;
      addedDelay += addBy;

      return {
        duration: 0.5,
        delay: currentDelay + addBy,
      };
    };
  }

  const transition = getStaggeredTransition(0.15);

  return {
    initial,
    animate,
    transition,
  };
}

export function fixedItemsMotionProps() {
  return {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.2, delay: 2.5 },
  };
}

export function navLinkMotionProps(index) {
  return {
    initial: { opacity: 0, y: -40 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.4, delay: index * 0.1 },
  };
}

export function fadeInOnViewMotionProps({
  visibilityThreshold = 0.7,
  duration = 0.3,
  initialY = 30,
  delay = 0,
}) {
  return {
    initial: { opacity: 0, y: initialY },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration, delay },
    viewport: { once: true, amount: visibilityThreshold },
  };
}
