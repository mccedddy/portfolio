import React from "react";

function Navbar() {
  return (
    <nav className="w-full p-4 border-b flex justify-between">
      <a href="https://www.github.com/mccedddy">C</a>
      <div className="flex gap-4">
        <button>HOME</button>
        <button>ABOUT ME</button>
        <button>PROJECTS</button>
      </div>
    </nav>
  );
}

export default Navbar;
