import "./projectPage.scss";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

import PageNavigation from "../../components/pageNavigation/PageNavigation";
import ContentReveal from "../../components/contentReveal/ContentReveal";

import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectFade } from "swiper/modules";
import { supabase } from "../../supabaseClient";

const ProjectPage = () => {
  const { id } = useParams();
  const [projectData, setProjectData] = useState();

  const getProjectData = async (q, eq) => {
    const { data } = await supabase.from("projects").select(q).eq("slug", eq);
    setProjectData(data[0]);
  };

  useEffect(() => {
    // window.scrollTo(0, 0);
    getProjectData("*", id);
  }, [id]);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.5 }}>
      <PageNavigation position={`/projects/${projectData?.slug}`} backLink="/home" />

      <section>
        <ContentReveal delay={2}>
          <div className="project-heading">
            <div className="left" style={{ minHeight: "72px" }}>
              <h1>{projectData?.title}</h1>

              <p>{projectData?.sub_title}</p>
            </div>

            <div className="right">
              <a href={projectData?.demo_url} target="_blank">
                <button>
                  <img
                    src="https://tghpaytxnfphvnnbkghz.supabase.co/storage/v1/object/sign/icons/demo-icon.svg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpY29ucy9kZW1vLWljb24uc3ZnIiwiaWF0IjoxNzE3NzY1NTIxLCJleHAiOjQ4NzEzNjU1MjF9.3aKuyMpCHRWSh2IJKuQ8y6NB-YI71QsnyTTmQZ61AqA&t=2024-06-07T13%3A05%3A21.792Z"
                    alt="demo-icon"
                  />
                  DEMO
                </button>
              </a>
              <a href={projectData?.source_url} target="_blank">
                <button>
                  <img
                    src="https://tghpaytxnfphvnnbkghz.supabase.co/storage/v1/object/sign/icons/github-icon.svg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpY29ucy9naXRodWItaWNvbi5zdmciLCJpYXQiOjE3MTc3NjU0ODQsImV4cCI6NDg3MTM2NTQ4NH0.BWztiGfYn7UlFuYNeH9uCfZoMxV-VKfJAHBY0ebdmqo&t=2024-06-07T13%3A04%3A44.840Z"
                    alt="github-icon"
                  />
                  CODE
                </button>
              </a>
            </div>
          </div>
        </ContentReveal>

        <div className="project-description">
          {projectData?.description.map((d, i) => (
            <ContentReveal key={i} delay={2.2}>
              <p style={{ minHeight: "150px" }}>{d}</p>
            </ContentReveal>
          ))}
        </div>

        <section id="skills_section">
          <div className="heading-container row-reverse">
            <h1>TECHNOLOGIES USED</h1>
            <div className="heading-line"></div>
          </div>

          <ContentReveal delay={2.4}>
            <div className="skills-container" style={{ minHeight: "85px" }}>
              {projectData?.technologies.map((skill, i) => {
                if (skill)
                  return (
                    <div className="skill" key={skill + i}>
                      <img src={skill.icon} alt="" />
                      <span className="span-nounderline">{skill.name}</span>
                    </div>
                  );
              })}
            </div>
          </ContentReveal>
        </section>

        {projectData?.gallery && (
          <section id="skills_section">
            <div className="heading-container">
              <h1>GALLERY</h1>
              <div className="heading-line"></div>
            </div>
            <ContentReveal delay={2.6}>
              <div className="gallery-container">
                <Swiper slidesPerView={1} centeredSlides={true} effect={"fade"} loop={true} navigation={{ nextEl: ".swiper-gallery-next", prevEl: ".swiper-gallery-prev" }} modules={[Navigation, EffectFade]}>
                  <div className="swiper-buttons">
                    <button className="swiper-gallery-prev">
                      <img
                        src="https://tghpaytxnfphvnnbkghz.supabase.co/storage/v1/object/sign/icons/arrow-back.svg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpY29ucy9hcnJvdy1iYWNrLnN2ZyIsImlhdCI6MTcxNzc2NjM4MywiZXhwIjo0ODcxMzY2MzgzfQ.3vGiyP2qCdSRFbjGRn6KBqhh8AH0-vsOxuChI-2UdFg&t=2024-06-07T13%3A19%3A43.420Z"
                        alt="arrow-back"
                      />
                    </button>
                    <button className="swiper-gallery-next">
                      <img
                        src="https://tghpaytxnfphvnnbkghz.supabase.co/storage/v1/object/sign/icons/arrow-next.svg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpY29ucy9hcnJvdy1uZXh0LnN2ZyIsImlhdCI6MTcxNzc2NjM3MSwiZXhwIjo0ODcxMzY2MzcxfQ.7eR17z0pdFaG846lbQzixiRn1hJHf8aodKVaaNTPg_A&t=2024-06-07T13%3A19%3A31.143Z"
                        alt="arrow-next"
                      />
                    </button>
                  </div>

                  {projectData?.gallery.map((img, i) => (
                    <SwiperSlide key={i}>
                      <img src={img.url} alt={img.alt} />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </ContentReveal>
          </section>
        )}

        <section>
          <div className={`heading-container ${projectData?.gallery ? "row-reverse" : ""}`}>
            <h1>TODO</h1>
            <div className="heading-line"></div>
          </div>

          <ContentReveal delay={2.8}>
            <div className="todo-container" style={{ minHeight: "165px" }}>
              {projectData?.todo.map((t, i) =>
                t.done ? (
                  <p key={i}>
                    <s>{t.text}</s>
                  </p>
                ) : (
                  <p key={i}>{t.text}</p>
                )
              )}
            </div>
          </ContentReveal>
        </section>
      </section>
    </motion.div>
  );
};

export default ProjectPage;
