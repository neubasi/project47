import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [data, setData] = useState({ data: "" });
  const [err, setErr] = useState('');

  const handleClick = async () => {
    try {
      const response = await fetch('https://hy1dra.com:5001/getData');
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
    <div className="App">
      <div>
        <h1>Experimentelle Forschung.</h1>
        <h2>Auswirkungen des Bewusstsein von Mediatoren auf die Generierung von Pseudo-Zufallszahlen.</h2>
        <br></br>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <a href="https://www.python.org/" target="_blank">
          <img src="/icons8-python.svg" className="logo python" alt="Python logo" />
        </a>
        <a href="https://www.postgresql.org/" target="_blank">
          <img src="/postgresql-icon.svg" className="logo postgresql" alt="Postgresql logo" />
        </a>
      </div>
      <h2>Vite + React + Python +  PostgreSQL</h2>
      <div className="card">
        {err && <h2 style={{ color: 'red' }}>{err}</h2>}
        <button onClick={handleClick}>Python Backend</button>
        {<h4>{data.data}</h4>}
      </div>
      <p className="read-the-docs">
        MIT License
        Copyright (c) 2022 Christian Prem & Simon Neubauer <br></br>
        Permission is hereby granted, free of charge, to any person obtaining a copy
        of this software and associated documentation files (the "Software"), to deal
        in the Software without restriction, including without limitation the rights
        to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
        copies of the Software, and to permit persons to whom the Software is
        furnished to do so, subject to the following conditions:
        The above copyright notice and this permission notice shall be included in all
        copies or substantial portions of the Software.
        THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
        IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
        FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
        AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
        LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
        OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
        SOFTWARE.
      </p>
    </div>
  )
}

export default App
