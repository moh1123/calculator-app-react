import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Test from './toGSAPtest.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Test></Test>
  </StrictMode>,
)
