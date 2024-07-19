import React from "react";
import SkillTile from "./SkillTile";

function ProjectTile({ image = "Image", title, date, tags, description }) {
  return (
    <div className="max-w-96 min-w-64 h-96 flex flex-col border border-slate-800 hover:shadow-light-s rounded-lg hover:scale-105 transition-transform duration-200">
      <div className="h-full p-2">
        <h1>{image}</h1>
      </div>
      <div className="flex flex-col gap-2 border border-slate-800 p-2 bg-customDark rounded-b-lg">
        <div className="flex justify-between items-center">
          <h1 className="font-bold text-lg">{title}</h1>
          <h1 className="text-xs text-slate-400">{date}</h1>
        </div>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <SkillTile key={index} text={tag} type="tag" />
          ))}
        </div>
        <h1 className="text-slate-400 text-justify">{description}</h1>
      </div>
    </div>
  );
}

export default ProjectTile;
