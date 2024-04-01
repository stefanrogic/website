import "./skillsSection.scss";

const SkillsSection = ({ getUrl }) => {
  const skills = [
    { name: "TypeScript", icon: "ts-icon.svg" },
    { name: "JavaScript", icon: "js-icon.svg" },
    { name: "React", icon: "react-icon.svg" },
    { name: "Redux", icon: "redux-icon.svg" },
    { name: "Sass", icon: "sass-icon.svg" },
    { name: "PostgreSQL", icon: "postre-icon.svg" },
    { name: "Firebase", icon: "firebase-icon.svg" },
    { name: "Figma", icon: "figma-icon.svg" },
    { name: "Framer Motion", icon: "framer-motion-icon.svg" },
    { name: "TailwindCSS", icon: "tailwind-icon.svg" },
    { name: "Bootstrap", icon: "bootstrap-icon.svg" },
  ];

  return (
    <section id="skills_section">
      <div className="heading-container row-reverse">
        <h1>SKILLS</h1>
        <div className="heading-line"></div>
      </div>

      <div className="skills-container">
        {skills.map((skill, i) => (
          <div className="skill" key={skill + i}>
            <img src={getUrl(`icons/${skill.icon}`)} alt="" />
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
