import "./aboutPage.scss";

import PageNavigation from "../../components/pageNavigation/PageNavigation";
import SkillsSection from "../../components/skillsSection/SkillsSection";
import EducationSection from "../../components/educationSection/EducationSection";
import AboutSection from "../../components/aboutSection/AboutSection";
import ContentReveal from "../../components/contentReveal/ContentReveal";

import { motion } from "framer-motion";

const AboutPage = ({ scrollTo }) => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.5 }}>
      <PageNavigation position="/about-me" backLink="/home" />
      <section>
        <ContentReveal delay={1}>
          <div className="img-container">
            <img
              src="https://tghpaytxnfphvnnbkghz.supabase.co/storage/v1/object/sign/images/test-img.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXMvdGVzdC1pbWcuanBnIiwiaWF0IjoxNzE3NzY2MTI3LCJleHAiOjQ4NzEzNjYxMjd9.0SeIOW3cMf776i2_R9NcRHaMZw1blMRGQtadykx2Daw&t=2024-06-07T13%3A15%3A28.059Z"
              alt="#"
            />
          </div>
        </ContentReveal>

        <AboutSection home={false} scrollTo={scrollTo} />
        <SkillsSection relevant={false} />
        <EducationSection />

        <section id="education_section">
          <div className="heading-container row-reverse">
            <h1>EXPERIENCE</h1>
            <div className="heading-line"></div>
          </div>

          <div className="education-content">
            <ContentReveal delay={2.2}>
              <div className="education-card">
                <div className="card-left">
                  <h2>Web Developer Intern</h2>
                  <p>Regional Innovation Startup Center Užice</p>
                </div>

                <div className="card-right">
                  <p>
                    <i>June - August 2022</i>
                  </p>
                </div>
              </div>
            </ContentReveal>

            {/* <div className="line-seperator"></div> */}

            {/* <ContentReveal delay={2.4}>
              <div className="education-card">
                <div className="card-left">
                  <h2>Frontend Developer & UI/UX Designer</h2>
                  <p>Freelance</p>
                </div>

                <div className="card-right">
                  <p>
                    <i>January 2024 - Now</i>
                  </p>
                </div>
              </div>
            </ContentReveal> */}
          </div>
        </section>

        <section id="education_section">
          <div className="heading-container">
            <h1>LANGUAGES</h1>
            <div className="heading-line"></div>
          </div>

          <div className="education-content">
            <div className="education-card">
              <ContentReveal delay={2.2}>
                <div className="card-left">
                  <h2>English</h2>
                  <p>Excellent</p>
                </div>
              </ContentReveal>
            </div>

            <div className="line-seperator"></div>

            <div className="education-card">
              <ContentReveal delay={2.4}>
                <div className="card-left">
                  <h2>German</h2>
                  <p>Beginner</p>
                </div>
              </ContentReveal>
            </div>

            <div className="line-seperator"></div>

            <div className="education-card">
              <ContentReveal delay={2.6}>
                <div className="card-left">
                  <h2>Serbian</h2>
                  <p>Native</p>
                </div>
              </ContentReveal>
            </div>
          </div>
        </section>

        <section id="resume_section">
          <div className="heading-container row-reverse">
            <h1>RESUME</h1>
            <div className="heading-line"></div>
          </div>

          <div className="education-content">
            <a className="text-link" href="https://drive.google.com/file/d/1DkL5xPQDqxMa88yyFKdXZk2BGqMzDrR_/view?usp=drive_link" target="_blank">
              <img
                src="https://tghpaytxnfphvnnbkghz.supabase.co/storage/v1/object/sign/icons/arrow-up.svg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpY29ucy9hcnJvdy11cC5zdmciLCJpYXQiOjE3MTc3NjYwNTMsImV4cCI6NDg3MTM2NjA1M30.W15FJyMOqMIEI3FqZiLT_WKrKjWFhrJz2yRBvvwR6WU&t=2024-06-07T13%3A14%3A13.717Z"
                alt="arrow-up"
              />
              GET PDF
            </a>
            <ContentReveal delay={2.2}>
              <div className="resume-container">
                <img
                  src="https://tghpaytxnfphvnnbkghz.supabase.co/storage/v1/object/sign/images/resume.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXMvcmVzdW1lLnBuZyIsImlhdCI6MTcxNzc2NTk5MywiZXhwIjo0ODcxMzY1OTkzfQ.ycqPcZZyxbg9QUYVXVjiO_vLXeYDYCgExoUpAzfGhhU&t=2024-06-07T13%3A13%3A13.929Z"
                  alt="#"
                />
              </div>
            </ContentReveal>
          </div>
        </section>
      </section>
    </motion.div>
  );
};

export default AboutPage;
