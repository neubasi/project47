import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './App'
import './index.css'
import { Choice } from './routes/choice'
import { CodeComponent } from './routes/code'
import { InstructionComponent } from './routes/instruction'
import { NameComponent } from './routes/name'
import { Run } from './routes/run'
import { SelectionComponent } from './routes/selection'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
<React.StrictMode>
<BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="selection" element={<SelectionComponent />} />
      <Route path="code" element={<CodeComponent />} />
      <Route path="name" element={<NameComponent />} />
      <Route path="instruction" element={<InstructionComponent />} />
      <Route path="run" element={<Run />} />
      <Route path="choice" element={<Choice />} />
    </Routes>
  </BrowserRouter>
  </React.StrictMode>
)
