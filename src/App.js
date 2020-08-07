import React from "react";
import "./App.css";
import SideNav from "./Components/SideNav/SideNav";
import TopNav from './Components/TopNav/TopNav'
import Home from "./Components/Home/Home";
import Projects from "./Components/Projects/Projects";
import About from "./Components/About/About";
import useMediaQuery from '@material-ui/core/useMediaQuery';

function App() {
  const sideNavMQ = useMediaQuery('(max-width: 1130px)')
  return (
    <div className="App">
      {sideNavMQ ? <TopNav /> : <SideNav />}
      <Home />
      <Projects />
      <About />
    </div>
  );
}

export default App;
