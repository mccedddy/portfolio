import React from "react";
import PropTypes from "prop-types";
import SkillTile from "./SkillTile";

function WorkTile({ course, school, grade, date, link }) {
  return (
    <div className="flex flex-col p-4 bg-customDark border border-slate-800 shadow-light-s rounded-lg hover:scale-105 transition-transform duration-200">
      <div className="flex justify-between align-center">
        <h1 className="text-lg font-bold">{grade}</h1>
        <h1 className="text-xs bg-slate-600 rounded-xl px-2 py-1 inline-flex items-center mt-2 sm:mt-0">
          {date}
        </h1>
      </div>
      <div className="w-full pt-2 mb-2 border-b border-slate-600"></div>
      <a href={link} className="text-lg font-bold hover:underline">
        {school}
      </a>
      <h1 className="text-sm italic">{course}</h1>
    </div>
  );
}

WorkTile.propTypes = {
  role: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  work: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default WorkTile;
