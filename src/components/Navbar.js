import React from "react";

function Navbar() {
  return (
    <nav className="w-full p-4 border-b border-gray-800 flex justify-between fixed top-0 left-0 bg-customDarkest z-10">
      <a href="#home">C</a>
      <div className="flex gap-4">
        <a
          href="#home"
          className="hover:-translate-y-1 transition-transform hover:text-customOrange"
        >
          HOME
        </a>
        <a
          href="#about"
          className="hover:-translate-y-1 transition-transform hover:text-customBlue"
        >
          ABOUT ME
        </a>
        <a
          href="#skills"
          className="hover:-translate-y-1 transition-transform hover:text-customViolet-light"
        >
          SKILLS
        </a>
        <a
          href="#projects"
          className="hover:-translate-y-1 transition-transform hover:text-customYellow"
        >
          PROJECTS
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
