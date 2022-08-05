import { Card, CardContent, Typography, CardActions, Button, Box, CardActionArea, CardMedia, GlobalStyles, ThemeProvider, TextField, Paper } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { theme } from "../App";

export class InstructionComponent extends React.Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <div>
       <h1>Ablauf</h1>
       <div style={{ textAlign: "left" }}>
       <h2>1. Wähle die Zahl <strong>0</strong> oder <strong>1</strong>.</h2>
       <h2>2. Konzentriere dich 10 Sekunden lang auf deine Zahl und versuche die Zufallsgenerierung mit deiner Zahl zu beeinflussen.</h2>
       </div>
          <div style={{ display: "flex", justifyContent: "space-between", marginTop: "2rem" }}>
            <Link to="/name">
              <Button variant="outlined">Zurück</Button>
            </Link>
            <Link to="/choice">
              <Button variant="contained">Experiment starten</Button>
            </Link>
          </div>

        </div>
      </ThemeProvider>
    )
  }
}