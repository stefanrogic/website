import "./homePage.scss";

import AboutSection from "../../components/aboutSection/AboutSection";
import SkillsSection from "../../components/skillsSection/SkillsSection";
import FeaturedProjectsSection from "../../components/featuredProjectsSection/FeaturedProjectsSection";
import ContactSection from "../../components/contactSection/ContactSection";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const HomePage = () => {
  const location = useLocation();

  useEffect(() => {
    // Handle hash-based scrolling
    if (location.hash) {
      const sectionId = location.hash.substring(1); // Remove the #
      const element = document.getElementById(sectionId);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ 
            behavior: "smooth", 
            block: "start", 
            inline: "nearest" 
          });
        }, 100);
      }
    }
  }, [location.hash]);

  return (
    <div className="home" id="home">
      <AboutSection />
      <SkillsSection relevant={true} />
      <FeaturedProjectsSection />
      <ContactSection />
    </div>
  );
};

export default HomePage;
