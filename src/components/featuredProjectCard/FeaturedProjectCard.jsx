import "./featuredProjectCard.scss";

import toast from "react-hot-toast";

import { Link } from "react-router-dom";
import ContentRevealSuper from "../contentReveal/ContentRevealSuper";

const FeaturedProjectCard = ({ projectData }) => {
  return (
    <div className="featured-project-card">
      <div className="project-content">
        <Link to={`/projects/${projectData?.slug}`}>
          <div className="project-left">
            <ContentRevealSuper>
              <h2>{projectData?.title}</h2>
            </ContentRevealSuper>
            <ContentRevealSuper>
              <p>{projectData?.sub_title}</p>
            </ContentRevealSuper>
          </div>
        </Link>

        <div className="project-right">
          {projectData?.demo_url && (
            <ContentRevealSuper>
              <a href={projectData?.demo_url} target="_blank" onClick={() => projectData.demo_url === null && toast.error("Work in progress.")}>
                <button>
                  <img src="/icons/demo-icon.svg" alt="demo-icon" />
                  DEMO
                </button>
              </a>
            </ContentRevealSuper>
          )}
          <ContentRevealSuper>
            <a href={projectData?.source_url} target="_blank">
              <button style={{ textDecoration: "none" }}>
                <img src="/icons/github-icon.svg" alt="github-icon" />
                CODE
              </button>
            </a>
          </ContentRevealSuper>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProjectCard;
