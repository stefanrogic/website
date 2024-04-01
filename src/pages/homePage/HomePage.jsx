import "./homePage.scss";

import Navbar from "../../components/navbar/Navbar";
import AboutSection from "../../components/aboutSection/AboutSection";
import SkillsSection from "../../components/skillsSection/SkillsSection";

const HomePage = () => {
  return (
    <div className="home" id="home">
      <Navbar />
      <AboutSection />
      <SkillsSection />
    </div>
  );
};

export default HomePage;
