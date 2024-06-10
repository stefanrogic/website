import "./aboutSection.scss";

import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const AboutSection = ({ home = true }) => {
  return (
    <section id="about_section">
      {location.pathname === "/home" && (
        <div style={{ position: "relative" }}>
          <motion.div
            className="content-reveal"
            initial={{ height: "100%" }}
            animate={{
              height: 0,
              transitionEnd: {
                display: "none",
              },
            }}
            transition={{ duration: 0.5, delay: 1 }}
          ></motion.div>
          <p>
            Hello, my name is <span>Stefan</span>. <span>Frontend Developer</span> with <span>2+ years</span> of hands on experience. I specialize in designing easy-to-use interfaces for websites and web apps, prioritizing smooth user experience and
            engaging animations.
          </p>
        </div>
      )}

      {location.pathname === "/about-me" && (
        <div style={{ position: "relative" }}>
          <motion.div
            className="content-reveal"
            initial={{ height: "100%" }}
            animate={{
              height: 0,
              transitionEnd: {
                display: "none",
              },
            }}
            transition={{ duration: 0.5, delay: 1 }}
          ></motion.div>
          <p>
            Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words,
            combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
          </p>
        </div>
      )}

      <div className="button-container">
        {home && (
          <Link className="text-link" to="/about-me">
            <img
              src="https://tghpaytxnfphvnnbkghz.supabase.co/storage/v1/object/sign/icons/arrow-up.svg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpY29ucy9hcnJvdy11cC5zdmciLCJpYXQiOjE3MTc3NjQyOTgsImV4cCI6NDg3MTM2NDI5OH0.et4eJzEsyGb6veyt3OCzKpA3IHApk8urogAWHT9JBJY&t=2024-06-07T12%3A44%3A58.573Z"
              alt="arrow-up"
            />
            MORE DETAILS
          </Link>
        )}

        <Link className="text-link" to="/about-me">
          <img
            src="https://tghpaytxnfphvnnbkghz.supabase.co/storage/v1/object/sign/icons/arrow-up.svg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpY29ucy9hcnJvdy11cC5zdmciLCJpYXQiOjE3MTc3NjQyOTgsImV4cCI6NDg3MTM2NDI5OH0.et4eJzEsyGb6veyt3OCzKpA3IHApk8urogAWHT9JBJY&t=2024-06-07T12%3A44%3A58.573Z"
            alt="arrow-up"
          />
          MY PROJECTS
        </Link>

        <Link className="text-link inactive" to="#">
          <img
            src="https://tghpaytxnfphvnnbkghz.supabase.co/storage/v1/object/sign/icons/arrow-up-inactive.svg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpY29ucy9hcnJvdy11cC1pbmFjdGl2ZS5zdmciLCJpYXQiOjE3MTc3NjQzMzksImV4cCI6NDg3MTM2NDMzOX0.jrqWCKLKm4Ul60yYSzucUgZoho3mtsE98Vu7N2gBODY&t=2024-06-07T12%3A45%3A39.208Z"
            alt="arrow-up-inactive"
          />
          SERVICES
        </Link>
      </div>
    </section>
  );
};

export default AboutSection;
