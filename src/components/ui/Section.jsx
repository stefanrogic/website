import ContentRevealSuper from "../contentReveal/ContentRevealSuper";
import HeadingLine from "../headingLine/HeadingLine";
import "./Section.scss";

const Section = ({ 
  id, 
  title, 
  children, 
  className = "", 
  headingVariant = "default",
  showHeading = true 
}) => {
  return (
    <section id={id} className={`ui-section ${className}`}>
      {showHeading && title && (
        <div className={`heading-container ${headingVariant}`}>
          <ContentRevealSuper>
            <h1>{title}</h1>
          </ContentRevealSuper>
          <HeadingLine />
        </div>
      )}
      {children}
    </section>
  );
};

export default Section; 