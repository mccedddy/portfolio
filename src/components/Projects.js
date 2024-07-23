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
          date="2023 - 2024"
          tags={["HTML", "CSS", "JavaScript", "PHP", "MySQL", "C++", "Python"]}
          description="2FA attendance system using NFC and machine vision."
        />
        <ProjectTile
          title="Let Me Cook"
          date="2023 - 2024"
          tags={["Flutter", "Firebase"]}
          description="Social media application for sharing recipes."
        />
        <ProjectTile
          title="AidLedger"
          date="2024"
          tags={["Ethereum", "Truffle", "Ganache", "Solidity", "Django"]}
          description="Ethereum-based relief goods tracking system."
        />
        <ProjectTile
          title="Flappy Pet"
          date="2023"
          tags={["Unity", "C#"]}
          description="Flappy Bird clone."
        />
        <ProjectTile
          title="FOXEY"
          date="2022"
          tags={["Unity", "C#"]}
          description="2D platformer game."
        />
        <ProjectTile
          title="SHOOT"
          date="2022"
          tags={["Unity", "C#"]}
          description="An endless space shooter game."
        />
        <ProjectTile
          title="Correct Me"
          date="2022"
          tags={["Unity", "C#", "Android"]}
          description="A spelling quiz game."
        />
        <ProjectTile
          title="QuiZnake Escalade"
          date="2022"
          tags={["Unity", "C#", "Android"]}
          description="A board/quiz game inspired by Snakes and Ladders."
        />
      </div>
    </section>
  );
}

export default Projects;
