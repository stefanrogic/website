import "./featuredProjectsSection.scss";

import FeaturedProjectCard from "../featuredProjectCard/FeaturedProjectCard";
import { Fragment } from "react";
import ContentRevealSuper from "../contentReveal/ContentRevealSuper";
import HeadingLine from "../headingLine/HeadingLine";

const FeaturedProjectsSection = ({ projectsData }) => {
  return (
    <section id="featured_projects_section">
      <div className="heading-container">
        <ContentRevealSuper>
          <h1>FEATURED PROJECTS</h1>
        </ContentRevealSuper>
        <HeadingLine />
      </div>

      <div className="projects-container">
        {projectsData?.map((project, i) => (
          <Fragment key={project + i}>
            <FeaturedProjectCard projectData={project} />

            {i + 1 !== projectsData.length && (
              <ContentRevealSuper>
                <div className="line-seperator"></div>
              </ContentRevealSuper>
            )}
          </Fragment>
        ))}
      </div>

      <ContentRevealSuper>
        <a className="text-link" href="https://github.com/stefanrogic?tab=repositories" target="_blank">
          <img src="/icons/arrow-up.svg" alt="arrow-up" />
          ALL PROJECTS
        </a>
      </ContentRevealSuper>
    </section>
  );
};

export default FeaturedProjectsSection;
