import "./navbar.scss";

import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { ROUTES, SECTION_IDS, SOCIAL_LINKS } from "../../constants";

const Navbar = () => {
  return (
    <header id="navbar">
      <div className="header-top">
        <NavLink to={ROUTES.HOME}>
          <img src="/icons/signature.svg" alt="web-developer" />
        </NavLink>

        <NavLink to={ROUTES.HOME}>
          <div className="img-container">
            <motion.img 
              src="/icons/web-developer.svg" 
              alt="web-developer" 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              transition={{ duration: 1 }} 
            />
          </div>
        </NavLink>

        <NavLink to={ROUTES.WELCOME} className="moon-link">
          <motion.div whileHover={{ scale: 1.5 }} whileTap={{ scale: 0.9 }}>
            <motion.img 
              className="theme-icon" 
              src="/icons/moon-icon.svg" 
              alt="theme-icon" 
              initial={{ scale: 0 }} 
              animate={{ scale: 1 }} 
              transition={{ duration: 0.2, delay: 1 }} 
            />
          </motion.div>
        </NavLink>
      </div>

      <motion.nav 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 1, delay: 0.5 }}
      >
        <div>
          <NavLink 
            to={ROUTES.ABOUT} 
            className="nav-link"
          >
            ABOUT
          </NavLink>
          <NavLink 
            to={`${ROUTES.HOME}#${SECTION_IDS.FEATURED_PROJECTS}`}
            className="nav-link"
          >
            PROJECTS
          </NavLink>
          <NavLink 
            to={`${ROUTES.HOME}#${SECTION_IDS.CONTACT}`}
            className="nav-link"
          >
            CONTACT
          </NavLink>
        </div>

        <div className="socials-container">
          <a href={SOCIAL_LINKS.LINKEDIN} target="_blank" rel="noopener noreferrer">
            <img src="/icons/linkedin-icon.svg" alt="linkedin-icon" />
          </a>
          <a href={SOCIAL_LINKS.GITHUB} target="_blank" rel="noopener noreferrer">
            <img src="/icons/github-icon.svg" alt="github-icon" />
          </a>
        </div>
      </motion.nav>
    </header>
  );
};

export default Navbar;
