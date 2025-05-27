import { NAV_LINKS } from "@/data/staticData";

export function getHeroMotionConfig() {
  const initial = { opacity: 0, y: 20 };
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

  const transition = getStaggeredTransition(0.1);

  return {
    initial,
    animate,
    transition,
  };
}

export function fixedItemsMotionProps() {
  return {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.2, delay: 2 },
  };
}
