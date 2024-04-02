import "./homePage.scss";

import AboutSection from "../../components/aboutSection/AboutSection";
import SkillsSection from "../../components/skillsSection/SkillsSection";
import FeaturedProjectsSection from "../../components/featuredProjectsSection/FeaturedProjectsSection";
import ContactSection from "../../components/contactSection/ContactSection";

const HomePage = ({ getUrl }) => {
  return (
    <div className="home" id="home">
      <AboutSection getUrl={getUrl} />
      <SkillsSection getUrl={getUrl} />
      <FeaturedProjectsSection getUrl={getUrl} />
      <ContactSection getUrl={getUrl} />
    </div>
  );
};

export default HomePage;
