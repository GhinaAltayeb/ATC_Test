import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import App from './App.jsx'
import './index.css'
import Table from './sections/Table/Table.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename='ATC_Test'>
      <Routes>
        <Route index element={<App />} />
        <Route path="/table" element={<Table />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
