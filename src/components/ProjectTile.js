import React from "react";
import Tag from "./Tag";

function ProjectTile({
  image = "https://via.placeholder.com/150",
  title,
  date,
  tags,
  description,
}) {
  return (
    <div className="max-w-96 min-w-64 max-h-96 flex flex-col bg-tile hover:bg-tile-light hover:cursor-pointer rounded-lg hover:scale-105 transition-transform duration-200">
      <div className="h-64 w-full">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover rounded-t-lg"
        />
      </div>
      <div className="flex flex-col gap-2 p-2 rounded-b-lg">
        <div className="flex justify-between items-center">
          <h1 className="font-bold text-lg">{title}</h1>
          <h1 className="text-xs text-textColor-dark">{date}</h1>
        </div>
        <h1 className="text-sm text-textColor text-justify">{description}</h1>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <Tag key={index} text={tag} type="tag" />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectTile;
