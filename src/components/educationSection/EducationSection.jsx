import "./educationSection.scss";

import ContentRevealSuper from "../contentReveal/ContentRevealSuper";
import HeadingLine from "../headingLine/HeadingLine";

const EducationSection = () => {
  return (
    <section id="education_section">
      <div className="heading-container">
        <ContentRevealSuper>
          <h1>EDUCATION & CERTIFICATION</h1>
        </ContentRevealSuper>
        <HeadingLine />
      </div>

      <div className="education-content">
        <ContentRevealSuper width="100%">
          <div className="education-card">
            <div className="card-left">
              <h2>Bachelors Degree, Computer and Electrical Engineering</h2>
              <p>Academy of Vocational Studies of Western Serbia</p>
            </div>

            <div className="card-right">
              <p>
                <i>2019-October 2022</i>
              </p>
            </div>
          </div>
        </ContentRevealSuper>

        <ContentRevealSuper>
          <div className="line-seperator"></div>
        </ContentRevealSuper>

        <ContentRevealSuper>
          <div className="education-card">
            <div className="card-left">
              <h2>The Complete JS Course: From Zero to Expert!</h2>
              <p>Udemy - Online Course</p>
            </div>
          </div>
        </ContentRevealSuper>

        <ContentRevealSuper>
          <div className="line-seperator"></div>
        </ContentRevealSuper>

        <ContentRevealSuper>
          <div className="education-card">
            <div className="card-left">
              <h2>React Course</h2>
              <p>Udemy - Online Course</p>
            </div>
          </div>
        </ContentRevealSuper>

        <ContentRevealSuper>
          <div className="line-seperator"></div>
        </ContentRevealSuper>

        <ContentRevealSuper>
          <div className="education-card">
            <div className="card-left">
              <h2>Design Systems for Websites using Figma</h2>
              <p>Domestika - Online Course</p>
            </div>
          </div>
        </ContentRevealSuper>
      </div>
    </section>
  );
};

export default EducationSection;
