import React from "react";
import Tag from "./Tag";

function ProjectTile({ title, date, tags, description, toggleModal }) {
  const folderName = title.toLowerCase().replace(/\s/g, "");

  let defaultImage;
  try {
    try {
      defaultImage = require(`../assets/projects/${folderName}/default.png`);
    } catch (error) {
      defaultImage = require(`../assets/projects/${folderName}/1.png`);
    }
  } catch (error) {
    defaultImage = "https://via.placeholder.com/150";
  }

  return (
    <>
      <div
        className="max-w-96 min-w-64 max-h-96 flex flex-col hover:shadow hover:border-y-2 border-t-tile-light border-b-tile border border-tile bg-light hover:bg-tile hover:cursor-pointer rounded-lg hover:scale-105 transition-transform duration-200"
        onClick={toggleModal}
      >
        <div className="h-64 w-full flex justify-center align-center">
          <img
            src={defaultImage}
            alt={title}
            className="h-full w-full m-2 pb-2 object-cover rounded"
          />
        </div>
        <div className="flex flex-col p-2 rounded-b-lg">
          <div className="flex justify-between items-center">
            <h1 className="font-bold text-lg">{title}</h1>
            <h1 className="text-xs text-textColor-dark">{date}</h1>
          </div>
          <h1 className="text-sm text-textColor text-justify m-0">
            {description}
          </h1>
          <div className="flex flex-wrap gap-2 mt-2">
            {tags.map((tag, index) => (
              <Tag key={index} text={tag} type="tag" />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectTile;
