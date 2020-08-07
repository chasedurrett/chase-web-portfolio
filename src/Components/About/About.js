import React from "react";
import "./About.css";
import Planet from './astronaut.png'
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from "@material-ui/icons/GitHub";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Resume from './Chase_Durrett_Resume_2020.pdf'
import useMediaQuery from '@material-ui/core/useMediaQuery';

const About = () => {
  const classes = useStyles();
  const resumeButtonMQ = useMediaQuery('(max-width: 710px)')
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
        <h4 className="phn-num">+1 817 880 3274</h4>
        <div className="about-contacts-container">
        <a href="https://www.linkedin.com/in/chasedurrett/" target="_blank"><LinkedInIcon className={classes.linked}/></a>
        <a href="https://github.com/chasedurrett" target="_blank"><GitHubIcon className={classes.gitHub}/></a>
        <a href="https://twitter.com/donutboyband" target="_blank"><TwitterIcon className={classes.gitHub}/></a>
        <a href="https://www.instagram.com/chasedurrett/" target="_blank"><InstagramIcon className={classes.gitHub}/></a>
        <a href={Resume} target="_blank"> <Button
          className={resumeButtonMQ ? classes.buttonResumeMQ : classes.buttonResume}
        >
          Resume
        </Button></a>
        </div>
        </div>
        <div className="about-icon-container">
          <img className="planet-icon" src={Planet}/>
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
        color: "#BB86F3",
        cursor: "pointer",
      },
      "&:focus": {
        color: "#BB86F3",
      },
      "&:target": {
        color: "#BB86F3",
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
      background: "#BB86F3",
      boxShadow: "inset 3px 3px 2px #393e4628",
      color: "#BB86F3",
    },
  },
  buttonResume: {
    background: "none",
    border: "1px solid #BB86F3",
    width: 100,
    height: 30,
    marginTop: 20,
    color: "#eeeeee",
    fontFamily: "Recursive, sans-serif",
    fontSize: 13,
    "&:hover": {
      cursor: "pointer",
      background: "#BB86F3a1",
      boxShadow: "inset 3px 3px 2px #393e4628",
      color: "#eeeee",
    },
  },
  buttonResumeMQ: {
    background: "none",
    border: "1px solid #BB86F3",
    width: 100,
    height: 30,
    color: "#eeeeee",
    fontFamily: "Recursive, sans-serif",
    fontSize: 13,
    "&:hover": {
      cursor: "pointer",
      background: "#BB86F3a1",
      boxShadow: "inset 3px 3px 2px #393e4628",
      color: "#eeeee",
    },
  },
  gitHub: {
    color: "#eeeeee",
    height: 25,
    width: 25,
    "&:hover": {
      color: "#BB86F3",
      cursor: "pointer",
    },
  },
  linked: {
    color: "#eeeeee",
    height: 32,
    width: 32,
    "&:hover": {
      color: "#BB86F3",
      cursor: "pointer",
    },
  },
}));
