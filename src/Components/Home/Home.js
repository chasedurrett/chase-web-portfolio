import React, { useRef, useEffect } from "react";
import "./Home.css";
import { gsap } from "gsap";
import { motion } from "framer-motion";
import Button from "@material-ui/core/Button";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

const Home = () => {
  let title1 = useRef(null);
  let title2 = useRef(null);
  let line2 = useRef(null);
  let button1 = useRef(null);
  let markup1 = useRef(null);
  let markup2 = useRef(null);
  let githubIcon = useRef(null);
  let linkedInIcon = useRef(null);
  let resumeButton = useRef(null);
  const classes = useStyles();

  const adjectivesList = ['curious, passionate, meticulous, always learning']

  useEffect(() => {
    gsap.from([title1, title2], 1.2, {
      delay: 0.3,
      opacity: 0,
      ease: "power3.out",
      y: 64,
      stagger: {
        amount: 0.45,
      },
    });
    gsap.from(line2, 2, {
      delay: 1,
      ease: "power3.out",
      x: -850,
      stagger: {
        amount: 0.5,
      },
    });
    gsap.from([button1, markup1, markup2], 2, {
      opacity: 0,
      delay: 2,
    });
    gsap.from([githubIcon, linkedInIcon, resumeButton], 0.3, {
      opacity: 0,
      y: -50,
      delay: 2,
      stagger: {
        amount: 0.2,
      },
    });
  }, [
    title1,
    title2,
    line2,
    button1,
    markup1,
    markup2,
    githubIcon,
    linkedInIcon,
    resumeButton,
  ]);

  return (
    <div className="home-container">
      <div ref={(e) => (markup1 = e)} className="sue" style={{ marginLeft: 8 }}>
        &#60;
      </div>
      <div
        className="hero-container"
        style={{
          position: "absolute",
          height: 300,
          width: 600,
          left: 100,
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
          <div className="line-wrap">
            <div className="line">
              <h2 className="home-title-2" ref={(e) => (title2 = e)}>
                Web Developer // Front & Back End Engineer
              </h2>
            </div>
          </div>
        </div>
        <svg
          ref={(e) => (line2 = e)}
          style={{ position: "absolute", top: 135, left: -20 }}
          width="455"
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
        </svg>
        <Button
          ref={(e) => (button1 = e)}
          style={{ position: "absolute", top: 160, left: 10 }}
          className={classes.button}
          variant="contained"
        >
          Contact
        </Button>
      </div>
      <div ref={(e) => (markup2 = e)} className="sue2">
        &#47;&#62;
      </div>
      <div className="home-social-icons">
        <GitHubIcon ref={(e) => (githubIcon = e)} className={classes.gitHub} />
        <LinkedInIcon
          ref={(e) => (linkedInIcon = e)}
          className={classes.linked}
        />
        <Button
          ref={(e) => (resumeButton = e)}
          className={classes.buttonResume}
        >
          Resume
        </Button>
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
