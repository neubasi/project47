import { Button, FormControl, FormControlLabel, Radio, RadioGroup } from "@mui/material";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

export function Choice() {
  const navigate = useNavigate();
  const [value, setValue] = React.useState('');
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value ?? "");
  };
  return (
    <div>
      <h1>Wähle 0 oder 1</h1>
      <FormControl>
        <RadioGroup
          aria-labelledby="demo-controlled-radio-buttons-group"
          name="controlled-radio-buttons-group"
          value={value}
          onChange={handleChange}
        >
          <FormControlLabel value="0" control={<Radio sx={{
            '& .MuiSvgIcon-root': {
              fontSize: 40,
            },
          }} />} label="0" />
          <FormControlLabel value="1" control={<Radio sx={{
            '& .MuiSvgIcon-root': {
              fontSize: 40,
            },
          }} />} label="1" />
        </RadioGroup>
      </FormControl>
      <div style={{ display: "flex", justifyContent: "space-between", marginTop: "2rem" }}>
        <Link to="/instruction">
          <Button variant="outlined">Zurück</Button>
        </Link>
      
          <Button onClick={() => navigate("/run")} variant="contained" disabled={value == ''}>Starten</Button>
        
      </div>
    </div>
  );
}