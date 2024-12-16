export const defaultTransition = {
    type: "spring",
    stiffness: 260,
    damping: 20,
  };
  
  export const staggerChildren = {
    staggerChildren: 0.1,
  };
  
  export const delayedTransition = (delay: number) => ({
    type: "spring",
    stiffness: 260,
    damping: 20,
    delay,
  });
  
  export const pageTransition = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: {
      duration: 0.3,
    }
  };