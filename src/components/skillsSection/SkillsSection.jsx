import "./skillsSection.scss";

import { Suspense, useState } from "react";

import ContentRevealSuper from "../contentReveal/ContentRevealSuper";
import HeadingLine from "../headingLine/HeadingLine";

const SkillsSection = ({ relevant = true }) => {
  const [featuredSkills] = useState([
    {
      name: "Next.js",
      image: "/icons/nextjs-icon.svg",
      relevant: true,
    },
    {
      name: "React",
      image: "/icons/react-icon.svg",
      relevant: true,
    },
    {
      name: "Typescript",
      image: "/icons/ts-icon.svg",
      relevant: true,
    },
    {
      name: "Javascript",
      image: "/icons/js-icon.svg",
      relevant: true,
    },
    {
      name: "Redux",
      image: "/icons/redux-icon.svg",
      relevant: true,
    },
    {
      name: "Sass",
      image: "/icons/sass-icon.svg",
      relevant: true,
    },
    {
      name: "MongoDB",
      image: "/icons/mongo-db-icon.svg",
      relevant: true,
    },
    {
      name: "Supabase",
      image: "/icons/supabase-icon.svg",
      relevant: true,
    },
    {
      name: "Firebase",
      image: "/icons/firebase-icon.svg",
      relevant: false,
    },
  ]);

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
                    <img src={skill.image} alt="#" />
                    <span className="span-nounderline">{skill.name}</span>
                  </div>
                </ContentRevealSuper>
              );

            if (!relevant)
              return (
                <ContentRevealSuper key={skill + i}>
                  <div className="skill">
                    <img src={skill.image} alt="#" />
                    <span className="span-nounderline">{skill.name}</span>
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
