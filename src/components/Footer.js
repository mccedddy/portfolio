import React from "react";

function Footer() {
  return (
    <section className="w-full flex flex-col justify-center items-center p-4 bg-customDarkest border-t border-gray-800">
      <h1 className="max-w-5xl text-center text-xs text-gray-500">
        This website is made by{" "}
        <a className="text-gray-400" href="github.com/mccedddy">
          Daniel John Cedric Macallan
        </a>
        . Built with{" "}
        <a className="text-gray-400" href="https://react.dev/">
          ReactJS
        </a>{" "}
        and{" "}
        <a className="text-gray-400" href="https://tailwindcss.com/">
          Tailwind CSS
        </a>
        , deployed with{" "}
        <a className="text-gray-400" href="https://pages.github.com/">
          GitHub Pages
        </a>
        . All text is set in the{" "}
        <a className="text-gray-400" href="https://rsms.me/inter/">
          Inter
        </a>{" "}
        typeface.
      </h1>
    </section>
  );
}

export default Footer;
