import "./featuredProjectCard.scss";

import toast from "react-hot-toast";

import { Link } from "react-router-dom";
import ContentRevealSuper from "../contentReveal/ContentRevealSuper";
import { ProjectActionButton } from "../ui";

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
              <ProjectActionButton 
                href={projectData?.demo_url} 
                icon="/icons/demo-icon.svg"
                variant="primary"
                onClick={() => projectData.demo_url === null && toast.error("Work in progress.")}
              >
                DEMO
              </ProjectActionButton>
            </ContentRevealSuper>
          )}
          <ContentRevealSuper>
            <ProjectActionButton 
              href={projectData?.source_url} 
              icon="/icons/github-icon.svg"
              variant="primary"
            >
              CODE
            </ProjectActionButton>
          </ContentRevealSuper>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProjectCard;
