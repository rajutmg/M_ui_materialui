import { Typography } from "@material-ui/core";
import {
  Grid,
  makeStyles,
  useMediaQuery,
  Button,
  useTheme,
} from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import custonSoftwareIcon from "../assets/Custom Software Icon.svg";
import mobileAppsIcon from "../assets/mobileIcon.svg";
import websitesIcon from "../assets/websiteIcon.svg";

const useStyles = makeStyles((theme) => ({
  specialText: {
    fontFamily: "Pacifico",
    color: theme.palette.common.arcOrange,
  },
  subtitle: {
    marginBottom: "1em",
  },
  icon: {
    marginLeft: "2em",
    [theme.breakpoints.down("xs")]: {
      marginLeft: 0,
    },
  },
  serviceContainer: {
    marginTop: "10em",
    [theme.breakpoints.down("xs")]: {
      padding: 25,
    },
  },
  learnButton: {
    ...theme.typography.learnButton,
    fontSize: "0.7rem",
    height: 35,
    padding: 5,
    [theme.breakpoints.down("xs")]: {
      marginBottom: "2em",
    },
  },
}));
const Services = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const { setValue, setSelectedIndex } = props;
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <div>
      <Grid container direction="column">
        <Grid
          item
          style={{
            marginLeft: matchesSM ? 0 : "5em",
            marginTop: matchesSM ? "1em" : "2em",
          }}
        >
          <Typography
            align={matchesSM ? "center" : undefined}
            variant="h2"
            gutterBottom
          >
            Services
          </Typography>
        </Grid>
        {/*---------ios/Android Block-----------*/}
        <Grid item>
          <Grid
            container
            direction="row"
            justify={matchesSM ? "center" : "flex-end"}
            className={classes.serviceContainer}
            style={{ marginTop: matchesSM ? "1em" : "5em" }}
          >
            <Grid
              item
              style={{
                textAlign: matchesSM ? "center" : undefined,
                width: matchesSM ? undefined : "35em",
              }}
            >
              <Typography variant="h4"> ios/Android App Development</Typography>
              <Typography variant="subtitle1" className={classes.subtitle}>
                Extend Functionality. Extend Access. Increase Engagement.
              </Typography>
              <Typography variant="subtitle1">
                Intregrate your web experience or create a standalone app{" "}
                {matchesSM ? null : <br />} with either mobile plateform.
              </Typography>
              <Button
                component={Link}
                to="/mobileapps"
                variant="outlined"
                className={classes.learnButton}
                onClick={() => {
                  setValue(1);
                  setSelectedIndex(2);
                }}
              >
                Learn More
                <ArrowForwardIcon
                  style={{
                    color: theme.palette.common.arcBlue,
                    marginLeft: 5,
                  }}
                />
              </Button>
            </Grid>
            <Grid item style={{ marginRight: matchesSM ? 0 : "5em" }}>
              <img
                src={mobileAppsIcon}
                alt="mobile phone icon"
                className={classes.icon}
                width="250em"
              />
            </Grid>
          </Grid>
        </Grid>
        {/*---------Custom Software Development-----------*/}
        <Grid item>
          <Grid
            container
            direction="row"
            justify={matchesSM ? "center" : undefined}
            className={classes.serviceContainer}
          >
            <Grid
              item
              style={{
                marginLeft: matchesSM ? 0 : "5em",
                textAlign: matchesSM ? "center" : undefined,
              }}
            >
              <Typography variant="h4"> Custom Software Development</Typography>
              <Typography variant="subtitle1" className={classes.subtitle}>
                Save Energy. Save Time. Save Money
              </Typography>
              <Typography variant="subtitle1">
                Complete digital solutions, from investigation to {""}
                <span className={classes.specialText}>celebration.</span>
              </Typography>
              <Button
                component={Link}
                to="/customesoftware"
                variant="outlined"
                className={classes.learnButton}
                onClick={() => {
                  setValue(1);
                  setSelectedIndex(1);
                }}
              >
                Learn More
                <ArrowForwardIcon
                  style={{
                    color: theme.palette.common.arcBlue,
                    marginLeft: 5,
                  }}
                />
              </Button>
            </Grid>
            <Grid item>
              <img
                src={custonSoftwareIcon}
                alt="custom software icon"
                className={classes.icon}
              />
            </Grid>
          </Grid>
        </Grid>
        {/*---------Websites Block-----------*/}
        <Grid item>
          <Grid
            container
            direction="row"
            justify={matchesSM ? "center" : "flex-end"}
            className={classes.serviceContainer}
            style={{ marginBottom: "10em" }}
          >
            <Grid
              item
              style={{
                textAlign: matchesSM ? "center" : undefined,
                width: matchesSM ? undefined : "35em",
              }}
            >
              <Typography variant="h4"> Website Development</Typography>
              <Typography variant="subtitle1" className={classes.subtitle}>
                Reach More. Discover More . Sell More
              </Typography>
              <Typography variant="subtitle1">
                Optimized for Search Engines, built for speed.
              </Typography>
              <Button
                component={Link}
                to="/websites"
                variant="outlined"
                className={classes.learnButton}
                onClick={() => {
                  setValue(1);
                  setSelectedIndex(3);
                }}
              >
                Learn More
                <ArrowForwardIcon
                  style={{
                    color: theme.palette.common.arcBlue,
                    marginLeft: 5,
                  }}
                />
              </Button>
            </Grid>
            <Grid item style={{ marginRight: matchesSM ? 0 : "5em" }}>
              <img
                src={websitesIcon}
                alt="website icon"
                className={classes.icon}
                width="250em"
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Services;
