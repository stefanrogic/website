import "./homePage.scss";

import AboutSection from "../../components/aboutSection/AboutSection";
import SkillsSection from "../../components/skillsSection/SkillsSection";
import FeaturedProjectsSection from "../../components/featuredProjectsSection/FeaturedProjectsSection";
import ContactSection from "../../components/contactSection/ContactSection";

const HomePage = ({ scrollTo, projectsData }) => {
  return (
    <div className="home" id="home">
      <AboutSection scrollTo={scrollTo} />
      <SkillsSection relevant={true} />
      <FeaturedProjectsSection projectsData={projectsData} />
      <ContactSection />
    </div>
  );
};

export default HomePage;
