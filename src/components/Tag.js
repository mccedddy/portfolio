import React, { useState } from "react";
import PropTypes from "prop-types";

import HTMLIcon from "../assets/icons/html.svg";
import CSSIcon from "../assets/icons/css.svg";
import JavaScriptIcon from "../assets/icons/javascript.svg";
import PythonIcon from "../assets/icons/python.svg";
import PHPIcon from "../assets/icons/php.svg";
import CSharpIcon from "../assets/icons/csharp.svg";
import CPlusPlusIcon from "../assets/icons/cpp.svg";
import ReactJSIcon from "../assets/icons/reactjs.svg";
import FlutterIcon from "../assets/icons/flutter.svg";
import TailwindIcon from "../assets/icons/tailwindcss.svg";
import MySQLIcon from "../assets/icons/mysql.svg";
import FirebaseIcon from "../assets/icons/firebase.svg";
import GitIcon from "../assets/icons/git.svg";
import GitHubIcon from "../assets/icons/github.svg";
import GitHubDarkIcon from "../assets/icons/githubDark.svg";
import UnityIcon from "../assets/icons/unity.svg";
import DjangoIcon from "../assets/icons/django.svg";
import GanacheIcon from "../assets/icons/ganache.svg";
import TruffleIcon from "../assets/icons/truffle.svg";
import EthereumIcon from "../assets/icons/ethereum.svg";
import SolidityIcon from "../assets/icons/solidity.svg";
import AndroidIcon from "../assets/icons/android.svg";
import VSCodeIcon from "../assets/icons/vscode.svg";
import OdooIcon from "../assets/icons/odoo.svg";
import CanvaIcon from "../assets/icons/canva.svg";
import ChatGPTIcon from "../assets/icons/chatgpt.svg";
import FigmaIcon from "../assets/icons/figma.svg";
import GmailIcon from "../assets/icons/gmail.svg";
import GmailDarkIcon from "../assets/icons/gmailDark.svg";
import LinkedInIcon from "../assets/icons/linkedin.svg";
import LinkedInDarkIcon from "../assets/icons/linkedinDark.svg";

const skillMapping = {
  HTML: { color: "bg-customOrange", icon: HTMLIcon },
  CSS: { color: "bg-customBlue", icon: CSSIcon },
  JavaScript: { color: "bg-customYellow", icon: JavaScriptIcon },
  Python: { color: "bg-customBlue-dark", icon: PythonIcon },
  PHP: { color: "bg-customViolet-dark", icon: PHPIcon },
  "C#": { color: "bg-customViolet-light", icon: CSharpIcon },
  "C++": { color: "bg-customBlue-dark", icon: CPlusPlusIcon },
  ReactJS: { color: "bg-customBlue-light", icon: ReactJSIcon },
  Flutter: { color: "bg-customBlue-light", icon: FlutterIcon },
  "Tailwind CSS": { color: "bg-customBlue-light", icon: TailwindIcon },
  MySQL: { color: "bg-customBlue-dark", icon: MySQLIcon },
  Firebase: { color: "bg-customYellow", icon: FirebaseIcon },
  Git: { color: "bg-customOrange", icon: GitIcon },
  GitHub: { color: "bg-gray-600", icon: GitHubIcon },
  GitHubDark: { color: "bg-gray-600", icon: GitHubDarkIcon },
  Unity: { color: "bg-gray-600", icon: UnityIcon },
  Django: { color: "bg-customGreen", icon: DjangoIcon },
  Ganache: { color: "bg-customYellow", icon: GanacheIcon },
  Truffle: { color: "bg-customOrange", icon: TruffleIcon },
  Ethereum: { color: "bg-gray-600", icon: EthereumIcon },
  Solidity: { color: "bg-gray-600", icon: SolidityIcon },
  Android: { color: "bg-customGreen", icon: AndroidIcon },
  "VS Code": { color: "bg-customBlue-light", icon: VSCodeIcon },
  Odoo: { color: "bg-customViolet", icon: OdooIcon },
  Canva: { color: "bg-customBlue-light", icon: CanvaIcon },
  ChatGPT: { color: "bg-gray-600", icon: ChatGPTIcon },
  Figma: { color: "bg-customOrange", icon: FigmaIcon },
  Gmail: { color: "bg-customOrange", icon: GmailIcon },
  GmailDark: { color: "bg-customOrange", icon: GmailDarkIcon },
  LinkedIn: { color: "bg-customBlue", icon: LinkedInIcon },
  LinkedInDark: { color: "bg-customBlue", icon: LinkedInDarkIcon },
};

function Skill({ text, type = "skill", home = false }) {
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
            className={`absolute top-full whitespace-nowrap left-1/2 transform -translate-x-1/2 mt-1 p-1 text-white text-xs font-bold rounded ${skill.color}`}
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
            className={`absolute top-full whitespace-nowrap left-1/2 transform -translate-x-1/2 mt-1 p-1 text-center text-white text-xs font-bold rounded ${skill.color}`}
          >
            {text}
          </div>
        )}
      </div>
    );
  }
}

Skill.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.string,
};

export default Skill;
