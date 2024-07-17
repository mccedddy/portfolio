import React from "react";

function ProjectTile() {
  return (
    <div className="max-w-96 h-96 flex flex-col border">
      <div className="h-full p-2">Image</div>
      <div className="flex flex-col gap-2 border p-2">
        <h1>Title</h1>
        <h1>HTML, JavaScript, CSS</h1>
        <h1 className="text-justify">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </h1>
      </div>
    </div>
  );
}

export default ProjectTile;
