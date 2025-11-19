import React from 'react'
import ReactDOM from 'react-dom/client'
// PERBAIKAN ADA DI BARIS BAWAH INI:
import App from './app.jsx' 
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)