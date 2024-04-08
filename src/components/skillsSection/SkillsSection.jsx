import "./skillsSection.scss";

const SkillsSection = ({ getUrl }) => {
  const skills = [
    { name: "React", icon: "react-icon.svg" },
    { name: "TypeScript", icon: "ts-icon.svg" },
    { name: "JavaScript", icon: "js-icon.svg" },
    { name: "Redux", icon: "redux-icon.svg" },
    { name: "Sass", icon: "sass-icon.svg" },
    location.pathname === "/about-me" && { name: "PostgreSQL", icon: "postgre-icon.svg" },
    location.pathname === "/about-me" && { name: "Firebase", icon: "firebase-icon.svg" },
    { name: "Figma", icon: "figma-icon.svg" },
    { name: "Framer Motion", icon: "framer-motion-icon.svg" },
    { name: "TailwindCSS", icon: "tailwind-icon.svg" },
    location.pathname === "/about-me" && { name: "Bootstrap", icon: "bootstrap-icon.svg" },
  ];

  return (
    <section id="skills_section">
      <div className="heading-container row-reverse">
        <h1>{location.pathname === "/about-me" ? "SKILLS" : "RELEVANT SKILLS"}</h1>
        <div className="heading-line"></div>
      </div>

      <div className="skills-container">
        {skills.map((skill, i) => {
          if (skill)
            return (
              <div className="skill" key={skill + i}>
                <img src={getUrl(`icons/${skill.icon}`)} alt="" />
                <span className="span-nounderline">{skill.name}</span>
              </div>
            );
        })}
      </div>
    </section>
  );
};

export default SkillsSection;
