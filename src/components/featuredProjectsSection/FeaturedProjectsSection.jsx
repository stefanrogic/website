import "./featuredProjectsSection.scss";

import FeaturedProjectCard from "../featuredProjectCard/FeaturedProjectCard";
import { Fragment, useEffect, useState } from "react";
import { supabase } from "../../supabaseClient";
import ContentRevealSuper from "../contentReveal/ContentRevealSuper";
import HeadingLine from "../headingLine/HeadingLine";

const FeaturedProjectsSection = () => {
  const [projectsData, setProjectsData] = useState();

  const getProjectsData = async (q) => {
    const { data } = await supabase.from("projects").select(q).order("id", { ascending: true });
    setProjectsData(data);
  };

  useEffect(() => {
    getProjectsData("slug, title, sub_title, demo_url, source_url");
  }, []);

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
          <img
            src="https://tghpaytxnfphvnnbkghz.supabase.co/storage/v1/object/sign/icons/arrow-up.svg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpY29ucy9hcnJvdy11cC5zdmciLCJpYXQiOjE3MTc3NjQyOTgsImV4cCI6NDg3MTM2NDI5OH0.et4eJzEsyGb6veyt3OCzKpA3IHApk8urogAWHT9JBJY&t=2024-06-07T12%3A44%3A58.573Z"
            alt="arrow-up"
          />
          ALL PROJECTS
        </a>
      </ContentRevealSuper>
    </section>
  );
};

export default FeaturedProjectsSection;
