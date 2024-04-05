import "./featuredProjectsSection.scss";

import FeaturedProjectCard from "../featuredProjectCard/FeaturedProjectCard";
import { Fragment } from "react";
import { Link } from "react-router-dom";

const FeaturedProjectsSection = ({ getUrl }) => {
  const featuredProjects = [
    { heading: "Bioskop Art", tag: "bioskop-art", paragraph: "Cinema Website", demoLink: "#", codeLink: "https://github.com/stefanrogic/bioskop-art" },
    { heading: "Tera Supplements", tag: "tera-supplements", paragraph: "Supplement Web Store", demoLink: "https://tera-supplements.netlify.app/", codeLink: "https://github.com/stefanrogic/tera-supplements" },
    { heading: "Hello World Rework", tag: "hello-world-rework", paragraph: "Online Job Board", demoLink: "https://dev-jobs-listings.netlify.app", codeLink: "https://github.com/stefanrogic/dev-jobs" },
    { heading: "My Portfolio", tag: "my-portfolio", paragraph: "Portfolio Website", demoLink: "#", codeLink: "https://github.com/stefanrogic/webdev-portfolio" },
    { heading: "Virtual Fitness Studio", tag: "virtual-fitness-studio", paragraph: "Landing Page", demoLink: "#", codeLink: "https://github.com/stefanrogic/virtual-fitness-studio" },
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

      <Link className="text-link inactive" to="#">
        <img src={getUrl("icons/arrow-up-inactive.svg")} alt="arrow-up" />
        ALL PROJECTS
      </Link>
    </section>
  );
};

export default FeaturedProjectsSection;
