import "./pageNavigation.scss";

import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const PageNavigation = ({ position, backLink, getUrl }) => {
  return (
    <motion.div className="page-navigation" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7, delay: 0.5 }}>
      <Link className="text-link" to={backLink}>
        <img src={getUrl("icons/arrow-back.svg")} alt="arrow-back" />
        GO BACK
      </Link>
      <span>{position}</span>
    </motion.div>
  );
};

export default PageNavigation;
