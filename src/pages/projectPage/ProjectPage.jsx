import "./projectPage.scss";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

import PageNavigation from "../../components/pageNavigation/PageNavigation";
import ContentRevealSuper from "../../components/contentReveal/ContentRevealSuper";
import { Section, Loading, HeadingContainer, ProjectActionButton } from "../../components/ui";
import ScrollToTop from "../../components/scrollToTop/ScrollToTop";

import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectFade } from "swiper/modules";
import { motion } from "framer-motion";
import { getProjectBySlug } from "../../data/projects";
import { ROUTES } from "../../constants";

const ProjectPage = () => {
  const { id } = useParams();
  const [projectData, setProjectData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProject = async () => {
      setLoading(true);
      const project = getProjectBySlug(id);
      setProjectData(project);
      setLoading(false);
    };
    
    loadProject();
  }, [id]);

  if (loading) {
    return <Loading size="large" />;
  }

  if (!projectData) {
    return (
      <div className="error-container">
        <h2>Project not found</h2>
        <p>The project you're looking for doesn't exist.</p>
      </div>
    );
  }

  const { title, sub_title, demo_url, source_url, description, technologies, gallery, video_url, todo } = projectData;

  return (
    <div>
      <ScrollToTop />
      <PageNavigation position={`/projects/${projectData.slug}`} backLink={ROUTES.HOME} />

      <section>
        <div className="project-heading">
          <div className="left">
            {title && (
              <ContentRevealSuper>
                <h1>{title}</h1>
              </ContentRevealSuper>
            )}
            {sub_title && (
              <ContentRevealSuper>
                <p>{sub_title}</p>
              </ContentRevealSuper>
            )}
          </div>

          <div className="right">
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
            {source_url && (
              <ContentRevealSuper>
                <ProjectActionButton 
                  href={source_url} 
                  icon="/icons/github-icon.svg"
                  variant="primary"
                >
                  CODE
                </ProjectActionButton>
              </ContentRevealSuper>
            )}
          </div>
        </div>

        <ContentRevealSuper>
          <motion.div className="line-seperator"></motion.div>
        </ContentRevealSuper>

        {description && (
          <div className="project-description">
            {description.map((d, i) => (
              <ContentRevealSuper key={i}>
                <p>{d}</p>
              </ContentRevealSuper>
            ))}
          </div>
        )}

        <div className="project-sections">
          {technologies && (
            <div className="project-section">
              <HeadingContainer title="TECHNOLOGIES USED" variant="row-reverse" />
              <div className="skills-container">
                {technologies.map((skill, i) => {
                  if (skill)
                    return (
                      <ContentRevealSuper key={skill.name + i}>
                        <div className="skill">
                          <img src={skill.image} alt={skill.name} />
                          <span className="span-nounderline">{skill.name}</span>
                        </div>
                      </ContentRevealSuper>
                    );
                })}
              </div>
            </div>
          )}

          {gallery && (
            <div className="project-section">
              <HeadingContainer title="GALLERY" />
              <ContentRevealSuper width="100%">
                <div className="gallery-container">
                  <Swiper 
                    slidesPerView={1} 
                    centeredSlides={true} 
                    effect={"fade"} 
                    loop={true} 
                    navigation={true}
                    modules={[Navigation, EffectFade]}
                    className="gallery-swiper"
                  >
                    {gallery.map((img, i) => (
                      <SwiperSlide key={i}>
                        <img src={img.url} alt={img.alt} />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </ContentRevealSuper>
            </div>
          )}

          {video_url && (
            <div className="project-section">
              <HeadingContainer 
                title="VIDEO"
                variant={gallery ? "row-reverse" : "default"}
              />
              <div className="todo-container" style={{ minHeight: "165px" }}>
                <ContentRevealSuper width="100%">
                  <iframe
                    src={video_url}
                    style={{ width: "100%", aspectRatio: "16 / 9" }}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="Embedded youtube"
                  ></iframe>
                </ContentRevealSuper>
              </div>
            </div>
          )}

          {todo && (
            <div className="project-section">
              <HeadingContainer 
                title="TODO"
                variant={gallery || video_url ? "row-reverse" : "default"}
              />
              <div className="todo-container" style={{ minHeight: "165px" }}>
                {todo.map((t, i) =>
                  t.done ? (
                    <ContentRevealSuper key={i}>
                      <p><s>{t.text}</s></p>
                    </ContentRevealSuper>
                  ) : (
                    <ContentRevealSuper key={i}>
                      <p>{t.text}</p>
                    </ContentRevealSuper>
                  )
                )}
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default ProjectPage;
