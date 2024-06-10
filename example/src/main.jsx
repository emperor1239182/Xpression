import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Cart } from './Cartitems/Cart';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Cart>
    <App />
    </Cart>
  </React.StrictMode>
)
