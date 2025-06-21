import { motion } from "framer-motion";
import "./Button.scss";

const ProjectActionButton = ({ 
  children, 
  href, 
  target = "_blank", 
  icon, 
  variant = "primary", 
  disabled = false,
  className = "",
  ...props 
}) => {
  const buttonContent = (
    <>
      {icon && <img src={icon} alt="" />}
      {children}
    </>
  );

  const buttonProps = {
    className: `ui-button ${variant} ${className}`,
    disabled,
    href,
    target,
    rel: target === "_blank" ? "noopener noreferrer" : undefined,
    role: "button",
    "aria-label": typeof children === "string" ? children : undefined,
    ...props
  };

  return (
    <motion.a
      {...buttonProps}
    >
      {buttonContent}
    </motion.a>
  );
};

export default ProjectActionButton; 