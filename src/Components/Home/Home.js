import React, { useRef, useEffect } from "react";
import "./Home.css";
import { gsap } from "gsap";
import { motion } from "framer-motion";

const Home = () => {
  let title1 = useRef(null);
  let title2 = useRef(null);

  useEffect(() => {
    gsap.from([title1, title2], 1.2, {
      delay: 0.8,
      ease: "power3.out",
      y: 64,
      stagger: {
        amount: 0.75,
      },
    });
  }, [title1, title2]);

  const pathVar = {
    hidden: {
      opacity: 0,
      pathLength: 1,
    },
    visible: {
      opacity: 1,
      pathLength: 10,
      transition: {
        duration: 2,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="home-container">
      <div className="home-titles-container">
        <div className="line-wrap">
          <div style={{ height: 80 }} className="line">
            <h1 className="home-title-1">Hi,</h1>
          </div>
        </div>
        <div className="line-wrap">
          <div
            className="line"
            style={{ height: 70 }}
            ref={(e) => (title1 = e)}
          >
            <h1 className="home-title-1">
              I'm <span className="chase">Chase</span>
            </h1>
          </div>
        </div>
        <div className="line-wrap">
          <div className="line">
            <h2 className="home-title-2" ref={(e) => (title2 = e)}>
              <span className="i-am-a">I am a</span>Web Developer // Front &
              Back End Engineer
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
