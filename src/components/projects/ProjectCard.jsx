import { Link } from "react-router-dom";
import { ProjectActionButton } from "../ui";
import ContentRevealSuper from "../contentReveal/ContentRevealSuper";
import "./ProjectCard.scss";

const ProjectCard = ({ project, variant = "featured" }) => {
  const { slug, title, sub_title, demo_url, source_url } = project;

  return (
    <div className={`project-card ${variant}`}>
      <div className="project-content">
        <Link to={`/projects/${slug}`} className="project-info">
          <div className="project-left">
            <ContentRevealSuper>
              <h2>{title}</h2>
            </ContentRevealSuper>
            <ContentRevealSuper>
              <p>{sub_title}</p>
            </ContentRevealSuper>
          </div>
        </Link>

        <div className="project-actions">
          {demo_url && (
            <ContentRevealSuper>
              <ProjectActionButton 
                href={demo_url} 
                icon="/icons/demo-icon.svg"
                variant="primary"
              >
                DEMO
              </ProjectActionButton>
            </ContentRevealSuper>
          )}
          <ContentRevealSuper>
            <ProjectActionButton 
              href={source_url} 
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

export default ProjectCard; 