import Button from '@mui/material/Button';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './App.css';

function App() {
  const [data, setData] = useState({ data: "" });
  const [err, setErr] = useState('');

  const handleClick = async () => {
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
  };

  return (
    <div>
      <code style={{fontWeight: "600", letterSpacing: "3px"}}>SERVICE: <span style={{backgroundColor: "red", color: "white"}}>OFFLINE</span></code>
      <h1 style={{letterSpacing: "3px", fontSize: "2.3rem"}}>Experimentelle Forschung.</h1>
      <h3>Auswirkungen des Bewusstsein von Mediatoren auf die Generierung von Pseudo-Zufallszahlen.</h3>
    <br></br>
    <Link to="/code">
      <Button variant="outlined">Los geht's.</Button>
      </Link>
      </div>
  )
}

export default App
