import React from "react";
import PropTypes from "prop-types";
import SkillTile from "./SkillTile";

function WorkTile({
  role,
  company,
  date,
  link,
  tags,
  work,
  course,
  school,
  grade,
  type,
}) {
  return (
    <div className="flex flex-col p-4 hover:bg-customDark hover:border border-slate-800 hover:shadow-light-s rounded-lg hover:scale-105 transition-transform duration-200">
      {type === "work" ? (
        <div>
          <div className="flex flex-col flex-wrap sm:flex-row sm:justify-between sm:items-center mb-2">
            <div className="flex flex-col">
              <h1 className="text-lg font-bold">{role}</h1>
              <a href={link} className="text-sm italic mb-1 hover:underline">
                {company}
              </a>
            </div>
            <h1 className="text-xs text-slate-400">{date}</h1>
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
      ) : (
        <div>
          <div className="flex justify-between items-center">
            <h1 className="text-lg font-bold">{grade}</h1>
            <h1 className="text-xs text-slate-400">{date}</h1>
          </div>
          <div className="w-full pt-2 mb-2 border-b border-slate-600"></div>
          <a href={link} className="text-lg font-bold hover:underline">
            {school}
          </a>
          {course && <h1 className="text-sm italic">{course}</h1>}
        </div>
      )}
    </div>
  );
}

WorkTile.propTypes = {
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

export default WorkTile;
