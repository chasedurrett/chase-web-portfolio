import React from "react";
import "./App.css";
import SideNav from "./Components/SideNav/SideNav";
import Home from "./Components/Home/Home";
import Projects from "./Components/Projects/Projects";
import Skills from "./Components/Skills/Skills";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import { withRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <SideNav />
      <Home />
      <Projects />
      <Skills />
      <About />
      <Contact />
    </div>
  );
}

export default withRouter(App);
