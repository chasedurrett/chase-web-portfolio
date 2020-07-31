import React from "react";
import "./Projects.css";
import Stems from "./stems.png";
import Echo from "./echo.png";
import GitHubIcon from "@material-ui/icons/GitHub";
import { makeStyles, withStyles } from "@material-ui/core/styles";

const Projects = () => {
  const classes = useStyles();
  return (
    <div id="projects" className="projects-container">
      <div className="projects-body">
        <div className="projects-body-title-container">
          <h2>Here are my recent projects</h2>
        </div>
        <div className="project-body-one">
          <div className="project-body-one-info">
            <div className="project-body-one-title">Echo</div>
            <div className="project-body-one-about">
              A web app built for users to create a profile and share content.
              Users can create posts with images and URLs, comment on other
              user's posts, and vote on their favorite content. Based on the
              popular website Reddit.
            </div>
            <div className="project-body-one-tech">
              React Node Express S3 Sass Material-UI
            </div>
            <div className="project-body-one-links">
              <GitHubIcon className={classes.gitHub} />
            </div>
          </div>
          <div className="project-body-image-container">
            <img
              style={{ borderRadius: 5, height: 300, width: 500 }}
              src={Echo}
            />
          </div>
        </div>
        <div className="project-body-two">
          <div className="project-body-image-container">
            <img
              style={{ borderRadius: 5, height: 300, width: 500 }}
              src={Stems}
            />
          </div>
          <div className="project-body-two-info">
            <div className="project-body-two-title">Stems</div>
            <div className="project-body-two-about">
              A web app for users to upload and share the sounds they have
              created. Users can create a profile, upload their creations, and
              organize their favorite sounds across the site into "samplepacks"
              (akin to playlists).
            </div>
            <div className="project-body-two-tech">
              React Node Express S3 Sass
            </div>
            <div className="project-body-two-links">
              <GitHubIcon className={classes.gitHub} />
            </div>
          </div>
        </div>
        <div className="project-body-extras">
          <div className="extra-projects-title-container">
            <h2>Other projects</h2>
          </div>
          <div className="project-thumbnails-container">
            <img />
            <img />
            <img />
            <img />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;

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
