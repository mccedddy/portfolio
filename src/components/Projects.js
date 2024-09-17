import React, { useEffect } from "react";
import ProjectTile from "./ProjectTile";
import AOS from "aos";
import "aos/dist/aos.css";
import projects from "../assets/projects/projects.json";

function Projects({ toggleModal }) {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <section
      className="w-full h-5/6 flex flex-col justify-center items-center p-4"
      data-aos="fade-up"
    >
      <h1 className="text-4xl font-bold m-4">PROJECTS</h1>
      <h1 className="mb-4 text-textColor">
        Here are a few projects that I've worked on.
      </h1>
      <div
        className="w-5xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
        data-aos="fade-up"
      >
        {projects.map((project, index) => (
          <div key={index}>
            <ProjectTile
              {...project}
              toggleModal={() => toggleModal(project)}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
