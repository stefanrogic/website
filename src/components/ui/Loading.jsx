import { motion } from "framer-motion";
import "./Loading.scss";

const Loading = ({ size = "medium", variant = "spinner" }) => {
  if (variant === "spinner") {
    return (
      <div className={`loading-container ${size}`}>
        <motion.div
          className="spinner"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        />
      </div>
    );
  }

  if (variant === "dots") {
    return (
      <div className={`loading-container ${size}`}>
        <div className="dots">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="dot"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                delay: i * 0.2
              }}
            />
          ))}
        </div>
      </div>
    );
  }

  return null;
};

export default Loading; 