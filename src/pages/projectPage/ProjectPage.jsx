import "./projectPage.scss";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

import PageNavigation from "../../components/pageNavigation/PageNavigation";

import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { Suspense, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectFade } from "swiper/modules";
import { supabase } from "../../supabaseClient";

const ProjectPage = ({ getUrl }) => {
  const { id } = useParams();
  const [projectData, setProjectData] = useState();

  const getProjectData = async (q, eq) => {
    const { data } = await supabase.from("projects").select(q).eq("slug", eq);
    setProjectData(data[0]);
  };

  useEffect(() => {
    getProjectData("*", id);
  }, []);

  return (
    <section>
      <Suspense fallback={<div>Loading...</div>}>
        <PageNavigation position={`/projects/${projectData?.slug}`} backLink="/home" getUrl={getUrl} />
      </Suspense>

      <motion.div className="project-heading" initial={{ opacity: 0, rotate: 2, y: 50 }} animate={{ opacity: 1, rotate: 0, y: 0 }} transition={{ duration: 0.5 }}>
        <div className="left">
          <h1>{projectData?.title}</h1>
          <p>{projectData?.sub_title}</p>
        </div>
        <div className="right">
          <a href={projectData?.demo_url} target="_blank">
            <button>
              <img src={getUrl("icons/demo-icon.svg")} alt="demo-icon" />
              DEMO
            </button>
          </a>
          <a href={projectData?.source_url} target="_blank">
            <button>
              <img src={getUrl("icons/github-icon.svg")} alt="github-icon" />
              CODE
            </button>
          </a>
        </div>
      </motion.div>
      <motion.p initial={{ opacity: 0, rotate: 2, y: 50 }} animate={{ opacity: 1, rotate: 0, y: 0 }} transition={{ duration: 0.5 }}>
        {projectData?.description}
      </motion.p>

      <section id="skills_section">
        <div className="heading-container row-reverse">
          <h1>TECHNOLOGIES USED</h1>
          <div className="heading-line"></div>
        </div>

        <div className="skills-container">
          {projectData?.technologies.map((skill, i) => {
            if (skill)
              return (
                <div className="skill" key={skill + i}>
                  <img src={getUrl(`icons/${skill.icon}`)} alt="" />
                  <span className="span-nounderline">{skill.name}</span>
                </div>
              );
          })}
        </div>
      </section>

      <section id="skills_section">
        <div className="heading-container">
          <h1>GALLERY</h1>
          <div className="heading-line"></div>
        </div>

        <div className="gallery-container">
          <Swiper slidesPerView={1} centeredSlides={true} effect={"fade"} loop={true} navigation={{ nextEl: ".swiper-gallery-next", prevEl: ".swiper-gallery-prev" }} modules={[Navigation, EffectFade]}>
            <div className="swiper-buttons">
              <button className="swiper-gallery-prev">
                <img src={getUrl("icons/arrow-back.svg")} alt="arrow-back" />
              </button>
              <button className="swiper-gallery-next">
                <img src={getUrl("icons/arrow-next.svg")} alt="arrow-next" />
              </button>
            </div>

            {projectData?.gallery_url.map((img, i) => (
              <SwiperSlide key={i}>
                <img src={img.link} alt={img.alt} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* <section id="skills_section">
          <div className="heading-container row-reverse">
            <h1>TODO</h1>
            <div className="heading-line"></div>
          </div>

          <div className="skills-container">
            {projectData.todo.map((t, i) =>
              t.done ? (
                <p key={i}>
                  <s>{t.text}</s>
                </p>
              ) : (
                <p key={i}>{t.text}</p>
              )
            )}
          </div>
        </section> */}
    </section>
  );
};

export default ProjectPage;
