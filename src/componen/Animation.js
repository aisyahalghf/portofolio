import { motion } from "framer-motion";

const Animation = ({ children, top, delay, duration, notEase, start }) => {
  const opacity = notEase ? 1 : 0;
  const startPosition = start ? start : "-100%";

  return (
    <motion.div
      initial={
        top
          ? { opacity: opacity, y: startPosition }
          : { opacity: opacity, x: startPosition }
      }
      animate={top ? { opacity: 1, y: 0 } : { opacity: 1, x: 0 }}
      transition={{
        duration: duration,
        delay: delay,
        ease: [0, 0.71, 0.2, 1.01],
      }}
    >
      {children}
    </motion.div>
  );
};
export default Animation;
