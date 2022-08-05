import { Card, CardContent, Typography, CardActions, Button, Box, CardActionArea, CardMedia, GlobalStyles, ThemeProvider, TextField, Paper, Radio, RadioGroup, FormControlLabel, FormControl, FormLabel } from "@mui/material";
import { fontSize } from "@mui/system";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { theme } from "../App";

export function Choice() {
  
  const [value, setValue] = React.useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value ?? "");
  };

  return (
    <ThemeProvider theme={theme}>
   
    <h1>Entscheide dich für 0 oder 1.{value} </h1>
    <FormControl>
      <RadioGroup
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        value={value}
        onChange={handleChange}
      >
        <FormControlLabel value="0" control={<Radio  sx={{
          '& .MuiSvgIcon-root': {
            fontSize: 50,
          },
        }}/>} label="0" />
        <FormControlLabel value="1" control={<Radio  sx={{
          '& .MuiSvgIcon-root': {
            fontSize: 50,
          },
        }}/>} label="1" />
      </RadioGroup>
    </FormControl>

   
        
        

          <div style={{ display: "flex", justifyContent: "space-between", marginTop: "2rem" }}>
            <Link to="/code">
              <Button variant="outlined">Zurück</Button>
            </Link>
            <Link to="/run">
              <Button variant="contained">Starten</Button>
            </Link>
          </div>
       
      </ThemeProvider>
   
  );
}