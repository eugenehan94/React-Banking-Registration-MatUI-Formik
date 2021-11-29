import React from "react";
import { Link } from "react-router-dom";
import { Box, Button, Grid, Typography } from "@material-ui/core";

import backgroundVideo from "../Video/background-video.mp4";
import { makeStyles } from "@material-ui/core/styles";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
const useStyles = makeStyles((theme) => ({
  video: {
    position: "fixed",
    zIndex: "-1",
    width: "100%",
  },
  actionMargin: {
    marginTop: theme.spacing(8),
    padding: theme.spacing(10),
    marginBottom: theme.spacing(10),
  },
  lineAlign: {
    marginTop: theme.spacing(7),
    marginBottom: theme.spacing(7),
  },
  lineMargin: {
    marginBottom: theme.spacing(10),
  },
}));

const Client = () => {
  const classes = useStyles();
  return (
    <div>
      {" "}
      <Navbar />
      <video autoPlay loop muted id="video" className={classes.video}>
        <source src={backgroundVideo} type="video/mp4" />
      </video>
      <Box className={classes.actionMargin}>
        <Grid container>
          <Grid item xs={7}>
            <Typography variant="h3" gutterBottom>
              Already a MatUIBank Client
            </Typography>
            <hr className={classes.lineAlign} />
            <Box className={classes.lineMargin}>
              <Typography variant="h5" gutterBottom>
                Save time by signing onto MatUIBank Online or Mobile banking and
                we'll complete some of the application for you.
              </Typography>
            </Box>
            <Button
              variant="contained"
              color="primary"
              disableElevation
              size="large"
              component={Link}
              to="/form"
            >
              No, continue with application
            </Button>
          </Grid>
          <Grid item xs={5}></Grid>
        </Grid>
      </Box>
      <Footer />
    </div>
  );
};

export default Client;
