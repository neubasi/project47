import { Button } from "@mui/material";
import { Link } from "react-router-dom";

export function Instruction() {
  return (
    <div>
      <h1>Ablauf</h1>
      <div style={{ textAlign: "left" }}>
        <ul>
          <li> <span>Wähle <strong>0</strong> oder <strong>1</strong></span></li>
          <li> <span>Konzentriere dich <strong>10 Sekunden</strong> auf deine Zahl</span></li>
          <li> <span> Versuche die Zufallsgenerierung mit deiner Zahl zu <strong>beeinflussen</strong></span></li>
        </ul>
      </div>
      <br></br>
        <Link to="/choice">
          <Button variant="contained">Experiment starten</Button>
        </Link>
    
    </div>
  )
}