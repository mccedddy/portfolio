import React, { useEffect } from "react";
import SkillTile from "./SkillTile";
import AOS from "aos";
import "aos/dist/aos.css";

function Skills() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <section
      className="w-full flex flex-col justify-center items-center p-4"
      data-aos="fade-up"
    >
      <h1 className="text-4xl font-bold m-4">SKILLS</h1>
      <h1 className="mb-4 text-textColor">
        These are the technologies that I work with.
      </h1>
      <div
        className="max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-6"
        data-aos="fade-up"
      >
        <div data-aos="fade-up">
          <SkillTile
            heading="LANGUAGES"
            skills={["HTML", "CSS", "JavaScript", "Python", "PHP", "C#", "C++"]}
          />
        </div>
        <div data-aos="fade-up">
          <SkillTile
            heading="FRAMEWORKS AND LIBRARIES"
            skills={[
              "ReactJS",
              "Tailwind CSS",
              "SASS",
              "Bootstrap",
              "Node JS",
              "Express",
              "Jest",
              "Flutter",
            ]}
          />
        </div>
        <div data-aos="fade-up">
          <SkillTile
            heading="TOOLS"
            skills={[
              "VS Code",
              "Git",
              "GitHub",
              "ChatGPT",
              "Figma",
              "Canva",
              "Unity",
            ]}
          />
        </div>
        <div data-aos="fade-up">
          <SkillTile heading="DATABASE" skills={["MySQL", "Firebase"]} />
        </div>
      </div>
    </section>
  );
}

export default Skills;
