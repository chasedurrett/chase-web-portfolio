import React, { useRef, useEffect } from "react";
import "./Home.css";
import { gsap } from "gsap";
import Button from "@material-ui/core/Button";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import Typewriter from "typewriter-effect";

const Home = () => {
  let title1 = useRef(null);
  let title2 = useRef(null);
  let title3 = useRef(null);
  let button1 = useRef(null);
  let markup1 = useRef(null);
  let markup2 = useRef(null);
  let githubIcon = useRef(null);
  let linkedInIcon = useRef(null);
  let resumeButton = useRef(null);
  const classes = useStyles();

  const adjectivesList = ["curious, passionate, meticulous, always learning"];

  useEffect(() => {
    gsap.from([title1, title2, title3], 1.9, {
      delay: 0.3,
      opacity: 0,
      ease: "power3.out",
      // y: 64,
      stagger: {
        amount: 0.85,
      },
    });
    // gsap.from(line2, 2, {
    //   delay: 1,
    //   ease: "power3.out",
    //   x: -850,
    //   stagger: {
    //     amount: 0.5,
    //   },
    // });
    // gsap.from([markup1, markup2], 2, {
    //   opacity: 0,
    //   delay: 1,
    // });
    gsap.from([resumeButton, githubIcon, linkedInIcon], 0.3, {
      opacity: 0,
      y: -50,
      delay: 1.5,
      stagger: {
        amount: 0.4,
      },
    });
  }, [
    title1,
    title2,
    title3,
    // button1,
    // markup1,
    // markup2,
    githubIcon,
    linkedInIcon,
    resumeButton,
  ]);

  return (
    <div id="home" className="home-container">
      {/* <div ref={(e) => (markup1 = e)} className="sue" style={{ marginLeft: 8 }}>
        &#60;
      </div> */}
      <div
        className="hero-container"
        style={{
          position: "absolute",
          height: 500,
          width: 800,
          left: 140,
          top: 160,
        }}
      >
        <div className="home-titles-container" style={{ position: "absolute" }}>
          <div className="line-wrap">
            <div
              className="line"
              style={{ height: 70 }}
              ref={(e) => (title1 = e)}
            >
              <h1 className="home-title-1">
                <span className="chase">Chase Durrett.</span>
              </h1>
            </div>
          </div>
          <div className="line-wrap" styles={{ marginTop: 20 }}>
            <div className="line">
              <h2 className="home-title-2" ref={(e) => (title2 = e)}>
                Hi, I am a full stack developer who builds clean and effective
                websites and applications.
              </h2>
            </div>
          </div>
          <div className="line-wrap" styles={{ marginTop: 150 }}>
            <div className="line">
              <h2 className="home-title-3" ref={(e) => (title3 = e)}>
                View my <span>projects</span> or <span>get in touch.</span>
              </h2>
            </div>
          </div>
        </div>
      </div>
      {/* <svg
          ref={(e) => (line2 = e)}
          style={{ position: "absolute", top: 155, left: 12 }}
          width="380"
          height="2"
          viewBox="0 0 399 2"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M0 1.5V0.5H699V1.5H0Z"
            fill="#4ECCA3"
          />
        </svg> */}
      {/* </div>
   <div ref={(e) => (markup2 = e)} className="sue2">
        &#47;&#62;
      </div> */}
      {/* <div className="typewriter-container">
        <h3 className="typewriter-h3">
          <Typewriter
            options={{
              strings: [
                "curious",
                "passionate",
                "meticulous",
                "always learning",
              ],
              autoStart: true,
              loop: true,
            }}
          />
          about development
        </h3>
      </div> */}
      <div className="home-social-icons">
      <Button
          ref={(e) => (resumeButton = e)}
          className={classes.buttonResume}
        >
          Resume
        </Button>
        <GitHubIcon ref={(e) => (githubIcon = e)} className={classes.gitHub} />
        <LinkedInIcon
          ref={(e) => (linkedInIcon = e)}
          className={classes.linked}
        />
      </div>
    </div>
  );
};

export default Home;

const useStyles = makeStyles((theme) => ({
  root: {
    "& > svg": {
      margin: theme.spacing(2),
      color: "white",
      height: 45,
      transition: "all 400ms",
      "&:hover": {
        color: "#00adb5",
        cursor: "pointer",
      },
      "&:focus": {
        color: "#00adb5",
      },
      "&:target": {
        color: "#00adb5",
      },
    },
  },
  button: {
    background: "none",
    border: "1px solid #4ecca3",
    width: 200,
    color: "#eeeeee",
    fontFamily: "Recursive, sans-serif",
    fontSize: 18,
    "&:hover": {
      cursor: "pointer",
      background: "#4ecca3",
      boxShadow: "inset 3px 3px 2px #393e4628",
      color: "#232931",
    },
  },
  buttonResume: {
    background: "none",
    border: "1px solid #4ecca3",
    width: 100,
    height: 30,
    color: "#eeeeee",
    fontFamily: "Recursive, sans-serif",
    fontSize: 13,
    "&:hover": {
      cursor: "pointer",
      background: "#4ecca3",
      boxShadow: "inset 3px 3px 2px #393e4628",
      color: "#232931",
    },
  },
  gitHub: {
    color: "#eeeeee",
    height: 25,
    width: 25,
    "&:hover": {
      color: "#4ecca3",
      cursor: "pointer",
    },
  },
  linked: {
    color: "#eeeeee",
    height: 32,
    width: 32,
    "&:hover": {
      color: "#4ecca3",
      cursor: "pointer",
    },
  },
}));
