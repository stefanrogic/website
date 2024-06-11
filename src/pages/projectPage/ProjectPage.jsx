import "./projectPage.scss";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

import PageNavigation from "../../components/pageNavigation/PageNavigation";

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectFade } from "swiper/modules";
import { supabase } from "../../supabaseClient";

import ContentRevealSuper from "../../components/contentReveal/ContentRevealSuper";
import HeadingLine from "../../components/headingLine/HeadingLine";
import ScrollToTop from "../../components/scrollToTop/ScrollToTop";

const ProjectPage = () => {
  const { id } = useParams();
  const [projectData, setProjectData] = useState();

  const getProjectData = async (q, eq) => {
    const { data } = await supabase.from("projects").select(q).eq("slug", eq);
    setProjectData(data[0]);
  };

  useEffect(() => {
    getProjectData("*", id);
  }, [id]);

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
                    <img
                      src="https://tghpaytxnfphvnnbkghz.supabase.co/storage/v1/object/sign/icons/demo-icon.svg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpY29ucy9kZW1vLWljb24uc3ZnIiwiaWF0IjoxNzE3NzY1NTIxLCJleHAiOjQ4NzEzNjU1MjF9.3aKuyMpCHRWSh2IJKuQ8y6NB-YI71QsnyTTmQZ61AqA&t=2024-06-07T13%3A05%3A21.792Z"
                      alt="demo-icon"
                    />
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
                    <img
                      src="https://tghpaytxnfphvnnbkghz.supabase.co/storage/v1/object/sign/icons/github-icon.svg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpY29ucy9naXRodWItaWNvbi5zdmciLCJpYXQiOjE3MTc3NjU0ODQsImV4cCI6NDg3MTM2NTQ4NH0.BWztiGfYn7UlFuYNeH9uCfZoMxV-VKfJAHBY0ebdmqo&t=2024-06-07T13%3A04%3A44.840Z"
                      alt="github-icon"
                    />
                    CODE
                  </button>
                </ContentRevealSuper>
              )}
            </a>
          </div>
        </div>

        <div className="project-description">
          {projectData?.description.map((d, i) => (
            <ContentRevealSuper key={i}>
              <p>{d}</p>
            </ContentRevealSuper>
          ))}
        </div>

        <section id="skills_section">
          <div className="heading-container row-reverse">
            <ContentRevealSuper>
              <h1>TECHNOLOGIES USED</h1>
            </ContentRevealSuper>
            <HeadingLine />
          </div>

          <ContentRevealSuper>
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
          </ContentRevealSuper>
        </section>

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
              <h2 style={{ padding: "10px", background: "#b22045", textAlign: "center" }}>Work in progress</h2>
            </div>
          </section>
        )}

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
      </section>
    </div>
  );
};

export default ProjectPage;
