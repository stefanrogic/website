import "./headingLine.scss";

import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";

const HeadingLine = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  return (
    <motion.div
      ref={ref}
      className="heading-line"
      variants={{ hidden: { flex: 0, background: "#ff2e63" }, visible: { flex: 1, background: "#eaeaea" } }}
      initial="hidden"
      animate={mainControls}
      transition={{ duration: 0.5, delay: 0.25 }}
    ></motion.div>
  );
};

export default HeadingLine;
