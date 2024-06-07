import "./featuredProjectsSection.scss";

import FeaturedProjectCard from "../featuredProjectCard/FeaturedProjectCard";
import { Fragment, useEffect, useState } from "react";
import { supabase } from "../../supabaseClient";

const FeaturedProjectsSection = ({ getUrl }) => {
  const [projectsData, setProjectsData] = useState();

  const getProjectsData = async (q) => {
    const { data } = await supabase.from("projects").select(q);
    setProjectsData(data);
  };

  useEffect(() => {
    getProjectsData("title, sub_title, demo_url, source_url");
  }, []);

  return (
    <section id="featured_projects_section">
      <div className="heading-container">
        <h1>FEATURED PROJECTS</h1>
        <div className="heading-line"></div>
      </div>

      <div className="projects-container">
        {projectsData?.map((project, i) => (
          <Fragment key={project + i}>
            <FeaturedProjectCard getUrl={getUrl} projectData={project} />
            {i + 1 !== projectsData.length && <div className="line-seperator"></div>}
          </Fragment>
        ))}
      </div>

      <a className="text-link" href="https://github.com/stefanrogic?tab=repositories" target="_blank">
        <img src={getUrl("icons/arrow-up-inactive.svg")} alt="arrow-up" />
        ALL PROJECTS
      </a>
    </section>
  );
};

export default FeaturedProjectsSection;
