import React from "react";
import PropTypes from "prop-types";

const colorMapping = {
  HTML: "bg-customOrange",
  CSS: "bg-customBlue",
  JavaScript: "bg-customYellow",
  Python: "bg-customBlue-dark",
  PHP: "bg-customViolet-dark",
  "C#": "bg-customViolet-light",
  "C++": "bg-customBlue-dark",
  ReactJS: "bg-customBlue-light",
  Flutter: "bg-customBlue",
  "Tailwind CSS": "bg-customBlue-light",
  MySQL: "bg-customBlue-dark",
  Firebase: "bg-customYellow",
  Git: "bg-customOrange",
  Unity: "bg-zinc-800",
  Django: "bg-customGreen",
  Ganache: "bg-customYellow",
  Truffle: "bg-customOrange",
  Ethereum: "bg-slate-600",
  Solidity: "bg-slate-600",
  Android: "bg-customGreen",
  "VS Code": "bg-customBlue-light",
  Odoo: "bg-customViolet",
  Canva: "bg-customViolet",
  Excel: "bg-customGreen",
  XML: "bg-customOrange",
};

function SkillTile({ text, type = "skill" }) {
  const bgColor = colorMapping[text] || "bg-gray-300";

  if (type === "tag") {
    return (
      <div>
        <h1
          className={`rounded text-xs text-white p-1 font-bold ${bgColor} hover:-translate-y-1 transition-transform`}
        >
          {text}
        </h1>
      </div>
    );
  } else {
    return (
      <div className="hover:-translate-y-1 transition-transform rounded duration-200">
        <h1
          className={`text-sm rounded text-white p-2 font-bold shadow-light-s ${bgColor}`}
        >
          {text}
        </h1>
      </div>
    );
  }
}

SkillTile.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.string,
};

export default SkillTile;
