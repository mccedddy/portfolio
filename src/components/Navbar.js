import React from "react";

function Navbar() {
  return (
    <nav className="w-full p-4 border-b border-gray-800 flex justify-between fixed top-0 left-0 bg-customDarkest z-10">
      <a href="#home">C</a>
      <div className="flex gap-4">
        <a href="#home">HOME</a>
        <a href="#about">ABOUT ME</a>
        <a href="#projects">PROJECTS</a>
      </div>
    </nav>
  );
}

export default Navbar;
