import "./projectsPage.scss";

const ProjectsPage = () => {
  return (
    <div className="projects" id="projects">
      <div className="header-container">
        <h2>FEATURED PROJECTS</h2>
        {/* <div className="header-line"></div> */}
      </div>
      <div className="project-card">
        <div className="project-img-container"></div>
        <h4>Project 1</h4>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi voluptates excepturi ut magnam vitae tempore eligendi praesentium, ipsam facere sequi, quam minima repellendus porro error.</p>
      </div>
    </div>
  );
};

export default ProjectsPage;
