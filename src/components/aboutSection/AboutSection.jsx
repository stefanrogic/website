import "./aboutSection.scss";

import { Link, useLocation } from "react-router-dom";

import ContentRevealSuper from "../contentReveal/ContentRevealSuper";

const AboutSection = ({ home = true, scrollTo }) => {
  const location = useLocation();

  const handleScrollTo = (el) => {
    if (el === "featured_projects_section" && location.pathname === "/home") scrollTo(el);
    else if (el === "resume_section" && location.pathname === "/about-me") scrollTo(el);
    else
      setTimeout(() => {
        scrollTo(el);
      }, 500);
  };

  return (
    <section id="about_section">
      {location.pathname === "/home" && (
        <ContentRevealSuper>
          <p>
            Hello, my name is <span className="span-highlight">Stefan</span>. I am a <span className="span-highlight">Web Developer</span> with more than <span className="span-highlight">2 years</span> of hands on experience, specializing in building
            easy-to-use interfaces for websites and web apps while prioritizing smooth user experience and engaging animations.
          </p>
        </ContentRevealSuper>
      )}

      {/* TODO: ADD MORE  */}
      {location.pathname === "/about-me" && (
        <ContentRevealSuper>
          <p>
            Hello, my name is <span className="span-highlight">Stefan</span>. I am a <span className="span-highlight">Web Developer</span> with more than <span className="span-highlight">2 years</span> of hands on experience, specializing in building
            easy-to-use interfaces for websites and web apps while prioritizing smooth user experience and engaging animations.
          </p>
        </ContentRevealSuper>
      )}

      <div className="button-container">
        {home && (
          <ContentRevealSuper>
            <Link className="text-link" to="/about-me">
              <img src="/icons/arrow-up.svg" alt="arrow-up" />
              MORE DETAILS
            </Link>
          </ContentRevealSuper>
        )}

        <ContentRevealSuper>
          <Link className="text-link" to="/home" onClick={() => handleScrollTo("featured_projects_section")}>
            <img src="/icons/arrow-up.svg" alt="arrow-up" />
            PROJECTS
          </Link>
        </ContentRevealSuper>

        <ContentRevealSuper>
          <Link className="text-link" to="/about-me" onClick={() => handleScrollTo("resume_section")}>
            <img src="/icons/arrow-up.svg" alt="arrow-up" />
            RESUME
          </Link>
        </ContentRevealSuper>

        <ContentRevealSuper>
          <Link className="text-link inactive" to="#">
            <img src="/icons/arrow-up-inactive.svg" alt="arrow-up-inactive" />
            SERVICES
          </Link>
        </ContentRevealSuper>
      </div>
    </section>
  );
};

export default AboutSection;
