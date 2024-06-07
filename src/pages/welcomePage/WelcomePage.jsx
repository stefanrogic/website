import "./welcomePage.scss";

import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const WelcomePage = () => {
  return (
    <div className="welcome-page">
      <motion.img
        className="signature"
        src="https://tghpaytxnfphvnnbkghz.supabase.co/storage/v1/object/sign/icons/signature.svg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpY29ucy9zaWduYXR1cmUuc3ZnIiwiaWF0IjoxNzE3NzcyNzQzLCJleHAiOjExMTc4NTcyNzQzfQ.sqD7YFS725w81QIFrs1SG-C10kyLZ9g5s_2LY09Yu1Q&t=2024-06-07T15%3A05%3A44.043Z"
        alt="signature"
        initial={{ opacity: 0.5 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, repeat: 3 }}
      />

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 3 }}>
        <NavLink to="/home">
          <span>ENTER</span>
        </NavLink>
      </motion.div>

      <p>Work in progress</p>
    </div>
  );
};

export default WelcomePage;
