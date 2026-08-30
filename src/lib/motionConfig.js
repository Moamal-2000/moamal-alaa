export function fadeInOnViewMotionProps({
  visibilityThreshold = 0.7,
  duration = 0.3,
  initialY = 30,
  delay = 0,
} = {}) {
  return {
    initial: { opacity: 0, y: initialY },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration, delay },
    viewport: { once: true, amount: visibilityThreshold },
  };
}
