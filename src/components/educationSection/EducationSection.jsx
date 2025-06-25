import "./educationSection.scss";

import ContentRevealSuper from "../contentReveal/ContentRevealSuper";
import { HeadingContainer, Card } from "../ui";

const EducationSection = () => {
  return (
    <section id="education_section">
      <HeadingContainer title="EDUCATION & CERTIFICATION" />

      <div className="education-content">
        <ContentRevealSuper width="100%">
          <Card
            title="Bachelors Degree, Computer and Electrical Engineering"
            subtitle="Academy of Vocational Studies of Western Serbia"
            rightContent={<p><i>2019 - 2022</i></p>}
            variant="education"
          />
        </ContentRevealSuper>

        <ContentRevealSuper>
          <div className="line-seperator"></div>
        </ContentRevealSuper>

        <ContentRevealSuper>
          <Card
            title="The Complete JS Course: From Zero to Expert!"
            subtitle="Udemy - Online Course"
            variant="education"
          />
        </ContentRevealSuper>

        <ContentRevealSuper>
          <div className="line-seperator"></div>
        </ContentRevealSuper>

        <ContentRevealSuper>
          <Card
            title="React Course"
            subtitle="Udemy - Online Course"
            variant="education"
          />
        </ContentRevealSuper>

        <ContentRevealSuper>
          <div className="line-seperator"></div>
        </ContentRevealSuper>

        <ContentRevealSuper>
          <Card
            title="Design Systems for Websites using Figma"
            subtitle="Domestika - Online Course"
            variant="education"
          />
        </ContentRevealSuper>
      </div>
    </section>
  );
};

export default EducationSection;
