import { Timer } from "@mui/icons-material";
import { Box, LinearProgress } from "@mui/material";
import React from "react";
import { useEffect, useState } from "react";

export function Run() {

  const [show, setShow] = React.useState(false);

  setTimeout(() => {
    setShow(true)
  }, 5000);

 
  return (
    <div>
      <Countdown></Countdown>
      {show ? 
      <div>
      <Loader></Loader> 
      <div style={{
        height: "400px", width: "400px", margin: "0", background: "blue"
      }}></div></div>
      : <div></div>}
      <br></br>
      {
        
        
      }
    </div>
  )
}

function Loader() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    if (progress == 100) return;
    const intervalId = setInterval(() => {
      setProgress(progress + 0.5);
    }, 50);
    return () => {
      clearInterval(intervalId)
    };
  }, [progress]);

  return (
    <Box sx={{ width: '100%' }}>
      <LinearProgress variant="determinate" value={progress} />{progress}
    </Box>
  )
}

function Countdown() {
  const [cooldown, setcooldown] = useState(5);
  useEffect(() => {
    if (!cooldown) return;
    const intervalId = setInterval(() => {
      setcooldown(cooldown - 1);
    }, 1000);
    return () => {
      clearInterval(intervalId)
    };
  }, [cooldown]);
  return (
    cooldown > 0 ? <h1 style={{ fontSize: "15rem" }}>{cooldown}</h1> : <div></div>
  )
}