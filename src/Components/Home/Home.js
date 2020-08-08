import React, { useRef, useEffect } from "react";
import "./Home.css";
import { gsap } from "gsap";
import Button from "@material-ui/core/Button";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import UseAnimations from 'react-useanimations';
import arrowDown from 'react-useanimations/lib/arrowDown'
import {Link} from "react-scroll";

const Home = () => {
  let title1 = useRef(null);
  let title2 = useRef(null);
  let title3 = useRef(null);
  let arrow = useRef(null)
  const classes = useStyles();


  useEffect(() => {
    gsap.from([title1, title2, title3, arrow], 1.9, {
      delay: 0.3,
      opacity: 0,
      ease: "power3.out",
      stagger: {
        amount: 1,
      },
    });
  }, [
    title1, title2, title3, arrow
  ]);

  return (
    <div id="home" className="home-container">
      <div
        className="hero-container"
      >
        <div className="home-titles-container" >
          <div className="line-wrap" style={{marginTop: 20}}>
            <div
              className="line"
              // style={{ height: 10 }}
              ref={(e) => (title1 = e)}
            >
              <h1 className="home-title-1">
                <span className="chase">Chase Durrett.</span>
              </h1>
            </div>
          </div>
          <div className="line-wrap" style={{ marginTop: 20 }}>
            <div className="line" style={{height: 100}}>
              <h2 className="home-title-2" ref={(e) => (title2 = e)}>
                Software Engineer.
              </h2>
            </div>
          </div>
          <div className="line-wrap" style={{ marginTop: 10, height: 45 }}>
            <div className="line" style={{height: 25}}>
              <h2 className="home-title-3" ref={(e) => (title3 = e)}>
                [and other things]
              </h2>
            </div>       
          </div>
          <div className="down-arrow" ref={(e) => (arrow = e)}>
        <Link
        activeClass="active"
        to="projects"
        spy={true}
        smooth={true}
        offset={0}
        duration={700}
        >
        <UseAnimations  animation={arrowDown} strokeColor="#BB86F3" loop={true} size={66} 
        />
        </Link>
        </div>
        </div>
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
