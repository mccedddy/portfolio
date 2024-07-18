import React from "react";
import ProjectTile from "./ProjectTile";

function Projects() {
  return (
    <section className="w-full h-5/6 flex flex-col justify-center items-center p-4">
      <h1 className="text-4xl font-bold m-4">PROJECTS</h1>
      <h1 className="mb-4">Here are a few projects that I've worked on.</h1>
      <div className="max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-4">
        <ProjectTile
          title="2FA Attendance System"
          date="2023-2024"
          tags="HTML, CSS, JavaScrip, PHP, MySQL, C++"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
        <ProjectTile
          title="Let Me Cook"
          date="2023-2024"
          tags="Flutter, Firebase"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
        <ProjectTile
          title="AidLedger"
          date="2024"
          tags="Ethereum, Truffle, Ganache, Solidity, Django"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
        <ProjectTile
          title="Flappy Pet"
          date="2023"
          tags="Unity, C#"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
        <ProjectTile
          title="FOXEY"
          date="2022"
          tags="Unity, C#"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
        <ProjectTile
          title="SHOOT"
          date="2022"
          tags="Unity, C#"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
        <ProjectTile
          title="Correct Me"
          date="2022"
          tags="Unity, C#"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
        <ProjectTile
          title="QuiZnake Escalade"
          date="2022"
          tags="Unity, C#"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
      </div>
    </section>
  );
}

export default Projects;
