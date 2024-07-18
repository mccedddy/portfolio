import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <Home />
      </div>
      <div className="flex-grow">
        <div className="p-8" id="about"></div>
        <About />
        <div className="p-8" id="projects"></div>
        <Projects />
        <Footer />
      </div>
    </>
  );
}

export default App;
