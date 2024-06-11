import "./welcomePage.scss";

import { useNavigate } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";

const WelcomePage = () => {
  const [redirect, setRedirect] = useState(false);
  const mainControls = useAnimation();
  const navigate = useNavigate();

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

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 1 }}>
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

      <p>Work in progress</p>
    </div>
  );
};

export default WelcomePage;
