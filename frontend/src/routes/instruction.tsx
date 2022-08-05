import { Card, CardContent, Typography, CardActions, Button, Box, CardActionArea, CardMedia, GlobalStyles, ThemeProvider, TextField } from "@mui/material";
import React from "react";
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import ThreeDRotation from '@mui/icons-material/ThreeDRotation';
import PersonIcon from '@mui/icons-material/Person';
import RecordVoiceOverIcon from '@mui/icons-material/RecordVoiceOver';
import GroupIcon from '@mui/icons-material/Group';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import { Link } from "react-router-dom";
import { theme } from "../App";

export class InstructionComponent extends React.Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <div>
          <h1>1. Wähle eine Farbe aus.</h1>
          <div style={{display: "flex"}}>
          <div style={{height: "150px", width: "150px" ,backgroundColor: "red"}}></div>
          <br></br>
          <div style={{height: "150px", width: "150px" ,backgroundColor: "blue"}}></div>
        </div>
        <div style={{display: "flex", justifyContent: "space-between", marginTop: "2rem"}}>
        <Link to="/name">
            <Button variant="outlined">Zurück</Button>
          </Link>
          <Link to="/experiment">
            <Button variant="contained">Experiment starten</Button>
          </Link>
</div>

        </div>
      </ThemeProvider>
    )
  }
}