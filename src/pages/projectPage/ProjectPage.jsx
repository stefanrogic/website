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

  const technologies = [
    { name: "React", icon: "react-icon.svg" },
    { name: "JavaScript", icon: "js-icon.svg" },
    { name: "Redux", icon: "redux-icon.svg" },
    { name: "Sass", icon: "sass-icon.svg" },
    { name: "Framer Motion", icon: "framer-motion-icon.svg" },
  ];

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

      <p>
        Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words,
        combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
      </p>

      <section id="skills_section">
        <div className="heading-container row-reverse">
          <h1>TECHNOLOGIES USED</h1>
          <div className="heading-line"></div>
        </div>

        <div className="skills-container">
          {technologies.map((skill, i) => {
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
          <Swiper slidesPerView={1} centeredSlides={true} effect={"fade"} loop={true} navigation={{ nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" }} modules={[Navigation, EffectFade]}>
            <div className="swiper-buttons">
              <button className="swiper-button-prev" onClick={() => setTimeout(() => setSelected(selected > 0 ? selected - 1 : 3), 300)}></button>
              <button className="swiper-button-next" onClick={() => setTimeout(() => setSelected(selected < 3 ? selected + 1 : 0), 300)}></button>
            </div>
            {[0, 1, 2, 3].map((slide, i) => (
              <SwiperSlide key={slide + i}>{slide}</SwiperSlide>
            ))}
          </Swiper>

          <div className="all-images">
            {[1, 2, 3, 4].map((img, i) => (
              <div className="img-preview" key={img + i} style={{ border: selected === i && "1px solid white" }} onClick={() => setSelected(i)}></div>
            ))}
          </div>
        </div>
      </section>

      <section id="skills_section">
        <div className="heading-container row-reverse">
          <h1>TODO</h1>
          <div className="heading-line"></div>
        </div>

        <div className="skills-container">
          <p>
            <s>Embarrassing hidden in the middle of text.</s>
          </p>
          <p>
            <s>Embarrassing hidden in the middle of text.</s>
          </p>
          <p>
            <s>Embarrassing hidden in the middle of text.</s>
          </p>
          <p>Embarrassing hidden in the middle of text.</p>
          <p>Embarrassing hidden in the middle of text.</p>
        </div>
      </section>
    </section>
  );
};

export default ProjectPage;
