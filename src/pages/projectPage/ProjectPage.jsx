import "./projectPage.scss";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

import PageNavigation from "../../components/pageNavigation/PageNavigation";

import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectFade } from "swiper/modules";

const ProjectPage = ({ getUrl, projects }) => {
  const [selected, setSelected] = useState(0);
  const { id } = useParams();

  const projectData = projects.find((project) => project.tag === id);

  return (
    <section>
      <PageNavigation position={`/projects/${id}`} backLink="/home" getUrl={getUrl} />

      <motion.div className="project-heading" initial={{ opacity: 0, rotate: 2, y: 50 }} animate={{ opacity: 1, rotate: 0, y: 0 }} transition={{ duration: 0.5 }}>
        <div className="left">
          <h1>{projectData.heading}</h1>
          <p>{projectData.paragraph}</p>
        </div>
        <div className="right">
          <a href={projectData.demoLink} target="_blank">
            <button>
              <img src={getUrl("icons/demo-icon.svg")} alt="demo-icon" />
              DEMO
            </button>
          </a>
          <a href={projectData.codeLink} target="_blank">
            <button>
              <img src={getUrl("icons/github-icon.svg")} alt="github-icon" />
              CODE
            </button>
          </a>
        </div>
      </motion.div>

      <motion.p initial={{ opacity: 0, rotate: 2, y: 50 }} animate={{ opacity: 1, rotate: 0, y: 0 }} transition={{ duration: 0.5 }}>
        {projectData.description}
      </motion.p>

      <section id="skills_section">
        <div className="heading-container row-reverse">
          <h1>TECHNOLOGIES USED</h1>
          <div className="heading-line"></div>
        </div>

        <div className="skills-container">
          {projectData.technologies.map((skill, i) => {
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
              <button className="swiper-gallery-prev" onClick={() => setTimeout(() => setSelected(selected > 0 ? selected - 1 : 3), 300)}>
                <img src={getUrl("icons/arrow-back.svg")} alt="arrow-back" />
              </button>
              <button className="swiper-gallery-next" onClick={() => setTimeout(() => setSelected(selected < 3 ? selected + 1 : 0), 300)}>
                <img src={getUrl("icons/arrow-next.svg")} alt="arrow-next" />
              </button>
            </div>

            {projectData.gallery.map((img, i) => (
              <SwiperSlide key={img.link + i}>
                <img src={img.link} alt={img.alt} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      <section id="skills_section">
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
      </section>
    </section>
  );
};

export default ProjectPage;
