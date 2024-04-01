import "./featuredProjectsSection.scss";

import FeaturedProjectCard from "../featuredProjectCard/FeaturedProjectCard";
import { Fragment } from "react";

const FeaturedProjectsSection = ({ getUrl }) => {
  const featuredProjects = [
    { heading: "Bioskop Art", paragraph: "Cinema Website", demoLink: "#", codeLink: "#" },
    { heading: "Tera Supplements", paragraph: "Supplement Web Store", demoLink: "#", codeLink: "#" },
    { heading: "Hello World Rework", paragraph: "Online Job Board", demoLink: "#", codeLink: "#" },
    { heading: "My Portfolio", paragraph: "Portfolio Website", demoLink: "#", codeLink: "#" },
    { heading: "Virtual Fitness Studio", paragraph: "Landing Page", demoLink: "#", codeLink: "#" },
  ];

  return (
    <section id="featured_projects_section">
      <div className="heading-container">
        <h1>FEATURED PROJECTS</h1>
        <div className="heading-line"></div>
      </div>

      <div className="projects-container">
        {featuredProjects.map((project, i) => (
          <Fragment key={project + i}>
            <FeaturedProjectCard getUrl={getUrl} projectData={project} />
            {i + 1 !== featuredProjects.length && <div className="line-seperator"></div>}
          </Fragment>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProjectsSection;
