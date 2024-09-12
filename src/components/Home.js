import React, { useState } from "react";
// import IconsGrid from "./IconsGrid";
import Tag from "./Tag";

function Home() {
  const [gmailText, setGmailText] = useState("GmailDark");
  const [linkedinText, setLinkedinText] = useState("LinkedInDark");
  const [githubText, setGithubText] = useState("GitHubDark");

  return (
    <section className="flex flex-col justify-center items-center p-4 flex-grow">
      <div>
        <h1 className="text-textColor text-lg">Hi! I'm</h1>
        <h1 className="text-4xl font-bold">DANIEL JOHN CEDRIC MACALLAN</h1>
        <h1 className="text-textColor text-lg">Web Developer</h1>

        <div className="flex gap-3 mt-2">
          {/* Gmail */}
          <a
            href="mailto:cedricmacallan@gmail.com"
            target="_blank"
            rel="noreferrer noopener"
            onMouseEnter={() => setGmailText("Gmail")}
            onMouseLeave={() => setGmailText("GmailDark")}
          >
            <Tag text={gmailText} type="tag" home />
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/daniel-john-cedric-macallan-804254249/"
            target="_blank"
            rel="noreferrer noopener"
            onMouseEnter={() => setLinkedinText("LinkedIn")}
            onMouseLeave={() => setLinkedinText("LinkedInDark")}
          >
            <Tag text={linkedinText} type="tag" home />
          </a>

          {/* GitHub */}
          <a
            href="https://www.github.com/mccedddy"
            target="_blank"
            rel="noreferrer noopener"
            onMouseEnter={() => setGithubText("GitHub")}
            onMouseLeave={() => setGithubText("GitHubDark")}
          >
            <Tag text={githubText} type="tag" home />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Home;
