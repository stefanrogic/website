import "./aboutPage.scss";

import PageNavigation from "../../components/pageNavigation/PageNavigation";
import SkillsSection from "../../components/skillsSection/SkillsSection";
import EducationSection from "../../components/educationSection/EducationSection";
import AboutSection from "../../components/aboutSection/AboutSection";
import ContentRevealSuper from "../../components/contentReveal/ContentRevealSuper";
import HeadingLine from "../../components/headingLine/HeadingLine";

import { motion } from "framer-motion";

const AboutPage = ({ scrollTo }) => {
  return (
    <div>
      <PageNavigation position="/about-me" backLink="/home" />

      <section>
        <ContentRevealSuper width="100%">
          <div className="img-container">
            <img src="/images/about-img.jpg" alt="#" />
            {/* <h2 style={{ position: "absolute", left: "50%", top: "50%", transform: "translate(-50%, -50%)", padding: "10px", background: "#b22045", textAlign: "center" }}>Work in progress</h2> */}
          </div>
        </ContentRevealSuper>

        <AboutSection home={false} scrollTo={scrollTo} />
        <SkillsSection relevant={false} />
        <EducationSection />

        <section id="education_section">
          <div className="heading-container row-reverse">
            <ContentRevealSuper>
              <h1>EXPERIENCE</h1>
            </ContentRevealSuper>
            <HeadingLine />
          </div>

          <div className="education-content">
            <ContentRevealSuper width="100%">
              <div className="education-card">
                <div className="card-left">
                  <h2>Freelance</h2>
                  <p>Technical Support, Computer Service & Graphical Design</p>
                </div>

                <div className="card-right">
                  <p>
                    <i>2018 - Currently</i>
                  </p>
                </div>
              </div>
            </ContentRevealSuper>

            <ContentRevealSuper>
              <motion.div className="line-seperator"></motion.div>
            </ContentRevealSuper>

            <ContentRevealSuper width="100%">
              <div className="education-card">
                <div className="card-left">
                  <h2>System Administrator</h2>
                  <p>Medical School Užice</p>
                </div>

                <div className="card-right">
                  <p>
                    <i>June - November 2024</i>
                  </p>
                </div>
              </div>
            </ContentRevealSuper>

            <ContentRevealSuper>
              <motion.div className="line-seperator"></motion.div>
            </ContentRevealSuper>

            <ContentRevealSuper width="100%">
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
            </ContentRevealSuper>

            <ContentRevealSuper>
              <motion.div className="line-seperator"></motion.div>
            </ContentRevealSuper>

            <ContentRevealSuper width="100%">
              <div className="education-card">
                <div className="card-left">
                  <h2>Salesman</h2>
                  <p>WinWin</p>
                </div>

                <div className="card-right">
                  <p>
                    <i>2016 - 2019</i>
                  </p>
                </div>
              </div>
            </ContentRevealSuper>
          </div>
        </section>

        <section id="education_section">
          <div className="heading-container">
            <ContentRevealSuper>
              <h1>LANGUAGES</h1>
            </ContentRevealSuper>
            <HeadingLine />
          </div>

          <div className="education-content">
            <div className="education-card">
              <ContentRevealSuper>
                <div className="card-left">
                  <h2>English</h2>
                  <p>C2</p>
                </div>
              </ContentRevealSuper>
            </div>

            <ContentRevealSuper>
              <motion.div className="line-seperator"></motion.div>
            </ContentRevealSuper>

            <div className="education-card">
              <ContentRevealSuper>
                <div className="card-left">
                  <h2>German</h2>
                  <p>A1</p>
                </div>
              </ContentRevealSuper>
            </div>

            <ContentRevealSuper>
              <motion.div className="line-seperator"></motion.div>
            </ContentRevealSuper>

            <div className="education-card">
              <ContentRevealSuper>
                <div className="card-left">
                  <h2>Serbian</h2>
                  <p>Native</p>
                </div>
              </ContentRevealSuper>
            </div>
          </div>
        </section>

        <section id="resume_section">
          <div className="heading-container row-reverse">
            <ContentRevealSuper>
              <h1>RESUME</h1>
            </ContentRevealSuper>
            <HeadingLine />
          </div>
          {/* 
          <div className="education-content">
            <ContentRevealSuper>
              <a className="text-link" href="https://drive.google.com/file/d/1DkL5xPQDqxMa88yyFKdXZk2BGqMzDrR_/view?usp=drive_link" target="_blank">
                <img src="/icons/arrow-up.svg" alt="arrow-up" />
                GET PDF
              </a>
            </ContentRevealSuper>
            
            <ContentRevealSuper>
              <div className="resume-container">
                <img src="/images/resume.png" alt="resume" />
                <h2 style={{ position: "absolute", left: "50%", top: "50%", transform: "translate(-50%, -50%)", padding: "30px", background: "#b22045", fontSize: "100px", textAlign: "center", lineHeight: "80px" }}>Work in progress</h2> 
              </div>
            </ContentRevealSuper>
          </div>
          */}
        </section>
      </section>
    </div>
  );
};

export default AboutPage;
