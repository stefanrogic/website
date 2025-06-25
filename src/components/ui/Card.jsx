import ContentRevealSuper from "../contentReveal/ContentRevealSuper";
import "./Card.scss";

const Card = ({ 
  title, 
  subtitle, 
  rightContent, 
  actions, 
  variant = "default",
  className = "",
  children,
  ...props 
}) => {
  const cardContent = (
    <div className={`ui-card ${variant} ${className}`} {...props}>
      <div className="card-left">
        {title && (
          typeof title === 'string' ? <h2>{title}</h2> : <h2>{title}</h2>
        )}
        {subtitle && <p>{subtitle}</p>}
        {children}
      </div>
      {(rightContent || actions) && (
        <div className="card-right-block">
          {rightContent && (
            <div className="card-right">
              {rightContent}
            </div>
          )}
          {actions && (
            <div className="card-actions">
              {actions}
            </div>
          )}
        </div>
      )}
    </div>
  );

  return (
    <ContentRevealSuper width="100%">
      {cardContent}
    </ContentRevealSuper>
  );
};

export default Card; 