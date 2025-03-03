import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";

const mainVariants = { hidden: { opacity: 0, y: 75 }, visible: { opacity: 1, y: 0 } };
const mainTransition = { duration: 0.5, delay: 0.25 };

const slideVariants = { hidden: { left: 0 }, visible: { left: "100%" } };
const slideTransition = { duration: 0.5, ease: "easeIn" };

const ContentRevealSuper = ({ width = "fit-content", children }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();
  const slideControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
      slideControls.start("visible");
    }
  }, [isInView]);

  return (
    <div ref={ref} style={{ position: "relative", width, overflow: "hidden", height: "fit-content" }}>
      <motion.div variants={mainVariants} initial="hidden" animate={mainControls} transition={mainTransition}>
        {children}
      </motion.div>
      <motion.div variants={slideVariants} animate={slideControls} transition={slideTransition} style={{ position: "absolute", top: 4, bottom: 4, left: 0, right: 0, background: "#ff2e63", zIndex: 20 }}></motion.div>
    </div>
  );
};

export default ContentRevealSuper;
