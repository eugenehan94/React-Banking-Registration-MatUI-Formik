import React from "react";

import { Box, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import backgroundVideo from "../Video/background-video.mp4";
import Navbar from "../Components/Navbar/Navbar";

const useStyles = makeStyles((theme) => ({
  video: {
    position: "fixed",
    zIndex: "-1",
    width: "100%",
  },
}));

const Home = () => {
  const classes = useStyles();

  return (
    <div>
      <Navbar />
      <video autoPlay loop muted id="video" className={classes.video}>
        <source src={backgroundVideo} type="video/mp4" />
      </video>
      <Box className={classes.actionMargin}>
        <Grid container>
          <Grid item xs={6}>
            <Typography>Get started and get banking</Typography>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Home;
