import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup/ButtonGroup';
import { createTheme, ThemeProvider } from '@mui/material';
import { Link } from 'react-router-dom';
import { SelectionComponent } from './routes/selection';


export const theme = createTheme({
  palette: {
    primary: {
      light: '#484848',
      main: '#212121',
      dark: '#000000',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
});


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
    <ThemeProvider theme={theme}>
      <h1>Experimentelle Forschung.</h1>
      <h2>Auswirkungen des Bewusstsein von Mediatoren auf die Generierung von Pseudo-Zufallszahlen.</h2>
    <br></br>
    <Link to="/selection">
      <Button variant="outlined">Los geht's.</Button>
      </Link>

    

</ThemeProvider>

  )
}

export default App
