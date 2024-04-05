import "./navbar.scss";

import { NavLink, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const Navbar = ({ getUrl, scrollTo }) => {
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
          <img className="signature" src={getUrl("icons/signature.svg")} alt="signature" />
        </NavLink>

        <NavLink to="/home">
          <div className="img-container">
            <motion.img src={getUrl("icons/frontend-developer.svg")} alt="frontend-developer" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7 }} />
          </div>
        </NavLink>

        <motion.img className="theme-icon" src={getUrl("icons/moon-icon.svg")} alt="theme-icon" onClick={() => console.log("change-theme")} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 1 }} />
      </div>

      <motion.nav initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7 }}>
        <div>
          <NavLink to="/about-me" className={({ isActive }) => (isActive ? "underline" : "")}>
            ABOUT ME
          </NavLink>
          <NavLink to="/home" onClick={() => handleScrollTo("featured_projects_section")}>
            PROJECTS
          </NavLink>
          <NavLink to="/home" onClick={() => handleScrollTo("contact_section")}>
            CONTACT
          </NavLink>
        </div>

        <div className="socials-container">
          <a href="https://www.linkedin.com/in/stefanrogic/" target="_blank">
            <img src={getUrl("icons/linkedin-icon.svg")} alt="frontend-developer" />
          </a>
          <a href="https://github.com/stefanrogic" target="_blank">
            <img src={getUrl("icons/github-icon.svg")} alt="frontend-developer" />
          </a>
        </div>
      </motion.nav>
    </header>
  );
};

export default Navbar;
