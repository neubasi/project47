import Button from '@mui/material/Button';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import { w3cwebsocket as W3CWebSocket } from "websocket";

function App() {
  const [data, setData] = useState({ data: "" });
  const [err, setErr] = useState('');

  /*  const handleClick = async () => {
      try {
        const response = await fetch('https://127.0.0.1:5001/getData');
        if (!response.ok) {
          throw new Error(`Error! status: ${response.status}`);
        }
        const result = await response.json();
        console.log(result)
        setData(result);
      } catch (err: any) {
        setErr(err);
      }
    };*/

  return (
    <div>
      <code style={{ fontWeight: "600", letterSpacing: "3px" }}>SERVICE: <span style={{ backgroundColor: "red", color: "white" }}>OFFLINE</span></code>
      <h1 style={{ letterSpacing: "3px" }}>Experimentelle Forschung.</h1>
      <h3>Auswirkungen des Bewusstsein von Mediatoren auf die Generierung von Pseudo-Zufallszahlen.</h3>
      <br></br>
      <Link to="/code">
        <Button variant="outlined">Los geht's.</Button>
      </Link>
      <br></br>
      <br></br>
      <Api></Api>
    </div>
  )
}

function Api() {
  const [theArray, setTheArray] = useState(Array<any>);
  const handleClick = async () => {
    const client = new W3CWebSocket('ws://localhost:8765');
    client.onopen = () => {
      console.log('WebSocket Client Connected');
    };
    client.onmessage = (message: any) => {
      setTheArray(theArray => [...theArray, message.data]);
    };
    client.onerror = function () {
      console.log('Connection Error');
    };
  }

  return <div style={{ display: "block", maxHeight: "500px", overflowY: "scroll"}}>  <button onClick={handleClick}>Python Websockets API 10 Sekunden Timer</button> 
  <div>{theArray.map((e: any, index) =>
    <div key={index}>{e} </div>
  )}
  </div></div>
}

export default App
