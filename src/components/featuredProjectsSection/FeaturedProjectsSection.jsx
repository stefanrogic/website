import "./featuredProjectsSection.scss";

import FeaturedProjectCard from "../featuredProjectCard/FeaturedProjectCard";
import { Fragment, useState } from "react";
import ContentRevealSuper from "../contentReveal/ContentRevealSuper";
import HeadingLine from "../headingLine/HeadingLine";

const FeaturedProjectsSection = () => {
  const [projectsData] = useState([
    {
      slug: "read-me-fast",
      title: "Read Me Fast",
      sub_title: "App",
      demo_url: "#",
      source_url: "#",
    },
    {
      slug: "portfolio",
      title: "Portfolio",
      sub_title: "My Portfolio Website",
      demo_url: "#",
      source_url: "#",
    },
    {
      slug: "microphone-test",
      title: "Microphone Test",
      sub_title: "App",
      demo_url: "#",
      source_url: "#",
    },
    {
      slug: "blackjack",
      title: "Blackjack",
      sub_title: "Game",
      demo_url: "#",
      source_url: "#",
    },
    {
      slug: "my-linux-config",
      title: "My Linux Config",
      sub_title: "Dotfiles",
      source_url: "https://github.com/stefanrogic/dotfiles",
    },
  ]);

  return (
    <section id="featured_projects_section">
      <div className="heading-container">
        <ContentRevealSuper>
          <h1>FEATURED PROJECTS</h1>
        </ContentRevealSuper>
        <HeadingLine />
      </div>

      <div className="projects-container" style={{ minHeight: "454px" }}>
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
