export const slideVertical = (
  y: string | number,
  duration: number = 0.75,
  hide?: object,
  active?: object
) => {
  return {
    hide: {
      y,
      opacity: 0,
      ...hide,
    },
    active: {
      y: 0,
      opacity: 1,
      ...active,
      transition: { type: "tween", ease: "easeInOut", duration },
    },
  };
};

export const slideHorizontal = (x: string | number) => {
  return {
    hide: {
      x,
      opacity: 0,
    },
    active: {
      x: 0,
      opacity: 1,
      transition: { type: "tween", ease: "easeInOut", duration: 0.75 },
    },
  };
};

export const staggerContainer = (
  staggerChildren: number,
  delayChildren: number = 0
) => {
  return {
    hide: {},
    active: {
      transition: {
        staggerChildren,
        delayChildren,
      },
    },
  };
};

export const rotation = (rotate: number) => {
  return {
    hide: {
      rotate,
      opacity: 0,
    },
    active: {
      rotate: 0,
      opacity: 1,
      transition: { type: "spring", delay: 0.6, duration: 0.75 },
    },
  };
};
