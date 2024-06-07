import "./welcomePage.scss";

import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const WelcomePage = ({ getUrl }) => {
  return (
    <div className="welcome-page">
      <motion.img className="signature" src={getUrl("icons/signature.svg")} alt="signature" initial={{ opacity: 0.5 }} animate={{ opacity: 1 }} transition={{ duration: 1, repeat: 3 }} />

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
