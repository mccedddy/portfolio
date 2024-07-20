import React from "react";
import PropTypes from "prop-types";
import Tag from "./Tag";

function SkillTile({ heading, skills }) {
  return (
    <div className="flex flex-col p-4 hover:bg-customDark hover:border border-slate-800 hover:shadow-light-s rounded-lg hover:scale-105 transition-transform duration-200">
      <div>
        <div className="flex flex-col">
          <h1 className="text-lg font-bold">{heading}</h1>
        </div>
        <div className="w-full my-2 border-b border-slate-600"></div>
        <div className="flex flex-wrap gap-2 mt-4">
          {skills.map((skill, index) => (
            <Tag key={index} text={skill} />
          ))}
        </div>
      </div>
    </div>
  );
}

SkillTile.propTypes = {
  role: PropTypes.string,
  company: PropTypes.string,
  date: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string),
  work: PropTypes.arrayOf(PropTypes.string),
  course: PropTypes.string,
  school: PropTypes.string.isRequired,
  grade: PropTypes.string,
  type: PropTypes.oneOf(["work", "school"]).isRequired,
};

export default SkillTile;
