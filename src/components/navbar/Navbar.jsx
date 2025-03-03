import "./navbar.scss";

import { NavLink, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const Navbar = ({ scrollTo }) => {
  const location = useLocation();

  const handleScrollTo = (el) => {
    if (location.pathname === "/home") scrollTo(el);
    else
      setTimeout(() => {
        scrollTo(el);
      }, 500);
  };

  return (
    <header id="navbar">
      <div className="header-top">
        <NavLink to="/home">
          <img src="/icons/signature.svg" alt="web-developer" />
        </NavLink>

        <NavLink to="/home">
          <div className="img-container">
            <motion.img src="/icons/web-developer.svg" alt="web-developer" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} />
          </div>
        </NavLink>

        <NavLink to="/" className="moon-link">
          <motion.div whileHover={{ scale: 1.5 }} whileTap={{ scale: 0.9 }}>
            <motion.img className="theme-icon" src="/icons/moon-icon.svg" alt="theme-icon" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.2, delay: 1 }} />
          </motion.div>
        </NavLink>
      </div>

      <motion.nav initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.5 }}>
        <div>
          <NavLink to="/about-me" className="not-button">
            ABOUT
          </NavLink>
          <NavLink to="/home" className="not-button" onClick={() => handleScrollTo("featured_projects_section")}>
            PROJECTS
          </NavLink>
          <NavLink to="/home" className="not-button" onClick={() => handleScrollTo("contact_section")}>
            CONTACT
          </NavLink>
        </div>

        <div className="socials-container">
          <a href="https://www.linkedin.com/in/stefanrogic/" target="_blank">
            <img src="/icons/linkedin-icon.svg" alt="linkedin-icon" />
          </a>
          <a href="https://github.com/stefanrogic" target="_blank">
            <img src="/icons/github-icon.svg" alt="github-icon" />
          </a>
        </div>
      </motion.nav>
    </header>
  );
};

export default Navbar;
