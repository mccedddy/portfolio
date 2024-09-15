import React from "react";
import Tag from "./Tag";

function ProjectModal({ project, toggleModal }) {
  if (!project) return null;

  const { title, date, tags, longDescription, link } = project;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      onClick={toggleModal}
    >
      <div
        className="inline-flex flex-col m-2 md:flex-row lg:flex-row justify-center gap-4 bg-tile border-2 border-tile border-t-tile-light p-5 rounded-lg shadow-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="h-full w-full lg:w-1/2 md:w-1/2 sm:h-96 flex justify-center align-center">
          <img
            src={require(`../assets/images/${title
              .toLowerCase()
              .replace(/\s/g, "")}/1.png`)}
            alt={title}
            className="h-full w-full bg-black object-contain rounded"
          />
        </div>
        <div className="w-full lg:w-96 md:w-1/2">
          <div className="flex gap-4 justify-between items-center">
            <h1 className="font-bold text-lg">{title}</h1>
            <h1 className="text-xs text-textColor-dark">{date}</h1>
          </div>
          <h1 className="text-xs text-textColor text-justify mb-2">
            {longDescription}
          </h1>
          {link && (
            <div className="flex gap-2">
              <h1 className="text-sm text-textColor">Visit:</h1>
              <a
                href={link}
                className="text-sm text-textColor hover:text-textColor-light hover:underline"
              >
                {title}
              </a>
            </div>
          )}
          <div className="flex flex-wrap gap-2 mt-4">
            {tags.map((tag, index) => (
              <Tag key={index} text={tag} type="tag" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectModal;
