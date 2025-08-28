import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Routepath from './Routepath'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Routepath />
  </StrictMode>,
)
