import { Link as RouterLink } from "react-router-dom";
import { motion } from "framer-motion";
import "./Link.scss";

const Link = ({ 
  to, 
  href,
  children, 
  icon, 
  variant = "text", 
  onClick, 
  className = "",
  noZoom = false,
  ...props 
}) => {
  const linkContent = (
    <>
      {icon && <img src={icon} alt="" />}
      {children}
    </>
  );

  // Handle external links (with href)
  if (href) {
    if (noZoom) {
      return (
        <a
          href={href}
          className={`ui-link ${variant} ${className}`}
          onClick={onClick}
          {...props}
        >
          {linkContent}
        </a>
      );
    }

    return (
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <a
          href={href}
          className={`ui-link ${variant} ${className}`}
          onClick={onClick}
          {...props}
        >
          {linkContent}
        </a>
      </motion.div>
    );
  }

  // Handle internal navigation (with to)
  if (noZoom) {
    return (
      <RouterLink
        to={to}
        className={`ui-link ${variant} ${className}`}
        onClick={onClick}
        {...props}
      >
        {linkContent}
      </RouterLink>
    );
  }

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <RouterLink
        to={to}
        className={`ui-link ${variant} ${className}`}
        onClick={onClick}
        {...props}
      >
        {linkContent}
      </RouterLink>
    </motion.div>
  );
};

export default Link; 