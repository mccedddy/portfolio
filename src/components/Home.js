import React from "react";
// import IconsGrid from "./IconsGrid";
import Tag from "./Tag";

function Home() {
  return (
    <section className="flex flex-col justify-center items-center p-4 flex-grow">
      <div>
        <h1 className="text-textColor text-xl">Hi! I'm</h1>
        <h1 className="text-4xl font-bold">DANIEL JOHN CEDRIC MACALLAN</h1>
        <h1 className="text-textColor text-xl">Web Developer</h1>

        <div className="flex gap-3 mt-2">
          <a href="mailto:cedricmacallan@gmail.com" target="_blank">
            <Tag text="Gmail" type="tag" home />
          </a>
          <a
            href="https://www.linkedin.com/in/daniel-john-cedric-macallan-804254249/"
            target="_blank"
          >
            <Tag text="LinkedIn" type="tag" home />
          </a>
          <a href="https://www.github.com/mccedddy" target="_blank">
            <Tag text="GitHub" type="tag" home />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Home;
