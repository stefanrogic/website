import "./homePage.scss";

import Navbar from "../../components/navbar/Navbar";
import AboutSection from "../../components/aboutSection/AboutSection";
import SkillsSection from "../../components/skillsSection/SkillsSection";
import FeaturedProjectsSection from "../../components/featuredProjectsSection/FeaturedProjectsSection";
import ContactSection from "../../components/contactSection/ContactSection";
import Footer from "../../components/footer/Footer";

const HomePage = ({ getUrl }) => {
  return (
    <div className="home" id="home">
      <Navbar getUrl={getUrl} />
      <AboutSection getUrl={getUrl} />
      <SkillsSection getUrl={getUrl} />
      <FeaturedProjectsSection getUrl={getUrl} />
      <ContactSection getUrl={getUrl} />
      <Footer />
    </div>
  );
};

export default HomePage;
