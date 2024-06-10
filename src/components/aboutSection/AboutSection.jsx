import "./aboutSection.scss";

import { Link, useLocation } from "react-router-dom";

import ContentReveal from "../contentReveal/ContentReveal";

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
        <ContentReveal delay={1}>
          <p>
            Hello, my name is <span>Stefan</span>. <span>Frontend Developer</span> with <span>2+ years</span> of hands on experience. I specialize in designing easy-to-use interfaces for websites and web apps, prioritizing smooth user experience and
            engaging animations.
          </p>
        </ContentReveal>
      )}

      {/* TODO: ADD MORE  */}
      {location.pathname === "/about-me" && (
        <ContentReveal delay={1.2}>
          <p>
            Hello, my name is <span>Stefan</span>. <span>Frontend Developer</span> with <span>2+ years</span> of hands on experience. I specialize in designing easy-to-use interfaces for websites and web apps, prioritizing smooth user experience and
            engaging animations.
          </p>
        </ContentReveal>
      )}

      <div className="button-container">
        {home && (
          <ContentReveal delay={1.4}>
            <Link className="text-link" to="/about-me">
              <img
                src="https://tghpaytxnfphvnnbkghz.supabase.co/storage/v1/object/sign/icons/arrow-up.svg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpY29ucy9hcnJvdy11cC5zdmciLCJpYXQiOjE3MTc3NjQyOTgsImV4cCI6NDg3MTM2NDI5OH0.et4eJzEsyGb6veyt3OCzKpA3IHApk8urogAWHT9JBJY&t=2024-06-07T12%3A44%3A58.573Z"
                alt="arrow-up"
              />
              MORE DETAILS
            </Link>
          </ContentReveal>
        )}

        <ContentReveal delay={1.6}>
          <Link className="text-link" to="/home" onClick={() => handleScrollTo("featured_projects_section")}>
            <img
              src="https://tghpaytxnfphvnnbkghz.supabase.co/storage/v1/object/sign/icons/arrow-up.svg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpY29ucy9hcnJvdy11cC5zdmciLCJpYXQiOjE3MTc3NjQyOTgsImV4cCI6NDg3MTM2NDI5OH0.et4eJzEsyGb6veyt3OCzKpA3IHApk8urogAWHT9JBJY&t=2024-06-07T12%3A44%3A58.573Z"
              alt="arrow-up"
            />
            PROJECTS
          </Link>
        </ContentReveal>

        <ContentReveal delay={1.6}>
          <Link className="text-link" to="/about-me" onClick={() => handleScrollTo("resume_section")}>
            <img
              src="https://tghpaytxnfphvnnbkghz.supabase.co/storage/v1/object/sign/icons/arrow-up.svg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpY29ucy9hcnJvdy11cC5zdmciLCJpYXQiOjE3MTc3NjQyOTgsImV4cCI6NDg3MTM2NDI5OH0.et4eJzEsyGb6veyt3OCzKpA3IHApk8urogAWHT9JBJY&t=2024-06-07T12%3A44%3A58.573Z"
              alt="arrow-up"
            />
            RESUME
          </Link>
        </ContentReveal>

        <ContentReveal delay={1.8}>
          <Link className="text-link inactive" to="#">
            <img
              src="https://tghpaytxnfphvnnbkghz.supabase.co/storage/v1/object/sign/icons/arrow-up-inactive.svg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpY29ucy9hcnJvdy11cC1pbmFjdGl2ZS5zdmciLCJpYXQiOjE3MTc3NjQzMzksImV4cCI6NDg3MTM2NDMzOX0.jrqWCKLKm4Ul60yYSzucUgZoho3mtsE98Vu7N2gBODY&t=2024-06-07T12%3A45%3A39.208Z"
              alt="arrow-up-inactive"
            />
            SERVICES
          </Link>
        </ContentReveal>
      </div>
    </section>
  );
};

export default AboutSection;
