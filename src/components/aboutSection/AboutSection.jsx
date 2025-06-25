import "./aboutSection.scss";

import { Link } from "../ui";
import ContentRevealSuper from "../contentReveal/ContentRevealSuper";
import { useNavigation } from "../../hooks/useNavigation";
import { ROUTES, SECTION_IDS } from "../../constants";

const AboutSection = ({ home = true }) => {
  const { navigateAndScroll, isCurrentPath } = useNavigation();

  const handleNavClick = (path, sectionId) => {
    navigateAndScroll(path, sectionId);
  };

  return (
    <section id="about_section">
      {isCurrentPath(ROUTES.HOME) && (
        <ContentRevealSuper>
          <p>
            Hello, my name is <span className="span-highlight">Stefan</span>, <span className="span-highlight">Software Engineer</span> with more than <span className="span-highlight">2 years</span> of hands on experience with background in System
            Administration, Tech Support and Sales.
          </p>
        </ContentRevealSuper>
      )}

      {isCurrentPath(ROUTES.ABOUT) && (
        <ContentRevealSuper>
          <p>
            <span className="span-highlight">Software Engineer</span> with more than <span className="span-highlight">2 years</span> of hands on experience with background in System Administration, Tech Support and Sales.
          </p>
          <br />
          {/* TODO: ADD MORE  */}
          <p></p>
        </ContentRevealSuper>
      )}

      <div className="button-container">
        {home && (
          <ContentRevealSuper>
            <Link 
              to={ROUTES.ABOUT} 
              icon="/icons/arrow-up.svg"
              variant="text"
              noZoom={true}
            >
              MORE DETAILS
            </Link>
          </ContentRevealSuper>
        )}

        <ContentRevealSuper>
          <Link 
            to={`${ROUTES.HOME}#${SECTION_IDS.FEATURED_PROJECTS}`}
            icon="/icons/arrow-up.svg"
            variant="text"
            noZoom={true}
          >
            PROJECTS
          </Link>
        </ContentRevealSuper>

        <ContentRevealSuper>
          <Link 
            to={`${ROUTES.ABOUT}#${SECTION_IDS.RESUME}`}
            icon="/icons/arrow-up.svg"
            variant="text"
            noZoom={true}
          >
            RESUME
          </Link>
        </ContentRevealSuper>

        <ContentRevealSuper>
          <Link 
            to="#" 
            icon="/icons/arrow-up-inactive.svg"
            variant="inactive"
            className="inactive"
            noZoom={true}
          >
            SERVICES
          </Link>
        </ContentRevealSuper>
      </div>
    </section>
  );
};

export default AboutSection;
