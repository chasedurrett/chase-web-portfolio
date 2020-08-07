import React from "react";
import "./Projects.css";
import Stems from "./stems.png";
import Echo from "./echo.png";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkIcon from '@material-ui/icons/Link';
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { Link } from "@material-ui/core";


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
              <GitHubIcon className={classes.gitHub}  /> <LinkIcon className={classes.url} />
            </div>
          </div>
          <div className="project-body-image-container">
            <img
              style={{ borderRadius: 5, boxShadow: '4px 4px 8px #101010'}}
              src={Echo}
            />
          </div>
        </div>
        <div className="project-body-two">
          <div className="project-body-image-container">
            <img
              style={{
                 borderRadius: 5, 
                 boxShadow: '4px 4px 8px #101010',
                }}
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
              <GitHubIcon className={classes.gitHub}  /> <LinkIcon className={classes.url} />
            </div>
          </div>
        </div>
        <div className="project-body-extras">
          <div className="extra-projects-title-container">
            <h2>Other projects</h2>
          </div>
          <div className="project-thumbnails-container">
            <div className="project-thumbnail">
              <div className="project-thumbnail-title-container"><h2 className="project-thumbnail-title">Reddit Bot</h2></div>
              <div className="project-thumbnail-content-container"><p>A bot created in Node.js to be the automated moderator for a subreddit I created on Reddit.</p></div>
              <div className="project-thumbnail-tech">Node Snoowrap Snoostorm Dotenv</div>
              <div className="project-thumbnail-links-container"><GitHubIcon className={classes.gitHub}/></div>
            </div>
            <div className="project-thumbnail">
              <div className="project-thumbnail-title-container"><h2 className="project-thumbnail-title">Subscriptions</h2></div>
              <div className="project-thumbnail-content-container"><p>An application to keep track of monthly subscriptions. Add, edit, and delete subscriptions and see your monthly total.</p></div>
              <div className="project-thumbnail-tech">React Express Axios CSS</div>
              <div className="project-thumbnail-links-container"><GitHubIcon className={classes.gitHub}/> <LinkIcon className={classes.url}/></div>
            </div>
            <div className="project-thumbnail">
              <div className="project-thumbnail-title-container"><h2 className="project-thumbnail-title">J. Pastel</h2></div>
              <div className="project-thumbnail-content-container"><p>A website I created for my band J. Pastel. An experiment with react-particles</p></div>
              <div className="project-thumbnail-tech">React React-Particles Sass</div>
              <div className="project-thumbnail-links-container"><GitHubIcon className={classes.gitHub}/> <LinkIcon className={classes.url}/></div>
            </div>
            <div className="project-thumbnail">
              <div className="project-thumbnail-title-container"><h2 className="project-thumbnail-title">Soft UI Clock</h2></div>
              <div className="project-thumbnail-content-container"><p>A simple clock created with react-clock. An experiment with the increasingly popular Neumorphism design.</p></div>
              <div className="project-thumbnail-tech">React React-Clock CSS</div>
              <div className="project-thumbnail-links-container"><GitHubIcon className={classes.gitHub}/> <LinkIcon className={classes.url}/></div>
            </div>
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
      background: "#BB86F3",
      boxShadow: "inset 3px 3px 2px #393e4628",
      color: "#BB86F3",
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
  url: {
    color: "#eeeeee",
    height: 25,
    width: 25,
    "&:hover": {
      color: "#BB86F3",
      cursor: "pointer",
    },
  }
}));
