import "./navbar.scss";

import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const Navbar = ({ getUrl }) => {
  return (
    <header id="navbar">
      <div className="header-top">
        <NavLink to="/home">
          <img className="signature" src={getUrl("icons/signature.svg")} alt="signature" />
        </NavLink>

        <NavLink to="/home">
          {/* <div className="img-container" onMouseEnter={() => setHoverHome(true)} onMouseLeave={() => setHoverHome(false)}>
            {hoverHome ? <img className="home-page" src={getUrl("icons/home-page.svg")} alt="home-page" /> : <img src={getUrl("icons/frontend-developer.svg")} alt="frontend-developer" />}
           </div>*/}
          <div className="img-container">
            <motion.img src={getUrl("icons/frontend-developer.svg")} alt="frontend-developer" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7 }} />
          </div>
        </NavLink>

        <motion.img className="theme-icon" src={getUrl("icons/moon-icon.svg")} alt="theme-icon" onClick={() => console.log("change-theme")} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 1 }} />
      </div>

      <motion.nav initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7 }}>
        <div>
          <NavLink className={({ isActive }) => (isActive ? "underline" : "")} to="/about-me">
            ABOUT ME
          </NavLink>
          <a href="/home#featured_projects_section">PROJECTS</a>
          <a href="/home#contact_section">CONTACT</a>
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
