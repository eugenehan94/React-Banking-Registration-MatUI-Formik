import React from "react";
import { Link } from "react-router-dom";
import { Box, Button, Chip, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import NavBar from "../Components/Navbar/Navbar";
import Video from "../Components/Video/Video";
import Footer from "../Components/Footer/Footer";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import creditCardSVG from "../SVG/credit-card.svg";
const useStyles = makeStyles((theme) => ({
  video: {
    position: "fixed",
    zIndex: "-1",
    width: "100%",
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
  actionMargin: {
    marginTop: theme.spacing(8),
    padding: theme.spacing(10),
    [theme.breakpoints.down("md")]: {
      marginTop: theme.spacing(0),
      paddingLeft: theme.spacing(1),
      paddingRight: theme.spacing(1),
    },
  },
  lineAlign: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
}));

const Home = () => {
  const classes = useStyles();

  return (
    <div>
      <NavBar />
      <Video />
      <Box className={classes.actionMargin}>
        <Grid container>
          <Grid item md={7} xs={12}>
            <Typography variant="h2" gutterBottom>
              Get started and get banking
            </Typography>

            <Typography variant="h5">
              This should only take about 5 minutes
            </Typography>
            <hr className={classes.lineAlign} />
            <Grid container spacing={2}>
              <Grid item md={6} xs={12}>
                <Box>
                  <img
                    src={creditCardSVG}
                    alt="credit card"
                    style={{ width: "100%" }}
                  />
                </Box>
              </Grid>
              <Grid item md={6} xs={12}>
                <Typography variant="h5" gutterBottom>
                  MatUI Adventure Visa Infinity* Card
                </Typography>
                <Chip label="WELCOME OFFER" color="primary" />
                <Typography variant="h6">
                  Join and get over $1500 in value!
                </Typography>
              </Grid>
              <Grid item md={6} xs={12}>
                <Button
                  fullWidth
                  variant="contained"
                  color="primary"
                  disableElevation
                  size="large"
                  component={Link}
                  to="client"
                >
                  Let's Go
                </Button>
              </Grid>

              <Grid item md={6} xs={12}></Grid>

              <Grid item xs={12}>
                <Box style={{ display: "flex" }}>
                  <ChevronRightIcon />
                  <Typography variant="subtitle2">
                    By applying, you consent to the collection, use and sharing
                    of your personal information as described in MatUI Privacy
                    Policy.
                  </Typography>
                </Box>
                <Box style={{ display: "flex" }}>
                  <ChevronRightIcon />
                  <Typography variant="subtitle2">
                    To apply, make sure you’re a Canadian resident and you’ve
                    reached the age of majority in your province.
                  </Typography>
                </Box>
                <Box style={{ display: "flex" }}>
                  <ChevronRightIcon />
                  <Typography variant="subtitle2">
                    Merchants may be charged higher fees for accepting premium
                    credit cards.
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
      <Footer />
    </div>
  );
};

export default Home;
