export function slideInFromLeft(delay: number) {
  return {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        delay: delay,
        duration: 0.5,
      },
    },
  };
}

export const slideInFromRight = (delay = 0) => ({
  hidden: { opacity: 0, x: 100 }, // Use transform and opacity changes
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      delay,
      duration: 0.5,
      ease: "easeInOut",
    },
  },
});

export const slideInFromTop = (delay: number) => ({
  hidden: { y: -100, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      delay,
      duration: 0.5,
    },
  },
});

export const slideInFromBottom = (delay: number) => ({
  hidden: { y: 300, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      delay,
      duration: 0.5,
    },
  },
});

export function fadeIn(delay: number) {
  return {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: delay,
        duration: 0.5,
      },
    },
  };
}

export function spin(duration: number) {
  return {
    animate: {
      rotate: [0, 90, 180, 270, 360],
      transition: {
        duration: duration,
        ease: "linear",
        yoyo: Infinity,
      },
    },
  };
}