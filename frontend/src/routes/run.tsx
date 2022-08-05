import { Card, CardContent, Typography, CardActions, Button, Box, CardActionArea, CardMedia, GlobalStyles, ThemeProvider, TextField, Paper } from "@mui/material";
import { fontSize } from "@mui/system";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { theme } from "../App";

export function Run() {

  const [cooldown, setcooldown] = useState(5);



  useEffect(() => {
    if (!cooldown) return;
    const intervalId = setInterval(() => {
      setcooldown(cooldown - 1);
    }, 1000);
    return () => clearInterval(intervalId);
  }, [cooldown]);


  return (
    <div>
      {
        cooldown > 0 ? <h1 style={{ fontSize: "15rem" }}>{cooldown}</h1> : 
        <div style={{ height: "400px" , width: "800px", background:"blue", transform: "scale(1)",
        animation: "pulse 2s infinite"}}></div>
      }
    </div>



  )
}