import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'

//import App from './usuario.jsx'
import App from './usuario.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
