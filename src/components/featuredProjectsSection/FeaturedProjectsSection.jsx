import "./featuredProjectsSection.scss";

import ProjectCard from "../projects/ProjectCard";
import { Fragment } from "react";
import ContentRevealSuper from "../contentReveal/ContentRevealSuper";
import { HeadingContainer } from "../ui";
import { getFeaturedProjects } from "../../data/projects";
import { SOCIAL_LINKS } from "../../constants";

const FeaturedProjectsSection = () => {
  const projectsData = getFeaturedProjects();

  return (
    <section id="featured_projects_section">
      <HeadingContainer title="FEATURED PROJECTS" />

      <div className="projects-container">
        {projectsData?.map((project, i) => (
          <Fragment key={project.slug + i}>
            <ProjectCard project={project} variant="featured" />

            {i + 1 !== projectsData.length && (
              <ContentRevealSuper>
                <div className="line-seperator"></div>
              </ContentRevealSuper>
            )}
          </Fragment>
        ))}
      </div>

      <ContentRevealSuper>
        <a className="text-link" href={SOCIAL_LINKS.GITHUB_REPOS} target="_blank" rel="noopener noreferrer">
          <img src="/icons/arrow-up.svg" alt="arrow-up" />
          ALL PROJECTS
        </a>
      </ContentRevealSuper>
    </section>
  );
};

export default FeaturedProjectsSection;
