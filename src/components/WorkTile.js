import React from "react";
import PropTypes from "prop-types";
import SkillTile from "./SkillTile";

function WorkTile({ role, company, date, link, tags, work }) {
  return (
    <div className="flex flex-col p-4 bg-customDark border border-slate-800 shadow-light-s rounded-lg hover:scale-105 transition-transform duration-200">
      <div className="flex flex-col flex-wrap sm:flex-row sm:justify-between sm:items-center mb-2">
        <div className="flex flex-col">
          <h1 className="text-lg font-bold">{role}</h1>
          <a href={link} className="text-sm italic mb-1 hover:underline">
            {company}
          </a>
        </div>
        <h1 className="text-xs bg-slate-600 rounded-xl px-2 py-1 inline-flex items-center mt-2 sm:mt-0">
          {date}
        </h1>
      </div>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag, index) => (
          <SkillTile key={index} text={tag} type="tag" />
        ))}
      </div>
      <div className="w-full pt-2 border-b border-slate-600"></div>
      <ul className="text-sm pt-2 pl-4 list-disc">
        {work.map((item, index) => (
          <li key={index}>
            <h1 className="text-slate-400">{item}</h1>
          </li>
        ))}
      </ul>
    </div>
  );
}

WorkTile.propTypes = {
  role: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  work: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default WorkTile;
