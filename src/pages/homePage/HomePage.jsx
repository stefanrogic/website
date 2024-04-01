import "./homePage.scss";

import Navbar from "../../components/navbar/Navbar";
import AboutSection from "../../components/aboutSection/AboutSection";
import SkillsSection from "../../components/skillsSection/SkillsSection";

const HomePage = ({ getUrl }) => {
  return (
    <div className="home" id="home">
      <Navbar getUrl={getUrl} />
      <AboutSection getUrl={getUrl} />
      <SkillsSection getUrl={getUrl} />
    </div>
  );
};

export default HomePage;
