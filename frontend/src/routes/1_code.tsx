import { Button, TextField } from "@mui/material";
import { Link } from "react-router-dom";

export function Code() {
  return (
    <div>
      <h1>Bitte Code eingeben.</h1>
      <TextField fullWidth autoFocus={true} label="Code" placeholder="XXXXX-XXXXX-XXXXX-XXXXX-XXXXX" id="Code" />
      <div style={{ display: "flex", justifyContent: "space-between", marginTop: "2rem" }}>
        <Link to="/">
          <Button variant="outlined">Zurück</Button>
        </Link>
        <Link to="/selection">
          <Button variant="contained">Weiter</Button>
        </Link>
      </div>
    </div>
  )
}