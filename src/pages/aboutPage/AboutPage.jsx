import "./aboutPage.scss";

import PageNavigation from "../../components/pageNavigation/PageNavigation";
import SkillsSection from "../../components/skillsSection/SkillsSection";
import EducationSection from "../../components/educationSection/EducationSection";
import AboutSection from "../../components/aboutSection/AboutSection";
import ContentRevealSuper from "../../components/contentReveal/ContentRevealSuper";
import { HeadingContainer, Card } from "../../components/ui";

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

        <section id="experience_section">
          <HeadingContainer title="EXPERIENCE" variant="row-reverse" />

          <div className="experience-content">
            <ContentRevealSuper width="100%">
              <Card
                title="Freelance"
                subtitle="Technical Support, Computer Service & Graphical Design"
                rightContent={<p><i>2015 - Currently</i></p>}
                variant="education"
              />
            </ContentRevealSuper>

            <ContentRevealSuper>
              <motion.div className="line-seperator"></motion.div>
            </ContentRevealSuper>

            <ContentRevealSuper width="100%">
              <Card
                title="System Administrator"
                subtitle="Medical School Užice"
                rightContent={<p><i>juner 2023 - September 2023</i></p>}
                variant="education"
              />
            </ContentRevealSuper>

            <ContentRevealSuper>
              <motion.div className="line-seperator"></motion.div>
            </ContentRevealSuper>

            <ContentRevealSuper width="100%">
              <Card
                title="Web Developer Intern"
                subtitle="Regional Innovation Startup Center Užice"
                rightContent={<p><i>June - August 2022</i></p>}
                variant="education"
              />
            </ContentRevealSuper>

            <ContentRevealSuper>
              <motion.div className="line-seperator"></motion.div>
            </ContentRevealSuper>

            <ContentRevealSuper width="100%">
              <Card
                title="Salesman"
                subtitle="WinWin"
                rightContent={<p><i>2016 - 2019</i></p>}
                variant="education"
              />
            </ContentRevealSuper>
          </div>
        </section>

        <section id="languages_section">
          <HeadingContainer title="LANGUAGES" />

          <div className="languages-content">
            <ContentRevealSuper>
              <Card
                title="English"
                subtitle="C2"
                variant="education"
              />
            </ContentRevealSuper>

            <ContentRevealSuper>
              <motion.div className="line-seperator"></motion.div>
            </ContentRevealSuper>

            <ContentRevealSuper>
              <Card
                title="German"
                subtitle="A1"
                variant="education"
              />
            </ContentRevealSuper>

            <ContentRevealSuper>
              <motion.div className="line-seperator"></motion.div>
            </ContentRevealSuper>

            <ContentRevealSuper>
              <Card
                title="Serbian"
                subtitle="Native"
                variant="education"
              />
            </ContentRevealSuper>
          </div>
        </section>
        {/* 
        <section id="resume_section">
          <div className="heading-container row-reverse">
            <ContentRevealSuper>
              <h1>RESUME</h1>
            </ContentRevealSuper>
            <HeadingLine />
          </div>
          
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
        </section>
        */}
      </section>
    </div>
  );
};

export default AboutPage;
