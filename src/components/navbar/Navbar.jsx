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
          <img
            className="signature"
            src="https://tghpaytxnfphvnnbkghz.supabase.co/storage/v1/object/sign/icons/signature.svg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpY29ucy9zaWduYXR1cmUuc3ZnIiwiaWF0IjoxNzE3NzY2NDMxLCJleHAiOjQ4NzEzNjY0MzF9.pbXTeO3kjfSn4V-GmnQPsBhtUk9GFgv8GVpTrSe0PqY&t=2024-06-07T13%3A20%3A31.365Z"
            alt="signature"
          />
        </NavLink>

        <NavLink to="/home">
          <div className="img-container">
            <motion.img
              src="https://tghpaytxnfphvnnbkghz.supabase.co/storage/v1/object/sign/icons/frontend-developer.svg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpY29ucy9mcm9udGVuZC1kZXZlbG9wZXIuc3ZnIiwiaWF0IjoxNzE3NzY2NDU5LCJleHAiOjQ4NzEzNjY0NTl9.VgCSPDB89iz-143z4dIAr0Xyp9vwtnOCzlmbAjnEVmI&t=2024-06-07T13%3A20%3A59.671Z"
              alt="frontend-developer"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            />
          </div>
        </NavLink>

        <motion.img
          className="theme-icon"
          src="https://tghpaytxnfphvnnbkghz.supabase.co/storage/v1/object/sign/icons/moon-icon.svg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpY29ucy9tb29uLWljb24uc3ZnIiwiaWF0IjoxNzE3NzY2NDkyLCJleHAiOjQ4NzEzNjY0OTJ9.lA4lDv1o63ZXw6ipvj9U3uYX1I2cq-hQ8jRqcP6qqlg&t=2024-06-07T13%3A21%3A32.548Z"
          alt="theme-icon"
          onClick={() => console.log("change-theme")}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        />
      </div>

      <motion.nav initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.5 }}>
        <div>
          <NavLink to="/about-me" className="not-button">
            ABOUT ME
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
            <img
              src="https://tghpaytxnfphvnnbkghz.supabase.co/storage/v1/object/sign/icons/linkedin-icon.svg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpY29ucy9saW5rZWRpbi1pY29uLnN2ZyIsImlhdCI6MTcxNzc2NTcwMywiZXhwIjo0ODcxMzY1NzAzfQ.KxQql90TRpDamAlsISH2pz6AjSsYZgaV7puB-W-g3M0&t=2024-06-07T13%3A08%3A23.323Z"
              alt="linkedin-icon"
            />
          </a>
          <a href="https://github.com/stefanrogic" target="_blank">
            <img
              src="https://tghpaytxnfphvnnbkghz.supabase.co/storage/v1/object/sign/icons/github-icon.svg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpY29ucy9naXRodWItaWNvbi5zdmciLCJpYXQiOjE3MTc3NjU0ODQsImV4cCI6NDg3MTM2NTQ4NH0.BWztiGfYn7UlFuYNeH9uCfZoMxV-VKfJAHBY0ebdmqo&t=2024-06-07T13%3A04%3A44.840Z"
              alt="github-icon"
            />
          </a>
        </div>
      </motion.nav>
    </header>
  );
};

export default Navbar;
