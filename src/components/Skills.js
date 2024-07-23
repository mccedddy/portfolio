import React from "react";
import SkillTile from "./SkillTile";

function About() {
  return (
    <section className="w-full flex flex-col justify-center items-center p-4">
      <h1 className="text-4xl font-bold m-4">SKILLS</h1>
      <div className="max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-6">
        <SkillTile
          heading="LANGUAGES"
          skills={["HTML", "CSS", "JavaScript", "Python", "PHP", "C#", "C++"]}
        />
        <SkillTile
          heading="FRAMEWORKS AND LIBRARIES"
          skills={["ReactJS", "Tailwind CSS", "Flutter"]}
        />
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
        <SkillTile heading="DATABASE" skills={["MySQL", "Firebase"]} />
      </div>
    </section>
  );
}

export default About;
