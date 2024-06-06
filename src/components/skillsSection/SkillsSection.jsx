import "./skillsSection.scss";

import { useEffect, useState } from "react";

const SkillsSection = ({ supabase, relevant = true }) => {
  const [featuredSkills, setFeaturedSkills] = useState([]);

  const getFeaturedSkills = async (q) => {
    const { data } = await supabase.from("skills").select(q).order("id", { ascending: true });
    setFeaturedSkills(data);
  };

  useEffect(() => {
    getFeaturedSkills("title,img_url,relevant");
  }, []);

  return (
    <section id="skills_section">
      <div className="heading-container row-reverse">
        <h1>{location.pathname === "/about-me" ? "SKILLS" : "RELEVANT SKILLS"}</h1>
        <div className="heading-line"></div>
      </div>

      <div className="skills-container">
        {featuredSkills.map((skill, i) => {
          if (relevant && skill.relevant)
            return (
              <div className="skill" key={skill + i}>
                <img src={skill.img_url} alt="" />
                <span className="span-nounderline">{skill.title}</span>
              </div>
            );

          if (!relevant)
            return (
              <div className="skill" key={skill + i}>
                <img src={skill.img_url} alt="" />
                <span className="span-nounderline">{skill.title}</span>
              </div>
            );
        })}
      </div>
    </section>
  );
};

export default SkillsSection;
