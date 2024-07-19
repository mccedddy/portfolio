import React from "react";
import SkillTile from "./SkillTile";
import WorkTile from "./WorkTile";
import SchoolTile from "./SchoolTile";

function About() {
  return (
    <section className="w-full flex flex-col justify-center items-center p-4">
      <h1 className="text-4xl font-bold m-4">ABOUT ME</h1>
      <h1 className="max-w-2xl text-slate-400 text-justify">
        I am a fresh graduate computer engineer specializing in website and web
        application development. I have expertise in both front-end and back-end
        development, with experience in SQL and NoSQL databases. Additionally, I
        have a background in game development using Unity and in designing
        embedded systems.
      </h1>
      <div className="max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        <div className="flex flex-col gap-4">
          <h1 className="text-center text-2xl font-bold">SKILLS</h1>
          <h1 className="text-justify text-lg font-bold">LANGUAGES</h1>
          <div className="flex gap-4 flex-wrap border-b border-slate-600 pb-4">
            <SkillTile text="HTML" />
            <SkillTile text="CSS" />
            <SkillTile text="JavaScript" />
            <SkillTile text="Python" />
            <SkillTile text="PHP" />
            <SkillTile text="C#" />
            <SkillTile text="C++" />
          </div>
          <h1 className="text-justify text-lg font-bold">DEV TOOLS</h1>
          <div className="flex gap-4 flex-wrap border-b border-slate-600 pb-4">
            <SkillTile text="ReactJS" />
            <SkillTile text="Tailwind CSS" />
            <SkillTile text="Flutter" />
            <SkillTile text="Unity" />
            <SkillTile text="Git" />
            <SkillTile text="VS Code" />
          </div>
          <h1 className="text-justify text-lg font-bold">DATABASES</h1>
          <div className="flex gap-4">
            <SkillTile text="MySQL" />
            <SkillTile text="Firebase" />
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="text-center text-2xl font-bold">CAREER</h1>
          <WorkTile
            role="Fullstack Developer Intern"
            company="Achieve Without Borders, Inc."
            date="Aug 2023 - Oct 2023"
            link="https://achievewithoutborders.com/"
            tags={["Odoo", "Python", "XML", "Flutter", "Git"]}
            work={[
              "Developed custom module for Odoo V16 and conducted benchmark tests.",
              "Followed Scrum methodology.",
              "Trained in web development using Flutter.",
              "Recognized for delivering consistently with team support, demonstrating potential for further growth through continued practice and skill development.",
            ]}
          />
          <WorkTile
            role="Digital Marketing Intern"
            company="I-Map Websolutions, Inc."
            date="Aug 2022 - Sept 2022"
            link="https://www.imapwebsolutions.com/"
            tags={["Canva", "Excel"]}
            work={[
              "Created publication materials for an e-commerce platform.",
              "Managed company files to ensure smooth business operations.",
            ]}
          />

          <h1 className="text-center text-2xl font-bold mt-4">EDUCATION</h1>
          <SchoolTile
            course="Bachelor of Science in Computer Engineering"
            school="Polytechnic University of the Philippines"
            grade="College"
            date="2020 - 2024"
            link="https://www.pup.edu.ph/"
          />
          <SchoolTile
            course="Science, Technology, Engineering, & Mathematics"
            school="University of Perpetual Help System DALTA - Molino"
            grade="Senior High School"
            date="2018 - 2020"
            link="https://perpetualdalta.edu.ph/"
          />
          <SchoolTile
            school="Divine Jesus Learning Center, Inc."
            grade="Junior High School"
            date="2014 - 2018"
            link="https://www.djlcinc.edu.ph/"
          />
        </div>
      </div>
    </section>
  );
}

export default About;
