import React from "react";
import "./App.css";
import SideNav from "./Components/SideNav/SideNav";
import routes from "./routes";
import { withRouter } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <SideNav />
      {routes}
    </div>
  );
}

export default withRouter(App);
