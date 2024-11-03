import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Profi from './profi.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Profi/>
  </StrictMode>,
)
