import "./featuredProjectCard.scss";

const FeaturedProjectCard = ({ getUrl, projectData }) => {
  return (
    <div className="featured-project-card">
      <div className="project-content">
        <a href="#" className="project-left">
          <h2>{projectData.heading}</h2>
          <p>{projectData.paragraph}</p>
        </a>

        <div className="project-right">
          <a href={projectData.demoLink} target="_blank">
            <button>
              <img src={getUrl("icons/demo-icon.svg")} alt="demo-icon" />
              DEMO
            </button>
          </a>
          <a href={projectData.codeLink} target="_blank">
            <button>
              <img src={getUrl("icons/github-icon.svg")} alt="github-icon" />
              CODE
            </button>
          </a>
        </div>
      </div>

      <div className="line-seperator"></div>
    </div>
  );
};

export default FeaturedProjectCard;
