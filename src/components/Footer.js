import React from "react";

function Footer() {
  return (
    <section className="w-full flex flex-col justify-center items-center p-4 bg-customDarkest border-t border-slate-800">
      <h1 className="max-w-5xl text-center text-xs text-slate-500">
        This website is made by{" "}
        <a
          className="text-slate-400 hover:text-slate-200"
          href="github.com/mccedddy"
        >
          Daniel John Cedric Macallan
        </a>
        . Built with{" "}
        <a
          className="text-slate-400 hover:text-customBlue-light"
          href="https://react.dev/"
        >
          ReactJS
        </a>{" "}
        and{" "}
        <a
          className="text-slate-400 hover:text-customBlue-light"
          href="https://tailwindcss.com/"
        >
          Tailwind CSS
        </a>
        , deployed with{" "}
        <a
          className="text-slate-400 hover:text-slate-200"
          href="https://pages.github.com/"
        >
          GitHub Pages
        </a>
        . All text is set in the{" "}
        <a
          className="text-slate-400 hover:text-slate-200"
          href="https://rsms.me/inter/"
        >
          Inter
        </a>{" "}
        typeface. All icons are from{" "}
        <a
          className="text-slate-400 hover:text-customGreen"
          href="https://devicon.dev/"
        >
          devicon.dev
        </a>
        .
      </h1>
    </section>
  );
}

export default Footer;
