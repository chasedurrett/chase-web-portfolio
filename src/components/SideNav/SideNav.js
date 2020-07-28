import React from "react";
import "./SideNav.css";
import { Link } from "react-router-dom";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import AccountTreeOutlinedIcon from "@material-ui/icons/AccountTreeOutlined";
import TuneOutlinedIcon from "@material-ui/icons/TuneOutlined";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import MailOutlineOutlinedIcon from "@material-ui/icons/MailOutlineOutlined";
import Tooltip from "@material-ui/core/Tooltip";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Zoom from "@material-ui/core/Zoom";

const SideNav = () => {
  const classes = useStyles();

  return (
    <div className="side-nav-container">
      {/* <div className="side-nav-logo-container"></div> */}
      <nav className="side-nav-links">
        <Link to="/" className={classes.root}>
          <LightTooltip
            TransitionComponent={Zoom}
            className={classes.toolTip}
            title="Home"
            placement="right"
          >
            <HomeOutlinedIcon className={classes.root}></HomeOutlinedIcon>
          </LightTooltip>
        </Link>
        <Link to="/projects" className={classes.root}>
          <LightTooltip
            TransitionComponent={Zoom}
            className={classes.toolTip}
            title="Projects"
            placement="right"
          >
            <AccountTreeOutlinedIcon
              className={classes.root}
            ></AccountTreeOutlinedIcon>
          </LightTooltip>
        </Link>
        <Link className={classes.root}>
          <LightTooltip
            TransitionComponent={Zoom}
            className={classes.toolTip}
            title="Skills"
            placement="right"
          >
            <TuneOutlinedIcon className={classes.root}></TuneOutlinedIcon>
          </LightTooltip>
        </Link>
        <Link className={classes.root}>
          <LightTooltip
            TransitionComponent={Zoom}
            className={classes.toolTip}
            title="About"
            placement="right"
          >
            <InfoOutlinedIcon className={classes.root}></InfoOutlinedIcon>
          </LightTooltip>
        </Link>
        <Link className={classes.root}>
          <LightTooltip
            TransitionComponent={Zoom}
            className={classes.toolTip}
            title="Contact"
            placement="right"
          >
            <MailOutlineOutlinedIcon
              className={classes.root}
            ></MailOutlineOutlinedIcon>
          </LightTooltip>
        </Link>
      </nav>
      <div className="side-nav-social-links"></div>
    </div>
  );
};

export default SideNav;

const useStyles = makeStyles((theme) => ({
  root: {
    "& > svg": {
      margin: theme.spacing(2),
      color: "white",
      height: 45,
      transition: "all 400ms",
      "&:hover": {
        color: "#4ecca3",
        cursor: "pointer",
      },
      "&:focus": {
        color: "#4ecca3",
      },
      "&:target": {
        color: "#4ecca3",
      },
    },
  },
  toolTip: {
    height: 25,
    width: 25,
  },
}));

const LightTooltip = withStyles((theme) => ({
  tooltip: {
    backgroundColor: theme.palette.common.white,
    color: "rgba(0, 0, 0, 0.87)",
    boxShadow: theme.shadows[1],
    fontSize: 11,
  },
}))(Tooltip);
