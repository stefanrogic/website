import "./featuredProjectsSection.scss";

import FeaturedProjectCard from "../featuredProjectCard/FeaturedProjectCard";

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
          <FeaturedProjectCard key={project + i} getUrl={getUrl} projectData={project} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedProjectsSection;
