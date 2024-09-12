import React from "react";

function Navbar() {
  return (
    <nav className="w-full p-4 flex justify-end absolute" id="home">
      <div className="flex gap-4">
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
