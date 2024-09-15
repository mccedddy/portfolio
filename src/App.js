import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import ProjectModal from "./components/ProjectModal";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";

function App() {
  const [modal, setModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const toggleModal = (project = null) => {
    setSelectedProject(project);
    setModal(!modal);
  };

  return (
    <div>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <Home />
      </div>
      <div className="flex-grow">
        <div id="about"></div>
        <About />
        <div id="skills"></div>
        <Skills />
        <div id="projects"></div>
        <Projects toggleModal={toggleModal} />
        <div className="p-4"></div>
        <Footer />
      </div>

      {/* modal */}
      {modal && (
        <ProjectModal project={selectedProject} toggleModal={toggleModal} />
      )}
    </div>
  );
}

export default App;
