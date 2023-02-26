import React from "react";
import { makeStyles, Grid, IconButton, useTheme } from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import lightbulb from "../assets/bulb.svg";
import cash from "../assets/cash.svg";
import stopwatch from "../assets/stopwatch.svg";

const useStyles = makeStyles((theme) => ({
  heading: {
    maxWidth: "40em",
  },
  arrowContainer: {
    marginTop: "0.5em",
  },
  mainContainer: {
    padding: "2em 5em 10em 5em",
  },
}));
const CustomSoftware = (props) => {
  const { setSelectedIndex } = props;
  const classes = useStyles();
  const theme = useTheme();
  return (
    <Grid container direction="column" className={classes.mainContainer}>
      <Grid item container direction="row">
        <Grid item className={classes.arrowContainer}>
          <IconButton
            component={Link}
            to="/services"
            style={{ backgroundColor: "transparent" }}
            onClick={() => setSelectedIndex(0)}
          >
            <ArrowBackIcon
              style={{
                color: theme.palette.common.arcBlue,
                marginRight: "1em",
                marginLeft: "-3.5em",
              }}
            />
          </IconButton>
        </Grid>
        <Grid item container direction="column" className={classes.heading}>
          <Grid item>
            <Typography variant="h2">Custom Software Development</Typography>
          </Grid>
          <Grid item>
            <Typography variant="body1" paragraph>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Possimus, odio. Quidem ab consectetur quaerat officia omnis
              corrupti at ad odio dolore suscipit! Expedita vitae necessitatibus
              asperiores enim odit accusamus consectetur.
            </Typography>
            <Typography variant="body1" paragraph>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Possimus, odio. Quidem ab consectetur quaerat officia omnis
              corrupti at ad odio dolore suscipit! Expedita vitae necessitatibus
              asperiores enim odit accusamus consectetur.
            </Typography>
            <Typography variant="body1" paragraph>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Possimus, odio. Quidem ab consectetur quaerat officia omnis
              corrupti at ad odio dolore suscipit! Expedita vitae necessitatibus
              asperiores enim odit accusamus consectetur.
            </Typography>
            <Typography variant="body1" paragraph>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Possimus, odio. Quidem ab consectetur quaerat officia omnis
              corrupti at ad odio dolore suscipit! Expedita vitae necessitatibus
              asperiores enim odit accusamus consectetur.
            </Typography>
          </Grid>
        </Grid>
        <Grid
          item
          className={classes.arrowContainer}
          style={{ backgroundColor: "transparent" }}
          onClick={() => setSelectedIndex(2)}
        >
          <IconButton component={Link} to="/mobileapps">
            <ArrowForwardIcon style={{ color: theme.palette.common.arcBlue }} />
          </IconButton>
        </Grid>
      </Grid>
      <Grid item container direction="row">
        <Grid item container direction="column">
          <Grid item>
            <Typography varaint="h4">Save Energy</Typography>
          </Grid>
          <Grid item>
            <img src={lightbulb} alt="lightBuld" />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default CustomSoftware;
