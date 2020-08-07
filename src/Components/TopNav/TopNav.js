import React, {useRef, useEffect} from "react";
import "./TopNav.css";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import AccountTreeOutlinedIcon from "@material-ui/icons/AccountTreeOutlined";
import TuneOutlinedIcon from "@material-ui/icons/TuneOutlined";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import MailOutlineOutlinedIcon from "@material-ui/icons/MailOutlineOutlined";
import Tooltip from "@material-ui/core/Tooltip";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Zoom from "@material-ui/core/Zoom";
import { Link, animateScroll as scroll } from "react-scroll";
import { gsap } from "gsap";

const SideNav = () => {
  const classes = useStyles();
  let icon1 = useRef(null)
  let icon2 = useRef(null)
  let icon3 = useRef(null)

  useEffect(() => {
    gsap.from([icon1, icon2, icon3], 2, {
      delay: 1,
      x: -10,
      y: 10,
      stagger: {
        amount: .5
      }
    })
  }, [icon1, icon2, icon3])

  return (
    <div className="top-nav-container">
      <nav className="top-nav-links">
        <Link
          ref={(e) => (icon1 = e)}
          activeClass="active"
          to="home"
          spy={true}
          smooth={true}
          offset={0}
          duration={700}
          className={classes.root}
        >
          <LightTooltip
            TransitionComponent={Zoom}
            className={classes.toolTip}
            title="Home"
            placement="bottom"
          >
            <HomeOutlinedIcon className={classes.root}></HomeOutlinedIcon>
          </LightTooltip>
        </Link>
        <Link
        ref={e => icon2 = e}
          activeClass="active"
          to="projects"
          spy={true}
          smooth={true}
          offset={0}
          duration={700}
          className={classes.root}
        >
          <LightTooltip
            TransitionComponent={Zoom}
            className={classes.toolTip}
            title="Projects"
            placement="bottom"
          >
            <AccountTreeOutlinedIcon
              className={classes.root}
            ></AccountTreeOutlinedIcon>
          </LightTooltip>
        </Link>
        <Link
        ref={e => icon3 = e}
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          offset={0}
          duration={700}
          className={classes.root}
        >
          <LightTooltip
            TransitionComponent={Zoom}
            className={classes.toolTip}
            title="About"
            placement="bottom"
          >
            <InfoOutlinedIcon className={classes.root}></InfoOutlinedIcon>
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
