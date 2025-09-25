import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { AppRouter } from './core/router'
import './styles/index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppRouter />
  </StrictMode>,
)
