import "./skillsSection.scss";

import { supabase } from "../../supabaseClient";
import { Suspense, useEffect, useState } from "react";

import ContentRevealSuper from "../contentReveal/ContentRevealSuper";
import HeadingLine from "../headingLine/HeadingLine";

const SkillsSection = ({ relevant = true }) => {
  const [featuredSkills, setFeaturedSkills] = useState([]);

  const getFeaturedSkills = async (q) => {
    const { data } = await supabase.from("skills").select(q).order("id", { ascending: true });
    setFeaturedSkills(data);
  };

  useEffect(() => {
    getFeaturedSkills("title,img_url,relevant");
  }, []);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <section id="skills_section">
        <div className="heading-container row-reverse">
          <ContentRevealSuper>
            <h1>{location.pathname === "/about-me" ? "SKILLS" : "RELEVANT SKILLS"}</h1>
          </ContentRevealSuper>
          <HeadingLine />
        </div>

        <div className="skills-container" style={{ minHeight: relevant ? "85px" : "135px" }}>
          {featuredSkills?.map((skill, i) => {
            if (relevant && skill.relevant)
              return (
                <ContentRevealSuper key={skill + i}>
                  <div className="skill">
                    <img src={skill.img_url} alt="#" />
                    <span className="span-nounderline">{skill.title}</span>
                  </div>
                </ContentRevealSuper>
              );

            if (!relevant)
              return (
                <ContentRevealSuper key={skill + i}>
                  <div className="skill">
                    <img src={skill.img_url} alt="#" />
                    <span className="span-nounderline">{skill.title}</span>
                  </div>
                </ContentRevealSuper>
              );
          })}
        </div>
      </section>
    </Suspense>
  );
};

export default SkillsSection;
