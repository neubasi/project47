import { Button, FormControl, FormControlLabel, Radio, RadioGroup } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

export function Choice() {
  const [value, setValue] = React.useState('');
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value ?? "");
  };
  return (
    <div>
      <h1>Entscheide dich für 0 oder 1.{value} </h1>
      <FormControl>
        <RadioGroup
          aria-labelledby="demo-controlled-radio-buttons-group"
          name="controlled-radio-buttons-group"
          value={value}
          onChange={handleChange}
        >
          <FormControlLabel value="0" control={<Radio sx={{
            '& .MuiSvgIcon-root': {
              fontSize: 50,
            },
          }} />} label="0" />
          <FormControlLabel value="1" control={<Radio sx={{
            '& .MuiSvgIcon-root': {
              fontSize: 50,
            },
          }} />} label="1" />
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
    </div>
  );
}