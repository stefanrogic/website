import "./featuredProjectsSection.scss";

import FeaturedProjectCard from "../featuredProjectCard/FeaturedProjectCard";
import { Fragment, useEffect, useState } from "react";
import { supabase } from "../../supabaseClient";

const FeaturedProjectsSection = () => {
  const [projectsData, setProjectsData] = useState();

  const getProjectsData = async (q) => {
    const { data } = await supabase.from("projects").select(q);
    setProjectsData(data);
  };

  useEffect(() => {
    getProjectsData("slug, title, sub_title, demo_url, source_url");
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
            <FeaturedProjectCard projectData={project} />
            {i + 1 !== projectsData.length && <div className="line-seperator"></div>}
          </Fragment>
        ))}
      </div>

      <a className="text-link" href="https://github.com/stefanrogic?tab=repositories" target="_blank">
        <img
          src="https://tghpaytxnfphvnnbkghz.supabase.co/storage/v1/object/sign/icons/arrow-up.svg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpY29ucy9hcnJvdy11cC5zdmciLCJpYXQiOjE3MTc3NjQyOTgsImV4cCI6NDg3MTM2NDI5OH0.et4eJzEsyGb6veyt3OCzKpA3IHApk8urogAWHT9JBJY&t=2024-06-07T12%3A44%3A58.573Z"
          alt="arrow-up"
        />
        ALL PROJECTS
      </a>
    </section>
  );
};

export default FeaturedProjectsSection;
