import "./projectPage.scss";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

import PageNavigation from "../../components/pageNavigation/PageNavigation";
import ContentRevealSuper from "../../components/contentReveal/ContentRevealSuper";
import HeadingLine from "../../components/headingLine/HeadingLine";
import ScrollToTop from "../../components/scrollToTop/ScrollToTop";

import { useParams } from "react-router-dom";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectFade } from "swiper/modules";
import { motion } from "framer-motion";

const ProjectPage = ({ projectsData }) => {
  const { id } = useParams();
  const [projectData] = useState(projectsData.find((p) => p.slug === id));

  return (
    <div>
      <ScrollToTop />
      <PageNavigation position={`/projects/${projectData?.slug ? projectData?.slug : ""}`} backLink="/home" />

      <section>
        <div className="project-heading">
          <div className="left">
            {projectData?.title && (
              <ContentRevealSuper>
                <h1>{projectData?.title}</h1>
              </ContentRevealSuper>
            )}
            {projectData?.sub_title && (
              <ContentRevealSuper>
                <p>{projectData?.sub_title}</p>
              </ContentRevealSuper>
            )}
          </div>

          <div className="right">
            <a href={projectData?.demo_url} target="_blank">
              {projectData?.demo_url ? (
                <ContentRevealSuper>
                  <button>
                    <img src="/icons/demo-icon.svg" alt="demo-icon" />
                    DEMO
                  </button>
                </ContentRevealSuper>
              ) : (
                <></>
              )}
            </a>
            <a href={projectData?.source_url} target="_blank">
              {projectData?.source_url && (
                <ContentRevealSuper>
                  <button>
                    <img src="/icons/github-icon.svg" alt="github-icon" />
                    CODE
                  </button>
                </ContentRevealSuper>
              )}
            </a>
          </div>
        </div>

        <ContentRevealSuper>
          <motion.div className="line-seperator"></motion.div>
        </ContentRevealSuper>

        {projectData.description && (
          <div className="project-description">
            {projectData?.description.map((d, i) => (
              <ContentRevealSuper key={i}>
                <p>{d}</p>
              </ContentRevealSuper>
            ))}
          </div>
        )}

        {projectData?.technologies && (
          <section id="skills_section">
            <div className="heading-container row-reverse">
              <ContentRevealSuper>
                <h1>TECHNOLOGIES USED</h1>
              </ContentRevealSuper>
              <HeadingLine />
            </div>

            <div className="skills-container">
              {projectData?.technologies.map((skill, i) => {
                if (skill)
                  return (
                    <ContentRevealSuper key={skill + i}>
                      <div className="skill">
                        <img src={skill.image} alt="" />
                        <span className="span-nounderline">{skill.name}</span>
                      </div>
                    </ContentRevealSuper>
                  );
              })}
            </div>
          </section>
        )}

        {projectData?.gallery && (
          <section id="skills_section">
            <div className="heading-container">
              <ContentRevealSuper>
                <h1>GALLERY</h1>
              </ContentRevealSuper>
              <HeadingLine />
            </div>
            <ContentRevealSuper width="100%">
              <div className="gallery-container">
                <Swiper slidesPerView={1} centeredSlides={true} effect={"fade"} loop={true} navigation={{ nextEl: ".swiper-gallery-next", prevEl: ".swiper-gallery-prev" }} modules={[Navigation, EffectFade]}>
                  <div className="swiper-buttons">
                    <button className="swiper-gallery-prev">
                      <img src="/icons/arrow-back.svg" alt="arrow-back" />
                    </button>
                    <button className="swiper-gallery-next">
                      <img src="icons/arrow-next.svg" alt="arrow-next" />
                    </button>
                  </div>

                  {projectData?.gallery.map((img, i) => (
                    <SwiperSlide key={i} style={{ position: "relative" }}>
                      <img src={img.url} alt={img.alt} />
                      <h2 style={{ position: "absolute", left: "50%", top: "50%", transform: "translate(-50%, -50%)", padding: "10px", background: "#b22045", textAlign: "center" }}>Work in progress</h2>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </ContentRevealSuper>
          </section>
        )}

        {projectData?.video_url && (
          <section>
            <div className={`heading-container  ${projectData?.gallery ? "row-reverse" : ""} `}>
              <ContentRevealSuper>
                <h1>VIDEO</h1>
              </ContentRevealSuper>
              <HeadingLine />
            </div>

            <div className="todo-container" style={{ minHeight: "165px" }}>
              <ContentRevealSuper width="100%">
                <iframe
                  src={projectData?.video_url}
                  style={{ width: "100%", aspectRatio: "16 / 9" }}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title="Embedded youtube"
                ></iframe>
              </ContentRevealSuper>
              {/* <h2 style={{ padding: "10px", background: "#b22045", textAlign: "center" }}>Work in progress</h2> */}
            </div>
          </section>
        )}

        {projectData?.todo && (
          <section>
            <div className={`heading-container ${projectData?.gallery || (projectData?.video_url ? "row-reverse" : "")}`}>
              <ContentRevealSuper>
                <h1>TODO</h1>
              </ContentRevealSuper>
              <HeadingLine />
            </div>

            <div className="todo-container" style={{ minHeight: "165px" }}>
              {projectData?.todo.map((t, i) =>
                t.done ? (
                  <ContentRevealSuper key={i}>
                    <p>
                      <s>{t.text}</s>
                    </p>
                  </ContentRevealSuper>
                ) : (
                  <ContentRevealSuper key={i}>
                    <p>{t.text}</p>
                  </ContentRevealSuper>
                )
              )}
            </div>
          </section>
        )}
      </section>
    </div>
  );
};

export default ProjectPage;
