export function fadeInOnViewMotionProps({
  visibilityThreshold = 0.7,
  duration = 0.3,
  initialY = 30,
  delay = 0,
} = {}) {
  return {
    initial: { opacity: 0, y: initialY, filter: "blur(2px)" },
    whileInView: { opacity: 1, y: 0, filter: "blur(0)" },
    transition: { duration, delay },
    viewport: { once: true, amount: visibilityThreshold },
  };
}
