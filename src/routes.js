import React from "react";
import {Switch, Route} from 'react-router-dom'
import Home from "./Components/Home/Home";
import Projects from "./Components/Projects/Projects";
import Skills from "./Components/Skills/Skills";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";

export default (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/projects" component={Projects} />
    <Route path="/skills" component={Skills} />
    <Route path="/about" component={About} />
    <Route path="/contact" component={Contact} />
  </Switch>
);
