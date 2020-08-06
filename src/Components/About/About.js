import React from "react";
import "./About.css";
import Planet from './astronaut.png'
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from "@material-ui/icons/GitHub";
import { makeStyles, withStyles } from "@material-ui/core/styles";


const About = () => {
  const classes = useStyles();
  return (
    <div id="about" className="about-container">
      <div className="about-body">
        <div className="about-info">
          <h2>Hello,</h2>
          <p>I'm Chase, a software engineer. I love creating things for many mediums, but I especially love building web applications that provide users a clean and satisfying experience.</p>
          <p>After graduating from the University of Oklahoma in 2018, I started work at The Practice creating commercial music for brands such as Samsung, Spotify, and L'Oreal. I decided to make a career change and recently graduated from DevMountain where I studied full-stack web development. I am currently looking for work opportunities that will challenge me and aid my growth in my new field!</p>
          <h4>Technologies I've been using:</h4>
          <ul>
            <li>Javascript (es6)</li>
            <li>React</li>
            <li>Node</li>
            <li>Express</li>
            <li>PostgresQL</li>
            <li>AWS</li>
            <li>Sass</li>
            <li>Bcrypt</li>
            <li>Massive</li>
          </ul>
        </div>
        <div className="about-contact">
        <h2>Contact</h2>
        <h4>chase.durrett80@gmail.com</h4>
        <h4>+1 817 880 3274</h4>
        <div style={{height: 200, display: 'flex', flexDirection: 'column', alignItems: 'flex-end', justifyContent: 'space-around'}}>
        <LinkedInIcon className={classes.linked}/>
        <GitHubIcon className={classes.gitHub}/>
        <TwitterIcon className={classes.gitHub}/>
        <InstagramIcon className={classes.gitHub}/>
        </div>
        </div>
        <div className="about-icon-container">
          <img style={{height: 100}} src={Planet}/>
        </div>
        <div className="about-socials-container">
          <h6>Built by Chase Durrett</h6>
        </div>
      </div>
    </div>
  );
};

export default About;

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
