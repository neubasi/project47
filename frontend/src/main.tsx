import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './App'
import './index.css'
import { SelectionComponent } from './routes/selection'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
<React.StrictMode>
<BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="selection" element={<SelectionComponent />} />
    </Routes>
  </BrowserRouter>
  </React.StrictMode>
)
