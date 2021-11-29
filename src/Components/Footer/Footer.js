import React from "react";

import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: "#272c34",
    paddingLeft: 24,
    paddingRight: 24,
  },
  textColor: {
    color: "#fff",
  },
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Grid container spacing={5}>
        <Grid item>
          <Typography variant="subtitle2" className={classes.textColor}>
            Accessibility
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="subtitle2" className={classes.textColor}>
            CDIC Deposit Insurance Information
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="subtitle2" className={classes.textColor}>
            Privacy and Security
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default Footer;
