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

export class NameComponent extends React.Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <div>
          <h1>Bitte Namen eingeben.</h1>
          <TextField fullWidth autoFocus={true} label="Name" placeholder="Alice im Wunderland" id="Name" />

          <div style={{ display: "flex", justifyContent: "space-between", marginTop: "2rem" }}>
            <Link to="/code">
              <Button variant="outlined">Zurück</Button>
            </Link>
            <Link to="/instruction">
              <Button variant="contained">Weiter</Button>
            </Link>
          </div>
        </div>
      </ThemeProvider>
    )
  }
}