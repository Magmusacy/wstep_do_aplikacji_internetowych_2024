import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import NowyKoszyk from './components/koszyk/NowyKoszyk'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <NowyKoszyk />
  </StrictMode>,
)
