import "./aboutPage.scss";

import PageNavigation from "../../components/pageNavigation/PageNavigation";
import SkillsSection from "../../components/skillsSection/SkillsSection";
import EducationSection from "../../components/educationSection/EducationSection";
import AboutSection from "../../components/aboutSection/AboutSection";
import ContentRevealSuper from "../../components/contentReveal/ContentRevealSuper";
import HeadingLine from "../../components/headingLine/HeadingLine";

const AboutPage = ({ scrollTo }) => {
  return (
    <div>
      <PageNavigation position="/about-me" backLink="/home" />

      <section>
        <ContentRevealSuper width="100%">
          <div className="img-container">
            <img
              src="https://tghpaytxnfphvnnbkghz.supabase.co/storage/v1/object/sign/images/test-img.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXMvdGVzdC1pbWcuanBnIiwiaWF0IjoxNzE3NzY2MTI3LCJleHAiOjQ4NzEzNjYxMjd9.0SeIOW3cMf776i2_R9NcRHaMZw1blMRGQtadykx2Daw&t=2024-06-07T13%3A15%3A28.059Z"
              alt="#"
            />
            <h2 style={{ position: "absolute", left: "50%", top: "50%", transform: "translate(-50%, -50%)", padding: "10px", background: "#b22045", textAlign: "center" }}>Work in progress</h2>
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

            {/* <ContentRevealSuper><div className="line-seperator"></div></ContentRevealSuper> */}

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
                  <p>Excellent</p>
                </div>
              </ContentRevealSuper>
            </div>

            <ContentRevealSuper>
              <div className="line-seperator"></div>
            </ContentRevealSuper>

            <div className="education-card">
              <ContentRevealSuper>
                <div className="card-left">
                  <h2>German</h2>
                  <p>Beginner</p>
                </div>
              </ContentRevealSuper>
            </div>

            <ContentRevealSuper>
              <div className="line-seperator"></div>
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

          <div className="education-content">
            <ContentRevealSuper>
              <a className="text-link" href="https://drive.google.com/file/d/1DkL5xPQDqxMa88yyFKdXZk2BGqMzDrR_/view?usp=drive_link" target="_blank">
                <img
                  src="https://tghpaytxnfphvnnbkghz.supabase.co/storage/v1/object/sign/icons/arrow-up.svg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpY29ucy9hcnJvdy11cC5zdmciLCJpYXQiOjE3MTc3NjYwNTMsImV4cCI6NDg3MTM2NjA1M30.W15FJyMOqMIEI3FqZiLT_WKrKjWFhrJz2yRBvvwR6WU&t=2024-06-07T13%3A14%3A13.717Z"
                  alt="arrow-up"
                />
                GET PDF
              </a>
            </ContentRevealSuper>
            <ContentRevealSuper>
              <div className="resume-container">
                <img
                  src="https://tghpaytxnfphvnnbkghz.supabase.co/storage/v1/object/sign/images/resume.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXMvcmVzdW1lLnBuZyIsImlhdCI6MTcxODIwNzk3MywiZXhwIjo0ODcxODA3OTczfQ.hhIIn5YvLhxAbQXy2UNvsZm1NKMMcvDeE1_Hdd3wTeE&t=2024-06-12T15%3A59%3A34.447Z"
                  alt="#"
                />
                {/* <h2 style={{ position: "absolute", left: "50%", top: "50%", transform: "translate(-50%, -50%)", padding: "30px", background: "#b22045", fontSize: "100px", textAlign: "center", lineHeight: "80px" }}>Work in progress</h2> */}
              </div>
            </ContentRevealSuper>
          </div>
        </section>
      </section>
    </div>
  );
};

export default AboutPage;
