import React from "react";
import DJCMTheme from "../assets/icons/DJCMTheme.svg";

function Navbar() {
  return (
    <nav
      className="w-full p-4 flex justify-between items-center absolute"
      id="home"
    >
      <img src={DJCMTheme} alt="DJCM Logo" className="h-8 w-8" />
      <div className="flex items-center gap-4">
        <a
          href="#about"
          className="hover:-translate-y-1 transition-transform text-textColor hover:text-customBlue"
        >
          ABOUT ME
        </a>
        <a
          href="#skills"
          className="hover:-translate-y-1 transition-transform text-textColor hover:text-customViolet-light"
        >
          SKILLS
        </a>
        <a
          href="#projects"
          className="hover:-translate-y-1 transition-transform text-textColor hover:text-customYellow"
        >
          PROJECTS
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
