import "./skillsSection.scss";

const SkillsSection = () => {
  return (
    <section id="skills_section">
      <div className="heading-container row-reverse">
        <h1>SKILLS</h1>
        <div className="heading-line"></div>
      </div>

      <div className="skills-container">
        {["TypeScript", "JavaScript", "React", "Redux", "Sass", "PostgreSQL", "Firebase", "Figma", "Framer Motion", "TailwindCSS", "Bootstrap"].map((skill, i) => (
          <div key={skill + i}>
            <p>{skill}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
