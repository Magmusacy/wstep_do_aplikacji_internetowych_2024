import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Logowanie from './components/formularze/Logowanie'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Logowanie />
  </StrictMode>,
)
