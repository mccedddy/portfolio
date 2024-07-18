import React from "react";

function Footer() {
  return (
    <section className="w-full flex flex-col justify-center items-center p-4 border">
      <h1 className="max-w-5xl text-center">
        This website is made by{" "}
        <a className="font-bold" href="github.com/mccedddy">
          Daniel John Cedric Macallan
        </a>
        . Built with{" "}
        <a className="font-bold" href="https://react.dev/">
          ReactJS
        </a>{" "}
        and{" "}
        <a className="font-bold" href="https://tailwindcss.com/">
          Tailwind CSS
        </a>
        , deployed with{" "}
        <a className="font-bold" href="https://pages.github.com/">
          GitHub Pages
        </a>
        .
      </h1>
    </section>
  );
}

export default Footer;
