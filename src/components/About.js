import React from "react";
import SkillTile from "./SkillTile";

function About() {
  return (
    <section className="w-full flex flex-col justify-center items-center p-4">
      <h1 className="text-4xl font-bold m-4">ABOUT ME</h1>
      <h1 className="max-w-2xl text-justify">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </h1>
      <div className="max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
        <div className="flex flex-col gap-4">
          <h1 className="text-justify text-2xl font-bold">SKILLS</h1>
          <div className="flex gap-4 flex-wrap border-b border-gray-600 pb-4">
            <SkillTile text="HTML" />
            <SkillTile text="CSS" />
            <SkillTile text="JavaScript" />
            <SkillTile text="Python" />
            <SkillTile text="PHP" />
            <SkillTile text="C#" />
            <SkillTile text="C++" />
          </div>
          <div className="flex gap-4 flex-wrap border-b border-gray-600 pb-4">
            <SkillTile text="ReactJS" />
            <SkillTile text="Tailwind CSS" />
            <SkillTile text="Flutter" />
            <SkillTile text="Unity" />
          </div>
          <div className="flex gap-4">
            <SkillTile text="MySQL" />
            <SkillTile text="Firebase" />
            <SkillTile text="Git" />
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="text-justify text-2xl font-bold">CAREER</h1>
          <h1 className="text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </h1>
          <h1 className="text-justify text-2xl font-bold">EDUCATION</h1>
          <h1 className="text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </h1>
        </div>
      </div>
    </section>
  );
}

export default About;
