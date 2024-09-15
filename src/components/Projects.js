import React, { useEffect } from "react";
import ProjectTile from "./ProjectTile";
import AOS from "aos";
import "aos/dist/aos.css";

function Projects({ toggleModal }) {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  const projects = [
    {
      title: "My Wallet",
      date: "2024",
      tags: ["HTML", "ReactJS", "Tailwind CSS", "Firebase"],
      description: "My Wallet is a web application for tracking wallets.",
      longDescription: `My Wallet is a web application designed to help users track their wallets more efficiently. Users can create multiple wallets and record their values, enabling them to track the growth of their wallets or bank accounts over time. The application features a graph for visualizing growth, providing a clear and intuitive way to monitor financial progress.

I developed My Wallet for personal use because I used to record my financial data in a simple notepad. This new method is not only more efficient but also a significantly more effective solution for financial tracking and management.`,
      link: "https://mccedddy-my-wallet.web.app/",
    },
    {
      title: "2FA Attendance System",
      date: "2023 - 2024",
      tags: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "C++", "Python"],
      description: "2FA attendance system using NFC and machine vision.",
      longDescription: `The system utilizes an ESP32 equipped with an RC522 NFC scanner for recording attendance and a Raspberry Pi 4B for facial recognition and attendance verification.

On the website, admins can register students, manage sections, subjects, and class schedules. Professors can view and manage attendance data as well as generate attendance analytics.

This project is my undergraduate thesis, developed with a team of four. I primarily handled the software development, including front-end using HTML, CSS, and JavaScript, back-end server-side scripting using PHP, handling the MySQL database, coding the ESP32 microcontroller for attendance recording, and coding the Raspberry Pi using Python for facial recognition.`,
    },
    {
      title: "Let Me Cook",
      date: "2023 - 2024",
      tags: ["Flutter", "Firebase"],
      description: "Social media application for sharing recipes.",
      longDescription: `"Let Me Cook" is a social media application designed for sharing recipes. Users can create profiles, post recipes with detailed ingredients and steps, like and comment on posts, bookmark their favorite recipes, and search for people or recipes.

The app was developed by a team of four. My role involved handling widget interactions in Flutter, handling database operations, and managing the database structure in Firebase.`,
    },
    {
      title: "AidLedger",
      date: "2024",
      tags: ["Ethereum", "Truffle", "Ganache", "Solidity", "Django"],
      description: "Ethereum-based relief goods tracking system.",
      longDescription: `An Ethereum-based relief goods distribution tracking system. The relief good data and status are stored on the blockchain to ensure immutability and transparency. The system used Truffle as the development framework, Ganache for the local blockchain network for deployment and testing, Solidity for writing smart contracts, and Django for the development of the web app.

Developed by a team of three, my role focused primarily on the blockchain system and smart contract development. I wrote the smart contract that tracks the data and status of relief goods. Additionally, I configured Django to utilize the smart contract for retrieval and addition of data to the blockchain.`,
    },
    {
      title: "Flappy Pet",
      date: "2023",
      tags: ["Unity", "C#"],
      description: "Flappy Bird clone.",
      longDescription: `A clone of the classic Flappy Bird game where you can play as different pets. The player controls a pet that must navigate through pipes by tapping the screen. The goal is to achieve the highest score possible.

I developed this project to challenge myself and improve my game development skills.`,
    },
    {
      title: "FOXEY",
      date: "2022",
      tags: ["Unity", "C#"],
      description: "2D platformer game.",
      longDescription: `A 2D platformer game where you play as a fox collecting cherries. The game features multiple levels with various enemies that can be defeated by stomping on them.

I created this solo project to experiment with platformer game mechanics and enhance my development skills.`,
    },
    {
      title: "SHOOT",
      date: "2022",
      tags: ["Unity", "C#"],
      description: "An endless space shooter game.",
      longDescription: `An endless space shooter where you navigate through space and shoot asteroids. The game features a score system that allows players to compete for high scores. You lose if you are hit by asteroids.

This solo project was designed to test my game development skills and explore new gameplay mechanics.`,
    },
    {
      title: "Correct Me",
      date: "2022",
      tags: ["Unity", "C#", "Android"],
      description: "A spelling quiz game.",
      longDescription: `A spelling quiz game where players are presented with a word definition and must choose the correct spelling from two options within a time limit. The game features various difficulties and stages.

This group project was developed as a school requirement to practice game design and teamwork.`,
    },
    {
      title: "QuiZnake Escalade",
      date: "2022",
      tags: ["Unity", "C#", "Android"],
      description: "A board/quiz game inspired by Snakes and Ladders.",
      longDescription: `A board game inspired by Snakes and Ladders where players take on the role of Philippine heroes. The board features effect tiles that trigger various consequences, such as losing life or answering questions to avoid penalties. The game includes multiple stages and difficulty levels.

This group project was developed as a school requirement to explore game mechanics and design.`,
    },
  ];

  return (
    <section
      className="w-full h-5/6 flex flex-col justify-center items-center p-4"
      data-aos="fade-up"
    >
      <h1 className="text-4xl font-bold m-4">PROJECTS</h1>
      <h1 className="mb-4 text-textColor">
        Here are a few projects that I've worked on.
      </h1>
      <div className="w-5xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project, index) => (
          <div key={index} data-aos="fade-up">
            <ProjectTile
              {...project}
              toggleModal={() => toggleModal(project)}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
