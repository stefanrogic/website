import "./educationSection.scss";

const EducationSection = () => {
  return (
    <section id="education_section">
      <div className="heading-container">
        <h1>EDUCATION & CERTIFICATION</h1>
        <div className="heading-line"></div>
      </div>

      <div className="education-content">
        <div className="education-card">
          <div className="card-left">
            <h2>Bachelors Degree, IT</h2>
            <p>Academy of Vocational Studies of Western Serbia</p>
          </div>

          <div className="card-right">
            <p>
              <i>2019-2022</i>
            </p>
          </div>
        </div>

        <div className="line-seperator"></div>

        <div className="education-card">
          <div className="card-left">
            <h2>The Complete JS Course: From Zero to Expert!</h2>
            <p>Udemy - Online Course</p>
          </div>

          <div className="card-right">
            <p>
              <i>2020</i>
            </p>
          </div>
        </div>

        <div className="line-seperator"></div>

        <div className="education-card">
          <div className="card-left">
            <h2>React Course</h2>
            <p>Udemy - Online Course</p>
          </div>

          <div className="card-right">
            <p>
              <i>2021</i>
            </p>
          </div>
        </div>

        <div className="line-seperator"></div>

        <div className="education-card">
          <div className="card-left">
            <h2>Design Systems for Websites using Figma</h2>
            <p>Domestika - Online Course</p>
          </div>

          <div className="card-right">
            <p>
              <i>2021</i>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
