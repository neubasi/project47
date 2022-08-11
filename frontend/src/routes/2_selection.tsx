import GroupIcon from '@mui/icons-material/Group';
import PersonIcon from '@mui/icons-material/Person';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import RecordVoiceOverIcon from '@mui/icons-material/RecordVoiceOver';
import { Card, CardActionArea, CardContent, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';


export function SelectionOverview() {
  return (
    <div>
      <h1>Bitte wähle deine Gruppe.</h1>
      <div style={{ display: "flex", flexDirection: "column", maxWidth: "500px" }}>
        <SelectionCard link="/instruction" icon={() => <PersonIcon />} titel="Normal" text="Du bist ein ganz normaler Mensch. Keine Panik! Das bedeutet nichts Negatives. Lehne dich entspannt zurück und nehme am Experiment teil."> </SelectionCard>
        <SelectionCard link="/instruction" icon={() => <RecordVoiceOverIcon />} titel="Meditator" text="Du glaubst, dass du das Ergebnis des Experiments mit deinem Bewusstsein beeinflussen kannst? Wenn ja, dann wähle mich aus!"> </SelectionCard>
        <SelectionCard link="/instruction" icon={() => <GroupIcon />} titel="Gruppen-Mediator" text=" Ein Individuum kann viel erreichen. Gemeinsam sind wir stärker! <br></br>"> </SelectionCard>
        <SelectionCard link="/instruction" icon={() => <PrecisionManufacturingIcon />} titel="Maschine" text="Automatisierte, maschinelle, simulierte Ausführung durch Puppeteer.<br></br>
                  Das Programm ist vom Expirement-Code isoliert, dient als Kontrollgruppe."> </SelectionCard>
        <br></br>
      </div>
    </div>
  )
}

function SelectionCard(props: { children: React.ReactNode, link: string, titel: string, text: string, icon: React.ElementType }) {
  return (
      <div>
          <Link to={props.link}>
              <Card style={{ textAlign: "left", margin: "1rem" }}>
                  <CardActionArea>
                      <CardContent>
                          <div style={{ display: "flex" }}>
                              <div style={{ marginRight: "1rem" }}>
                                  {React.createElement(props.icon)}</div>
                              <Typography gutterBottom variant="h6" component="div">
                                  {props.titel}
                              </Typography></div>
                          <Typography variant="body2" color="text.secondary">
                              {props.text}
                          </Typography>
                      </CardContent>
                  </CardActionArea>
              </Card>
          </Link>
      </div>
  )
}
