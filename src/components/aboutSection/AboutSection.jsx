import "./aboutSection.scss";

import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const AboutSection = ({ getUrl, home = true }) => {
  return (
    <section id="about_section">
      <motion.p initial={{ rotate: 2, y: 50 }} animate={{ rotate: 0, y: 0 }} transition={{ duration: 0.5 }}>
        Hello, my name is <span>Stefan</span>. There are many variations of passages of <span>Lorem Ipsum</span> available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly
        believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything.
      </motion.p>

      <motion.p initial={{ rotate: 2, y: 50 }} animate={{ rotate: 0, y: 0 }} transition={{ duration: 0.5 }}>
        Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words,
        combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
      </motion.p>

      {home && (
        <Link to="/about-me">
          <img src={getUrl("icons/arrow-up.svg")} alt="arrow-up" />
          MORE DETAILS
        </Link>
      )}
    </section>
  );
};

export default AboutSection;
