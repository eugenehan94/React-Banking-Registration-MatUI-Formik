import React from "react";
import { Box, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  footerComponent: {
    backgroundColor: "#383b3e",
    padding: "0 16px",
    color: "#fff",
  },
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <Box className={classes.footerComponent}>
      <Grid container spacing={4}>
        <Grid item>
          <Typography>Accessibility</Typography>
        </Grid>
        <Grid item>
          <Typography>CDIC Deposit Insurance Information</Typography>
        </Grid>
        <Grid item>
          <Typography>Privacy and Security</Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
