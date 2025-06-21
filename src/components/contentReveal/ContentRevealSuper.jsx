import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import { ANIMATION_CONFIG } from "../../constants";

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
  }, [isInView, mainControls, slideControls]);

  return (
    <div ref={ref} style={{ position: "relative", width, overflow: "hidden", height: "fit-content" }}>
      <motion.div 
        variants={ANIMATION_CONFIG.mainVariants} 
        initial="hidden" 
        animate={mainControls} 
        transition={ANIMATION_CONFIG.mainTransition}
      >
        {children}
      </motion.div>
      <motion.div 
        variants={ANIMATION_CONFIG.slideVariants} 
        animate={slideControls} 
        transition={ANIMATION_CONFIG.slideTransition} 
        style={{ 
          position: "absolute", 
          top: 4, 
          bottom: 4, 
          left: 0, 
          right: 0, 
          background: "#ff2e63", 
          zIndex: 20 
        }}
      />
    </div>
  );
};

export default ContentRevealSuper;
