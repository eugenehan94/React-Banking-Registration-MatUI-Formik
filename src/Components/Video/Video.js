import React, { useState, useRef } from "react";
import backgroundVideo from "../../Video/background-video.mp4";
import { Box, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import PauseIcon from "@material-ui/icons/Pause";
const useStyles = makeStyles((theme) => ({
  video: {
    position: "fixed",
    zIndex: "-1",
    width: "100%",
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },

  videoButton: {
    position: "fixed",
    top: 100,
    right: 150,
  },
}));

const Video = React.memo(() => {
  const classes = useStyles();

  const videoRef = useRef(null);
  const [videoState, setVideoState] = useState(true);

  const videoAction = () => {
    console.log("Callback");
    if (videoState === true) {
      setVideoState(false);
      videoRef.current.pause();
    }
    if (videoState === false) {
      setVideoState(true);
      videoRef.current.play();
    }
  };
  return (
    <div>
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        id="video"
        className={classes.video}
      >
        <source src={backgroundVideo} type="video/mp4" />
      </video>
      <Box className={classes.videoButton}>
        <Button onClick={videoAction} size="large" variant="outlined">
          {videoState === true ? <PauseIcon /> : <PlayArrowIcon />}
        </Button>
      </Box>
    </div>
  );
});

export default Video;
