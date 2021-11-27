import {
  AppBar,
  Box,
  Button,
  Grid,
  Toolbar,
  Typography,
} from "@material-ui/core";
import AccountBalanceIcon from "@material-ui/icons/AccountBalance";
import backgroundVideo from "./Video/background-video.mp4";
import { makeStyles } from "@material-ui/core/styles";
import Footer from "./Components/Footer";
const useStyles = makeStyles((theme) => ({
  video: {
    position: "fixed",
    zIndex: "-1",
    width: "100%",
  },
  actionMargin: {
    marginTop: theme.spacing(8),
    padding: theme.spacing(10),
  },
}));

const App = () => {
  const classes = useStyles();

  return (
    <div>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h4">Bank</Typography>
          <AccountBalanceIcon fontSize="large" />
        </Toolbar>
      </AppBar>

      <video autoPlay loop muted id="video" className={classes.video}>
        <source src={backgroundVideo} type="video/mp4" />
      </video>

      <Box className={classes.actionMargin}>
        <Grid container>
          <Grid item xs={7}>
            <Typography variant="h3" gutterBottom>
              Already a MatUIBank Client
            </Typography>
            <hr />
            <Box className={classes.lineMargin}>
              <Typography variant="h6" gutterBottom>
                Save time by signing onto MatUIBank Online or Mobile banking and
                we'll complete some of the application for you.
              </Typography>
            </Box>
            <Button>No, continue with application</Button>
          </Grid>
          <Grid item xs={5}></Grid>
        </Grid>
      </Box>
      <Footer />
    </div>
  );
};

export default App;
