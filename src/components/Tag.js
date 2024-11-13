import React, { useState } from "react";
import PropTypes from "prop-types";

import GitHubIcon from "../assets/icons/github.svg";
import GitHubDarkIcon from "../assets/icons/githubDark.svg";
import UnityIcon from "../assets/icons/unity.svg";
import DjangoIcon from "../assets/icons/django.svg";
import GanacheIcon from "../assets/icons/ganache.svg";
import TruffleIcon from "../assets/icons/truffle.svg";
import EthereumIcon from "../assets/icons/ethereum.svg";
import SolidityIcon from "../assets/icons/solidity.svg";
import OdooIcon from "../assets/icons/odoo.svg";
import ChatGPTIcon from "../assets/icons/chatgpt.svg";
import GmailIcon from "../assets/icons/gmail.svg";
import GmailDarkIcon from "../assets/icons/gmailDark.svg";
import LinkedInIcon from "../assets/icons/linkedin.svg";
import LinkedInDarkIcon from "../assets/icons/linkedinDark.svg";
import ExpressIcon from "../assets/icons/express.svg";

const skillMapping = {
  // CDN
  HTML: {
    color: "bg-customOrange",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
  },
  CSS: {
    color: "bg-customBlue-dark",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
  },
  JavaScript: {
    color: "bg-customYellow",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
  },
  TypeScript: {
    color: "bg-customBlue-dark",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
  },
  Python: {
    color: "bg-customBlue-dark",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
  },
  PHP: {
    color: "bg-customViolet-dark",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg",
  },
  "C#": {
    color: "bg-customViolet",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg",
  },
  "C++": {
    color: "bg-customBlue-dark",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg",
  },
  ReactJS: {
    color: "bg-customBlue-light",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
  },
  Flutter: {
    color: "bg-customBlue-light",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg",
  },
  "Tailwind CSS": {
    color: "bg-customBlue-light",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
  },
  MySQL: {
    color: "bg-customBlue-dark",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg",
  },
  Firebase: {
    color: "bg-customYellow",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original-wordmark.svg",
  },
  Git: {
    color: "bg-customOrange",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
  },
  Android: {
    color: "bg-customGreen",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/android/android-plain.svg",
  },
  "VS Code": {
    color: "bg-customBlue-light",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg",
  },
  Canva: {
    color: "bg-customBlue-light",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/canva/canva-original.svg",
  },
  Figma: {
    color: "bg-customOrange",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg",
  },
  SASS: {
    color: "bg-customPink",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg",
  },
  Jest: {
    color: "bg-customPink-dark",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jest/jest-plain.svg",
  },
  "Node JS": {
    color: "bg-customGreen",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg",
  },
  Bootstrap: {
    color: "bg-customBootstrap",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original-wordmark.svg",
  },
  Jira: {
    color: "bg-customBlue",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jira/jira-original-wordmark.svg",
  },
  Redux: {
    color: "bg-customViolet",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg",
  },

  // Custom Icons
  GitHub: { color: "bg-gray-600", icon: GitHubIcon },
  ChatGPT: { color: "bg-gray-600", icon: ChatGPTIcon },
  Odoo: { color: "bg-customViolet", icon: OdooIcon },
  Gmail: { color: "bg-customOrange", icon: GmailIcon },
  GmailDark: { color: "bg-customOrange", icon: GmailDarkIcon },
  LinkedIn: { color: "bg-customBlue", icon: LinkedInIcon },
  LinkedInDark: { color: "bg-customBlue", icon: LinkedInDarkIcon },
  GitHubDark: { color: "bg-gray-600", icon: GitHubDarkIcon },
  Unity: { color: "bg-gray-600", icon: UnityIcon },
  Django: { color: "bg-customGreen", icon: DjangoIcon },
  Ganache: { color: "bg-customYellow", icon: GanacheIcon },
  Truffle: { color: "bg-customOrange", icon: TruffleIcon },
  Ethereum: { color: "bg-gray-600", icon: EthereumIcon },
  Solidity: { color: "bg-gray-600", icon: SolidityIcon },
  Express: { color: "bg-gray-600", icon: ExpressIcon },
};

function Tag({ text, type = "skill", home = false }) {
  const [isHovered, setIsHovered] = useState(false);
  const skill = skillMapping[text] || {
    color: "bg-gray-300",
    icon: "https://via.placeholder.com/150",
  };

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  if (type === "tag") {
    return (
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="relative"
      >
        <img
          className={`hover:-translate-y-1 transition-transform ${
            home ? "h-8 w-8" : "h-6 w-6"
          }`}
          src={skill.icon}
          alt={text}
        />
        {isHovered && (
          <div
            className={`absolute top-full z-50 whitespace-nowrap left-1/2 transform -translate-x-1/2 mt-1 p-1 text-white text-xs font-bold rounded ${skill.color}`}
          >
            {text}
          </div>
        )}
      </div>
    );
  } else {
    return (
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="relative"
      >
        <img
          className="h-14 w-14 hover:-translate-y-1 transition-transform"
          src={skill.icon}
          alt={text}
        />
        {isHovered && (
          <div
            className={`absolute top-full z-50 whitespace-nowrap left-1/2 transform -translate-x-1/2 mt-1 p-1 text-center text-white text-xs font-bold rounded ${skill.color}`}
          >
            {text}
          </div>
        )}
      </div>
    );
  }
}

Tag.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.string,
};

export default Tag;
