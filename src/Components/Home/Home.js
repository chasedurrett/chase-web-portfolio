import React, { useRef, useEffect } from "react";
import "./Home.css";
import { gsap } from "gsap";
import { motion } from "framer-motion";
import Button from "@material-ui/core/Button";
import { makeStyles, withStyles } from "@material-ui/core/styles";

const Home = () => {
  let title1 = useRef(null);
  let title2 = useRef(null);
  let line2 = useRef(null);
  const classes = useStyles();

  useEffect(() => {
    gsap.from([title1, title2], 1.2, {
      delay: 1,
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
  }, [title1, title2, line2]);

  return (
    <div className="home-container">
      <div
        className="home-titles-container"
        style={{ position: "absolute", left: 180, top: 350 }}
      >
        <div className="line-wrap">
          <div
            className="line"
            style={{ height: 70 }}
            ref={(e) => (title1 = e)}
          >
            <h1 className="home-title-1">
              <span className="chase">Chase Durrett</span>
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
        style={{ position: "absolute", top: 490, left: 244 }}
        width="425"
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
      <Button className={classes.button} variant="contained">
        Contact
      </Button>
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
    background: 'none',
    border: '1px solid #4ecca3',
    color: '#eeeeee'
  },
}));
