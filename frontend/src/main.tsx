import { ThemeProvider } from '@emotion/react'

import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './App'
import './index.css'
import { Choice } from './routes/4_choice'
import { Code } from './routes/1_code'
import { Instruction } from './routes/3_instruction'
import { Run } from './routes/5_run'
import { SelectionOverview } from './routes/2_selection'
import { theme } from './theme'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
<React.StrictMode>
<ThemeProvider theme={theme}>
<BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="selection" element={<SelectionOverview />} />
      <Route path="code" element={<Code />} />
      <Route path="instruction" element={ <Instruction />} />
      <Route path="run" element={<Run />} />
      <Route path="choice" element={<Choice />} />
    </Routes>
  </BrowserRouter>
  </ThemeProvider>
  </React.StrictMode>
)
