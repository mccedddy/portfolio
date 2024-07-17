import React from "react";
import ProjectTile from "./ProjectTile";

function Projects() {
  return (
    <div className="w-full h-5/6 flex flex-col justify-center items-center border">
      <h1 className="text-4xl font-bold m-4">Projects</h1>
      <div className="max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-4 m-4">
        <ProjectTile />
        <ProjectTile />
        <ProjectTile />
        <ProjectTile />
      </div>
    </div>
  );
}

export default Projects;
