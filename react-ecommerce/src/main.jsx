import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import { CarritoProvider } from './context/CarritoContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <CarritoProvider>
      <App />
    </CarritoProvider>
  </BrowserRouter>
)
