import "./aboutPage.scss";

import PageNavigation from "../../components/pageNavigation/PageNavigation";
import SkillsSection from "../../components/skillsSection/SkillsSection";
import EducationSection from "../../components/educationSection/EducationSection";
import AboutSection from "../../components/aboutSection/AboutSection";

import { motion } from "framer-motion";

const AboutPage = ({ getUrl }) => {
  return (
    <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7 }}>
      <PageNavigation position="/about-me" backLink="/home" getUrl={getUrl} />
      <motion.div className="img-container" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
        <motion.div className="curtain" animate={{ height: "0" }} transition={{ duration: 0.5, delay: 0.5 }}></motion.div>

        <img src={getUrl("images/test-img.jpg")} alt="#" />
      </motion.div>

      <AboutSection getUrl={getUrl} home={false} />

      <motion.p initial={{ opacity: 0, rotate: 2, y: 50 }} animate={{ opacity: 1, rotate: 0, y: 0 }} transition={{ duration: 0.5 }}>
        Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words,
        combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
      </motion.p>

      <SkillsSection getUrl={getUrl} />
      <EducationSection getUrl={getUrl} />

      <section id="education_section">
        <div className="heading-container row-reverse">
          <h1>EXPERIENCE</h1>
          <div className="heading-line"></div>
        </div>

        <div className="education-content">
          <div className="education-card">
            <a href="#" className="card-left">
              <h2>Web Developer Intern</h2>
              <p>Regional Innovation Startup Center Užice</p>
            </a>

            <div className="card-right">
              <p>
                <i>June - August 2022</i>
              </p>
            </div>
          </div>

          <div className="line-seperator"></div>

          <div className="education-card">
            <a href="#" className="card-left">
              <h2>Frontend Developer & UI/UX Designer</h2>
              <p>Freelance</p>
            </a>

            <div className="card-right">
              <p>
                <i>January 2024 - Now</i>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="education_section">
        <div className="heading-container">
          <h1>LANGUAGES</h1>
          <div className="heading-line"></div>
        </div>

        <div className="education-content">
          <div className="education-card">
            <a href="#" className="card-left">
              <h2>English</h2>
              <p>Excellent</p>
            </a>
          </div>

          <div className="line-seperator"></div>

          <div className="education-card">
            <a href="#" className="card-left">
              <h2>German</h2>
              <p>Beginner</p>
            </a>
          </div>

          <div className="line-seperator"></div>

          <div className="education-card">
            <a href="#" className="card-left">
              <h2>Serbian</h2>
              <p>Native</p>
            </a>
          </div>
        </div>
      </section>

      <section id="education_section">
        <div className="heading-container row-reverse">
          <h1>RESUME</h1>
          <div className="heading-line"></div>
        </div>

        <div className="education-content">
          <a href="https://drive.google.com/file/d/1DkL5xPQDqxMa88yyFKdXZk2BGqMzDrR_/view?usp=drive_link" target="_blank">
            <img src={getUrl("icons/arrow-up.svg")} alt="arrow-up" />
            GET PDF
          </a>
          <motion.div className="resume-container" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
            <motion.div className="curtain" animate={{ height: "0" }} transition={{ duration: 0.5, delay: 0.5 }}></motion.div>

            <img src={getUrl("images/resume.png")} alt="#" />
          </motion.div>
        </div>
      </section>
    </motion.section>
  );
};

export default AboutPage;
