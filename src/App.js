import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";

function App() {
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
        <Projects />
        <div className="p-4"></div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
