import "./skillsSection.scss";

import { useEffect, useState } from "react";

const SkillsSection = ({ getUrl, supabase }) => {
  const [featuredSkills, setFeaturedSkills] = useState([]);

  async function getFeaturedSkills() {
    const { data } = await supabase.from("skills").select();
    setFeaturedSkills(data);
  }

  useEffect(() => {
    getFeaturedSkills();
  }, []);

  return (
    <section id="skills_section">
      <div className="heading-container row-reverse">
        <h1>{location.pathname === "/about-me" ? "SKILLS" : "RELEVANT SKILLS"}</h1>
        <div className="heading-line"></div>
      </div>

      <div className="skills-container">
        {featuredSkills.map((skill, i) => {
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
