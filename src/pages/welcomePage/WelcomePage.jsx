import "./welcomePage.scss";

import { useNavigate } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";

const WelcomePage = () => {
  const [redirect, setRedirect] = useState(false);
  const [percent, setPercent] = useState(0);
  const mainControls = useAnimation();
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      if (percent < 100) setPercent(percent + 1);
    }, 30);
  });

  useEffect(() => {
    if (redirect) {
      setTimeout(() => {
        navigate("/home");
      }, 500);
    }
  }, [redirect]);

  return (
    <div className="welcome-page">
      <motion.img
        className="signature"
        src="https://tghpaytxnfphvnnbkghz.supabase.co/storage/v1/object/sign/icons/signature.svg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpY29ucy9zaWduYXR1cmUuc3ZnIiwiaWF0IjoxNzE3NzcyNzQzLCJleHAiOjExMTc4NTcyNzQzfQ.sqD7YFS725w81QIFrs1SG-C10kyLZ9g5s_2LY09Yu1Q&t=2024-06-07T15%3A05%3A44.043Z"
        alt="signature"
        variants={{ firstPhase: { width: "300px" }, secondPhase: { width: "100%", top: "50px" } }}
        initial="firstPhase"
        animate={mainControls}
        transition={{ duration: 0.5 }}
      />

      <motion.div className="button-container" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 4 }}>
        <span
          style={{ cursor: "pointer" }}
          onClick={() => {
            mainControls.start("secondPhase");
            setRedirect(true);
          }}
        >
          ENTER
        </span>
      </motion.div>

      <motion.div className="loading-line" initial={{ display: "flex" }} animate={{ display: "none", transitionEnd: { display: "none" } }} transition={{ duration: 1, delay: 4 }}>
        <motion.div initial={{ width: 0 }} animate={{ width: "100%" }} transition={{ duration: 3 }} style={{ height: "2px", background: "#ff2e63" }}></motion.div>

        <h2>{percent}%</h2>
      </motion.div>

      <p>Work in progress</p>
    </div>
  );
};

export default WelcomePage;
