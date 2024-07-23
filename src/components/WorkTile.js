import React from "react";
import PropTypes from "prop-types";
import Tag from "./Tag";

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
    <div className="flex flex-col p-4 hover:bg-tile rounded-lg hover:scale-105 transition-transform duration-200">
      {type === "work" ? (
        <div>
          <div className="flex flex-col">
            <h1 className="text-lg font-bold">{role}</h1>
            <div className="flex flex-wrap justify-between items-center">
              <a
                href={link}
                className="text-sm text-textColor italic mb-1 hover:underline"
              >
                {company}
              </a>
              <h1 className="text-xs text-textColor-dark text-slate-400">
                {date}
              </h1>
            </div>
          </div>

          <div className="w-full pt-2 border-b border-slate-600"></div>
          <ul className="text-sm pt-2 pl-4 list-disc">
            {work.map((item, index) => (
              <li key={index}>
                <h1 className="text-textColor">{item}</h1>
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-2 mt-2 pl-4">
            {tags.map((tag, index) => (
              <Tag key={index} text={tag} type="tag" />
            ))}
          </div>
        </div>
      ) : (
        <div>
          <div className="flex flex-col">
            <h1 className="text-lg font-bold">{school}</h1>
            <div className="flex flex-wrap justify-between items-center">
              <a href={link} className="text-sm italic mb-1 hover:underline">
                {grade}
              </a>
              <h1 className="text-xs text-textColor-dark">{date}</h1>
            </div>
          </div>

          <div className="w-full pt-2 border-b border-slate-600"></div>
          <h1 className="text-textColor text-sm pt-2">{course}</h1>
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
