import { Card, CardContent, Typography, CardActions, Button, Box, CardActionArea, CardMedia, GlobalStyles, ThemeProvider } from "@mui/material";
import React from "react";
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import ThreeDRotation from '@mui/icons-material/ThreeDRotation';
import PersonIcon from '@mui/icons-material/Person';
import RecordVoiceOverIcon from '@mui/icons-material/RecordVoiceOver';
import GroupIcon from '@mui/icons-material/Group';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import { Link } from "react-router-dom";
import { theme } from "../App";

export class SelectionComponent extends React.Component {
    render() {
        return (
            <ThemeProvider theme={theme}>
            <div>
        <GlobalStyles styles={{ Card: {  margin: "1rem", textAlign: "left"}}} />
        <h1>Bitte wähle deine Gruppe.</h1>

        <div style={{display:"flex", flexDirection: "column"}}>
            <Card style={{textAlign: "left", margin: "1rem"}}>
            <CardActionArea>
              <CardContent>
                <div style={{display: "flex"}}>
                    <div style={{marginRight: "1rem"}}>
                <PersonIcon ></PersonIcon></div>
                <Typography gutterBottom variant="h5" component="div">
                  Normal
                </Typography></div>
                <Typography variant="body2" color="text.secondary">
                  Du bist ein ganz normaler Mensch. Keine Panik! Das bedeutet nichts Negatives.<br></br>
                  Lehne dich entspannt zurück und nehme am Experiment teil.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          <Card style={{textAlign: "left", margin: "1rem"}}>
            <CardActionArea>
              <CardContent>
                <div style={{display: "flex" }}>
                    <div style={{marginRight: "1rem"}}>
                <RecordVoiceOverIcon ></RecordVoiceOverIcon></div>
                <Typography gutterBottom variant="h5" component="div">
                  Meditator
                </Typography></div>
                <Typography variant="body2" color="text.secondary">
                  Du glaubst, dass du das Ergebnis des Experiments mit deinem Bewusstsein beeinflussen kannst?<br></br>
                  Wenn ja, dann wähle mich aus!
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>

          <Card style={{textAlign: "left", margin: "1rem"}}>
            <CardActionArea>
              <CardContent>
                <div style={{display: "flex"}}>
                    <div style={{marginRight: "1rem"}}>
                <GroupIcon ></GroupIcon></div>
                <Typography gutterBottom variant="h5" component="div">
                  Gruppen-Mediator
                </Typography></div>
                <Typography variant="body2" color="text.secondary">
                  Gemeinsam sind wir stark! 
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
   
          <Card style={{textAlign: "left", margin: "1rem"}}>
            <CardActionArea>
              <CardContent>
                <div style={{display: "flex"}}>
                    <div style={{marginRight: "1rem"}}>
                <PrecisionManufacturingIcon ></PrecisionManufacturingIcon></div>
                <Typography gutterBottom variant="h5" component="div">
                  Maschine
                </Typography></div>
                <Typography variant="body2" color="text.secondary">
                  Automatisierte, maschinelle, simulierte Ausführung durch Puppeteer.<br></br>
                  Das Programm ist vom Expirement-Code isoliert, dient als Kontrollgruppe. 
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          <br></br>
          </div>
          <Link to="/">
      <Button variant="outlined">Zurück</Button>
      </Link>
          </div>
          </ThemeProvider>
       )
    }
  }