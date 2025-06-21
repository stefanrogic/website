import ContentRevealSuper from "../contentReveal/ContentRevealSuper";
import HeadingLine from "../headingLine/HeadingLine";
import "./HeadingContainer.scss";

const HeadingContainer = ({ 
  title, 
  variant = "default",
  className = ""
}) => {
  return (
    <div className={`heading-container ${variant} ${className}`}>
      <ContentRevealSuper>
        <h1>{title}</h1>
      </ContentRevealSuper>
      <HeadingLine />
    </div>
  );
};

export default HeadingContainer; 