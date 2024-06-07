import "./featuredProjectCard.scss";

import { Link } from "react-router-dom";

const FeaturedProjectCard = ({ getUrl, projectData }) => {
  return (
    <div className="featured-project-card">
      <div className="project-content">
        <Link to={`/projects/${projectData?.slug}`} className="project-left">
          <h2>{projectData?.title}</h2>
          <p>{projectData?.sub_title}</p>
        </Link>

        <div className="project-right">
          <a href={projectData?.demo_url} target="_blank">
            <button>
              <img src={getUrl("icons/demo-icon.svg")} alt="demo-icon" />
              DEMO
            </button>
          </a>
          <a href={projectData?.source_url} target="_blank">
            <button>
              <img src={getUrl("icons/github-icon.svg")} alt="github-icon" />
              CODE
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProjectCard;
