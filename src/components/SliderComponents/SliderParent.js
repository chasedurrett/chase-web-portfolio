import React from "react";
import AwesomeSlider from "react-awesome-slider";
import Home from "./Home/Home";
import Projects from "./Projects/Projects";
import Skills from "./Skills/Skills";
import About from "./About/About";
import Contact from "./Contact/Contact";
import {
  Provider,
  Link,
  withNavigationContext,
  withNavigationHandlers,
} from "react-awesome-slider/dist/navigation";

const SliderParent = () => {
  const NavigationSlider = withNavigationHandlers(AwesomeSlider);

  return (
    <div>
      <NavigationSlider
        media={[
          {
            slug: "page-one",
            className: "page-one",
            children: () => <Home />,
          },
          {
            slug: "page-two",
            className: "page-two",
            children: () => <Projects />,
          },
          {
            slug: "page-three",
            className: "page-three",
            children: () => <Skills />,
          },
          {
            slug: "page-four",
            className: "page-four",
            children: () => <About />,
          },
          {
            slug: "page-five",
            className: "page-five",
            children: () => <Contact />,
          },
        ]}
      />
    </div>
  );
};

export default SliderParent;
