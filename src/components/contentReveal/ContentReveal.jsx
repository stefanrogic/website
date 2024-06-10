import { motion } from "framer-motion";

const ContentReveal = ({ delay, children }) => {
  return (
    <div style={{ position: "relative" }}>
      <motion.div
        className="content-reveal"
        initial={{ height: "100%" }}
        animate={{
          height: 0,
          transitionEnd: {
            display: "none",
          },
        }}
        transition={{ duration: 0.5, delay: delay }}
      ></motion.div>
      {children}
    </div>
  );
};

export default ContentReveal;
