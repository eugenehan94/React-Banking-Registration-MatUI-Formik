import React from "react";
import { Link } from "react-router-dom";
import { Box, Button, Grid, Typography } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";
import Navbar from "../Components/Navbar/Navbar";
import Video from "../Components/Video/Video";
import Footer from "../Components/Footer/Footer";
const useStyles = makeStyles((theme) => ({
  actionMargin: {
    marginTop: theme.spacing(8),
    padding: theme.spacing(10),
    marginBottom: theme.spacing(10),
    [theme.breakpoints.down("md")]: {
      marginTop: theme.spacing(0),
      paddingLeft: theme.spacing(1),
      paddingRight: theme.spacing(1),
    },
  },
  lineAlign: {
    marginTop: theme.spacing(7),
    marginBottom: theme.spacing(7),
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
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
      <Video />
      <Box className={classes.actionMargin}>
        <Grid container>
          <Grid item md={7} xs={12}>
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
              Continue with application
            </Button>
          </Grid>
          <Grid item md={5} xs={1}></Grid>
        </Grid>
      </Box>
      <Footer />
    </div>
  );
};

export default Client;
