import "./homePage.scss";

import AboutSection from "../../components/aboutSection/AboutSection";
import SkillsSection from "../../components/skillsSection/SkillsSection";
import FeaturedProjectsSection from "../../components/featuredProjectsSection/FeaturedProjectsSection";
import ContactSection from "../../components/contactSection/ContactSection";

import { motion } from "framer-motion";

const HomePage = () => {
  return (
    <motion.div className="home" id="home" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.5 }}>
      <AboutSection />
      <SkillsSection relevant={true} />
      <FeaturedProjectsSection />
      <ContactSection />
    </motion.div>
  );
};

export default HomePage;
