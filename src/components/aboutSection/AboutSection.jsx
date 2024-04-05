import "./aboutSection.scss";

import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const AboutSection = ({ getUrl, home = true }) => {
  return (
    <section id="about_section">
      <motion.p initial={{ opacity: 0, rotate: 2, y: 50 }} animate={{ opacity: 1, rotate: 0, y: 0 }} transition={{ duration: 0.5 }}>
        Hello, my name is <span>Stefan</span>. <span>Fronteld Developer</span> specializing in <span>React</span>, with <span>2 years+</span> of hands on experience in crafting dynamic and visually stunning websites.
      </motion.p>

      {location.pathname === "/about-me" && (
        <motion.p initial={{ opacity: 0, rotate: 2, y: 50 }} animate={{ opacity: 1, rotate: 0, y: 0 }} transition={{ duration: 0.5 }}>
          Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words,
          combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
        </motion.p>
      )}

      <div className="button-container">
        {home && (
          <Link className="text-link" to="/about-me">
            <img src={getUrl("icons/arrow-up.svg")} alt="arrow-up" />
            MORE DETAILS
          </Link>
        )}

        <Link className="text-link inactive" to="#">
          <img src={getUrl("icons/arrow-up-inactive.svg")} alt="arrow-up" />
          SERVICES
        </Link>
      </div>
    </section>
  );
};

export default AboutSection;
