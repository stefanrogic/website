import { Link } from "react-router-dom";
import { ProjectActionButton, Card } from "../ui";
import "./ProjectCard.scss";

const ProjectCard = ({ project, variant = "featured" }) => {
  const { slug, title, sub_title, demo_url, source_url } = project;

  const actions = (
    <>
      {demo_url && (
        <ProjectActionButton 
          href={demo_url} 
          icon="/icons/demo-icon.svg"
          variant="primary"
        >
          DEMO
        </ProjectActionButton>
      )}
      <ProjectActionButton 
        href={source_url} 
        icon="/icons/github-icon.svg"
        variant="primary"
      >
        CODE
      </ProjectActionButton>
    </>
  );

  return (
    <div className={`project-card ${variant}`}>
      <Card
        title={
          <Link to={`/projects/${slug}`} className="project-link">
            {title}
          </Link>
        }
        subtitle={sub_title}
        actions={actions}
        variant="featured"
        className="project-content"
      />
    </div>
  );
};

export default ProjectCard; 