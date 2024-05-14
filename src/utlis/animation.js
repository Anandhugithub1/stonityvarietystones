export const aboutContainer = (aboutChildren, delayChildren) => ({
    hidden: {
      opacity: 0,
    },
    show: {
      transition: {
        aboutChildren,
        delayChildren,
      },
      opacity: 1,
    },
  });

  export const fadeIn = (direction, type, delay, duration) => ({
    hidden: {
      x: direction === 'left' ? 100 : direction === 'right' ? -100 : 0,
      y: direction === 'up' ? 100 : direction === 'down' ? -100 : 0,
      opacity: 0,
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type,
        delay,
        duration,
        ease: 'easeInOut',
      },
    },
  });


 export const linkStyles = {
    position: "relative",
    display: "inline-block",
    overflow: "hidden",
  };
  
 export const borderAnimation = {
    from: {
      left: "-50%",
      right: "100%",
    },
    to: {
      left: "100%",
      right: "-50%",
    },
    loop: Infinity,
    duration: 2,
    ease: "linear",
  };


export const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2
    }
  }
};

export const item = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } }, // Adjust the duration here
};