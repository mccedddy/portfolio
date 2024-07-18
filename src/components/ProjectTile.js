import React from "react";

function ProjectTile({ image = "Image", title, date, tags, description }) {
  return (
    <div className="max-w-96 min-w-64 h-96 flex flex-col border">
      <div className="h-full p-2">{image}</div>
      <div className="flex flex-col gap-2 border p-2">
        <div className="flex justify-between">
          <h1>{title}</h1>
          <h1>{date}</h1>
        </div>
        <h1>{tags}</h1>
        <h1 className="text-justify">{description}</h1>
      </div>
    </div>
  );
}

export default ProjectTile;
