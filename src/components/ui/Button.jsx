import { motion } from "framer-motion";
import "./Button.scss";

const Button = ({ 
  children, 
  onClick, 
  href, 
  target = "_blank", 
  icon, 
  variant = "primary", 
  disabled = false,
  className = "",
  noZoom = false,
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
    ...props
  };

  if (href) {
    if (noZoom) {
      return (
        <a href={href} target={target} {...buttonProps}>
          {buttonContent}
        </a>
      );
    }
    
    return (
      <motion.a
        href={href}
        target={target}
        whileHover={{ scale: disabled ? 1 : 1.05 }}
        whileTap={{ scale: disabled ? 1 : 0.95 }}
        {...buttonProps}
      >
        {buttonContent}
      </motion.a>
    );
  }

  if (noZoom) {
    return (
      <button
        onClick={onClick}
        {...buttonProps}
      >
        {buttonContent}
      </button>
    );
  }

  return (
    <motion.button
      whileHover={{ scale: disabled ? 1 : 1.05 }}
      whileTap={{ scale: disabled ? 1 : 0.95 }}
      onClick={onClick}
      {...buttonProps}
    >
      {buttonContent}
    </motion.button>
  );
};

export default Button; 