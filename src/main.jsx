import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import SpellCheck from './SpellCheck.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SpellCheck/>
  </StrictMode>,
)
